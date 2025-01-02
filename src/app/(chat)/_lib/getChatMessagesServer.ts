import { Message } from '@/app/model/Message';
import { QueryFunction } from '@tanstack/react-query';
import { getChatMessagesQueryKey as getChatMessagesTags } from '@/constants/queryKey';
import { callFetchWrapper } from '@/lib/fetchWrapper';
import { getSession } from '@/serverActions/auth';
import { AUTH_MESSAGE, SIGNIN_REQUIRED } from '@/constants/authErrorMessage';
import {
  CHAT_MESSAGE,
  NETWORK_ERROR_MESSAGE,
} from '@/constants/responseErrorMessage';
import isNull from '@/utils/validation/validateIsNull';

type Meta = {
  key: number | null;
  effectiveSize: number;
};

type Search = {
  size: string;
  key?: string;
};

export const getChatMessagesServer: QueryFunction<
  { chats: Message[]; meta: Meta },
  [_1: string, _2: string, _3: string],
  { meta: Meta }
> = async ({ queryKey, pageParam }) => {
  const [, agoraId] = queryKey;
  const searchParams: Search = {
    size: pageParam.meta.effectiveSize.toString(),
  };

  if (pageParam.meta.key !== null) {
    searchParams.key = pageParam.meta.key.toString();
  }
  const urlSearchParams = new URLSearchParams(Object.entries(searchParams));

  const session = await getSession();
  if (isNull(session)) {
    throw new Error(SIGNIN_REQUIRED);
  }

  const res = await callFetchWrapper(
    `/api/v1/open/agoras/${agoraId}/chats?${urlSearchParams.toString()}`,
    {
      next: {
        tags: getChatMessagesTags(Number(agoraId)),
      },
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    },
  );

  if (!res.ok && !res.success) {
    if (!res.error) {
      throw new Error(CHAT_MESSAGE.UNKNOWN_ERROR);
    }

    if (res.error.code === 1301) {
      throw new Error(CHAT_MESSAGE.NOT_FOUND_AGORA);
    } else if (res.error.code === -1) {
      throw new Error(res.error.message);
    } else if (res.error.code === 503) {
      throw new Error(NETWORK_ERROR_MESSAGE.OFFLINE);
    } else if (AUTH_MESSAGE.includes(res.error.message)) {
      throw new Error(res.error.message);
    }

    throw new Error(CHAT_MESSAGE.FAILED_TO_GET_CHAT);
  }

  const result = res.response;

  return {
    chats: result.chats.reverse(),
    meta: result.meta,
  };
};