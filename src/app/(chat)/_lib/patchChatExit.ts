import { AUTH_MESSAGE, SIGNIN_REQUIRED } from '@/constants/authErrorMessage';
import {
  AGORA_EXIT,
  NETWORK_ERROR_MESSAGE,
} from '@/constants/responseErrorMessage';
import { callFetchWrapper } from '@/lib/fetchWrapper';
import { getSession } from '@/serverActions/auth';
import isNull from '@/utils/validation/validateIsNull';

type Props = {
  agoraId: number;
};

const patchChatExit = async ({ agoraId }: Props) => {
  const session = await getSession();
  if (isNull(session)) {
    throw new Error(SIGNIN_REQUIRED);
  }

  const res = await callFetchWrapper(`/api/v1/auth/agoras/${agoraId}/exit`, {
    method: 'PATCH',
    next: {
      tags: [],
    },
    credentials: 'include',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${session.user?.accessToken}`,
    },
  });

  if (!res.ok && !res.success) {
    if (!res.error) {
      throw new Error(AGORA_EXIT.UNKNOWN_ERROR);
    }

    if (res.error.code === 1301) {
      if (
        res.error.message.startsWith(AGORA_EXIT.SERVER_RESPONSE_NOT_FOUND_AGORA)
      ) {
        throw new Error(AGORA_EXIT.NOT_FOUND_AGORA);
      } else if (
        res.error.message.startsWith(AGORA_EXIT.SERVER_RESPONSE_NOT_FOUND_USER)
      ) {
        throw new Error(AGORA_EXIT.NOT_FOUND_USER);
      }
    } else if (res.error.code === 503) {
      throw new Error(NETWORK_ERROR_MESSAGE.OFFLINE);
    } else if (AUTH_MESSAGE.includes(res.error.message)) {
      throw new Error(res.error.message);
    }

    throw new Error(AGORA_EXIT.FAILED_TO_EXIT);
    // return null;
  }

  const result = res.response;

  return result;
};

export default patchChatExit;
