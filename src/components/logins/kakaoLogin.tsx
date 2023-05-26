"use client";
import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const KakaoLogin = () => {
  const { data } = useSession();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <button onClick={() => signIn("kakao")}>Kakao Sign in</button>
      <button onClick={() => signIn("naver")}>Naver Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default KakaoLogin;
