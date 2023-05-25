import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_LOGIN_API_KEY!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
