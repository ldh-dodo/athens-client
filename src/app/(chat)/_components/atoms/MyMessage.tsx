import { Message } from '@/app/model/Message';
import React, { useRef, useState } from 'react';
import * as StompJs from '@stomp/stompjs';
import useClickOutside from '@/hooks/useClickOutside';
import useTouchHandler from '@/hooks/useTouchHandler';
import { AGORA_POSITION } from '@/constants/agora';
import { PROFLELIST } from '@/constants/consts';
import UserImage from '../../../_components/atoms/UserImage';
import ReactionMenuButton from './ReactionMenuButton';
import useIsEmojiSendable from '../../../../hooks/useIsEmojiSendable';
import EmojiModal from './EmojiModal';
import UserReaction from './UserReaction';

type Props = {
  message: Message;
  isSameUser: boolean;
  shouldShowTime: boolean;
  client: React.RefObject<StompJs.Client> | null;
};

function MyMessage({ message, isSameUser, shouldShowTime, client }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [showEmojiModal, setShowEmojiModal] = useState(false);

  const toggleEmojiModal = () => {
    setShowEmojiModal(!showEmojiModal);
  };

  const canSendEmoji = useIsEmojiSendable();
  const modalRef = useRef<HTMLDivElement>(null);

  const { handleTouchStart, handleTouchEnd, handleTouchCancel } =
    useTouchHandler(() => setIsHovered(true));
  useClickOutside(modalRef, () => setShowEmojiModal(false), showEmojiModal);

  return (
    <article
      key={message.chatId}
      className={`flex justify-end items-start p-0.5rem ${isSameUser && 'pt-0'} pr-12 pb-0 h-full`}
    >
      <div
        ref={modalRef}
        className={`p-0.5rem ${isSameUser && 'pt-0'} pb-0 flex flex-col justify-center items-end`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
      >
        {!isSameUser && (
          <div
            role="region"
            aria-label="사용자 이름"
            className="text-xs lg:text-sm pb-5 dark:text-white"
          >
            {message.user.nickname}
          </div>
        )}
        <div className="flex justify-end">
          {isHovered
            ? canSendEmoji && (
                <div className="flex justify-center items-center">
                  <ReactionMenuButton
                    className="mr-10 p-4 bg-dark-light-600 rounded-md"
                    toggleEmojiModal={toggleEmojiModal}
                  />
                </div>
              )
            : shouldShowTime && (
                <div className="flex justify-end items-end">
                  <time className="text-xxs pr-8 dark:text-dark-line">
                    {message.createdAt &&
                      new Date(message.createdAt)
                        ?.toLocaleTimeString()
                        .slice(0, -3)}
                  </time>
                </div>
              )}
          <div
            className={`max-w-[60vw] relative whitespace-pre-line ${message.user.type === AGORA_POSITION.CONS ? 'bg-red-200' : 'bg-blue-200'} rounded-tl-lg ${isSameUser && 'rounded-tr-lg'} rounded-bl-lg rounded-br-lg p-7 pl-10 pr-10 text-xs lg:text-sm`}
          >
            {message.content}
            {showEmojiModal && (
              <div
                className="absolute mt-[26px] top-1/2 right-0 z-20 whitespace-nowrap bg-athens-gray dark:bg-white p-4 rounded-md border-1 border-gray-200
              before:content-[''] before:absolute before:top-[-14px] before:right-0 before:-translate-x-1/2 before:border-8 before:border-transparent custom-before before:z-10"
              >
                <EmojiModal
                  className="w-20 h-20"
                  chatId={message.chatId}
                  client={client}
                  setShowEmojiModal={setShowEmojiModal}
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <UserReaction className="w-16 h-16" chatId={message.chatId} />
        </div>
      </div>
      {!isSameUser ? (
        <div
          aria-hidden
          className="border-1 border-gray-300 w-fit rounded-3xl dark:bg-white"
        >
          <UserImage
            name={message.user.nickname}
            file={
              message.user.photoNumber
                ? PROFLELIST[message.user.photoNumber - 1].file
                : PROFLELIST[0].file
            }
            className="w-50 h-50 under-mobile:w-40 under-mobile:h-40 flex rounded-3xl"
            w={50}
            h={50}
          />
        </div>
      ) : (
        <div className="w-50 under-mobile:w-40" />
      )}
    </article>
  );
}

export default React.memo(MyMessage);
