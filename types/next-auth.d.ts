import 'next-auth';
import '@auth/core/jwt';
import { AUTHENTICATED, UNAUTHENTICATED } from '@/constants/Auth';

export declare module 'next-auth' {
  interface User {
    accessToken: string;
    authProvider: string;
    name: string;
    email: string;
  }

  interface Session {
    data: {
      user: {
        accessToken: string;
        authProvider: string;
        name: string;
        email: string;
      };
    };
    status: typeof AUTHENTICATED | typeof UNAUTHENTICATED;
  }
}

export declare module '@auth/core/jwt' {
  interface JWT {
    email: string | null;
    accessToken: string;
    authProvider: string;
  }
}
