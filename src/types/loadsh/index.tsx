import { ReactNode } from "react";

declare module "lodash" {
  // lodash 모듈의 타입 선언 확장
  export interface Window {
    Kakao: any;
  }
  export interface cou {
    AppPropsType: {
      session: any;
    };
  }
  export interface Session {
    user: {
      id: string;
      email: string;
    };
  }

  // 페이지 레이아웃 타입 정의
  export interface PageLayoutProps {
    children: ReactNode;
  }
}
// ApiConfig 타입 정의
export interface ApiConfigProps {
  data: any;
  query: { [key: string]: string };
  path: object;
  method: string;
  url: string;
}
