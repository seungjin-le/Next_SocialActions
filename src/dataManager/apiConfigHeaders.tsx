export const kakaoHeader = {
  accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  Authorization: `Bearer ${process.env.KAKAO_LOGIN_API_KEY}`,
};
