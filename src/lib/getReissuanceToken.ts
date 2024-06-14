import showToast from '@/utils/showToast';
import tokenManager from '@/utils/tokenManager';

// eslint-disable-next-line import/prefer-default-export
export const getReissuanceToken = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/reissue`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenManager.getToken()}`,
    },
  });

  if (!res.ok) {
    showToast('요청이 실패했습니다.\n 다시 시도해주세요.', 'error');
    return;
  }

  const result = await res.json();

  tokenManager.setToken(result.accessToken);
};
