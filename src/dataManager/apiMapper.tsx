const KAKAO_API_HOST = process.env.KAKAO_REST_API_HOST;

export const EndPoint = {
  POST_KAKAO_LOGIN: `${KAKAO_API_HOST}/v1/oidc/userinfo`,
};

// API 요청을 위한 ApiMapper 객체를 정의.
const ApiMapper = {
  get: {},
  post: {
    [EndPoint.POST_KAKAO_LOGIN]: {},
  },
  patch: {},
  put: {},
  delete: {},
};

// ApiMapper를 기본 내보내기로 설정.
export default ApiMapper;
