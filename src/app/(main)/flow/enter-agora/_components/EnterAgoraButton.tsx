'use client';

import { postEnterAgoraInfo } from '@/app/(main)/_lib/postEnterAgoraInfo';
import Loading from '@/app/_components/atoms/loading';
import { ParticipationPosition } from '@/app/model/Agora';
import { homeSegmentKey } from '@/constants/segmentKey';
import { useAgora } from '@/store/agora';
import { useEnter } from '@/store/enter';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AGORA_STATUS } from '@/constants/Agora';

const OBSERVER: ParticipationPosition = 'OBSERVER';

export default function EnterAgoraButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pathname = usePathname();

  const router = useRouter();
  const { selectedAgora, setSelectedAgora, setEnterAgora } = useAgora();

  const routePage = () => {
    if (!selectedAgora.id) {
      const agoraId = pathname.split('/')[3];

      router.push(`/agoras/${agoraId}`);
    } else if (selectedAgora.id) {
      router.push(`/agoras/${selectedAgora.id}`);
    } else {
      router.push(homeSegmentKey);
    }
  };

  const callEnterAgoraAPI = async () => {
    const { selectedProfileImage, selectedPosition, nickname } =
      useEnter.getState();
    const info = {
      ...selectedProfileImage,
      nickname,
      role: selectedPosition,
    };
    return postEnterAgoraInfo({ info, agoraId: selectedAgora.id });
  };

  const mutation = useMutation({
    mutationFn: callEnterAgoraAPI,
    onSuccess: (response) => {
      if (response) {
        if (response === AGORA_STATUS.CLOSED) {
          setEnterAgora({
            id: Number(pathname.split('/')[3]),
            thumbnail: selectedAgora.thumbnail,
            title: selectedAgora.title,
            status: AGORA_STATUS.CLOSED,
            role: OBSERVER,
            isCreator: false,
            agoraColor: selectedAgora.agoraColor,
          });
          setSelectedAgora({
            ...selectedAgora,
            status: AGORA_STATUS.CLOSED,
          });
        } else {
          setEnterAgora({
            id: response.agoraId,
            thumbnail: selectedAgora.thumbnail,
            title: selectedAgora.title,
            status: selectedAgora.status,
            role: response.type,
            isCreator: response.isCreator,
            agoraColor: selectedAgora.agoraColor,
          });
        }
        routePage();
      } else {
        setIsLoading(false);
      }
    },
    onError: () => {
      setIsLoading(false);
      // console.dir(error);
      // alert('문제가 발생했습니다. 다시 시도해주세요.');
    },
  });

  const enterAgora = () => {
    const { nickname, setMessage, selectedPosition } = useEnter.getState();

    if (selectedPosition !== OBSERVER) {
      if (nickname.length > 10) {
        setMessage('닉네임은 10자 이내로 입력해주세요.');
        return;
      }
      if (nickname.trim().length === 0) {
        setMessage('닉네임을 입력해주세요.');
        return;
      }
    }

    setIsLoading(true);
    mutation.mutate();
  };

  return (
    <button
      type="button"
      aria-label="아고라 입장하기"
      disabled={isLoading}
      onClick={enterAgora}
      className="mt-2rem text-sm bg-athens-main p-0.5rem w-full text-white rounded-lg"
    >
      {isLoading ? (
        <Loading
          w="16"
          h="16"
          className="m-2 flex justify-center items-center"
        />
      ) : (
        '입장하기'
      )}
    </button>
  );
}
