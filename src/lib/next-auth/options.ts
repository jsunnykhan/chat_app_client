import axios from 'axios';
import type { NextAuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { TokenInfo } from './tokenInfo';
import { getJwtPayload } from './decodeToken';

export const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'safwan@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }
        try {
          const payload = {
            username: credentials?.username,
            password: credentials?.password,
          };
          const response = await axios.post(
            [process.env.BASE_API_URL as string, 'authenticate/login'].join('/'),
            payload
          );
          return response.data;
        } catch (error: any) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      //   token = await refreshAccessToken(token.refreshToken);
      return { ...token, ...user, ...account };
    },
    async session({ session, token, user }: { session: Session | any; token: any | TokenInfo | JWT; user: User }) {
      const payload = getJwtPayload(token.access);

      // if()

      return session;
    },
  },
};

// async function refreshAccessToken(refreshToken: any) {
//   try {
//     // Get a new set of tokens with a refreshToken
//     const refreshData: any = { refreshToken: refreshToken };
//     const apiService = new AuthService();
//     const data = await apiService.refresh(refreshData);
//     return {
//       accessToken: data?.data?.accessToken,
//       refreshToken: data?.data?.refreshToken,
//     };
//   } catch (error) {
//     return {
//       ...refreshToken,
//       error: error,
//     };
//   }
// }
