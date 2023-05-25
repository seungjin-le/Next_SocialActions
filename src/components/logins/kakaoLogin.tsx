"use client";
import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const KakaoLogin = () => {
  const {
    data: { user },
  } = useSession();
  console.log(user);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <button onClick={() => signIn("kakao")}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default KakaoLogin;
