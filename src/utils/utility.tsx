import ApiConfig, {HttpMethod} from '@/dataManager/apiConfig'


/**
 * 주어진 값이 비어있는지 확인.
 * @param value - 확인할 값
 * @returns {boolean} - 값이 비어있으면 true, 그렇지 않으면 false를 반환.
 */
export const isEmpty = function (value: any) {
  return (
    value === '' || // 빈 문자열인지 확인
    value === null || // null인지 확인
    value === undefined || // undefined인지 확인
    (typeof value === 'object' && !Object.keys(value).length) // 객체이면서 속성이 없는지 확인
  )
}

/**
 * getData 함수는 주어진 URL을 통해 데이터를 가져오는 비동기 함수 모듈.
 * @param {string} url - 데이터를 요청할 URL
 * @param {object} data - 데이터를 요청할 URL
 * @param {string} query - 데이터를 요청할 URL
 * @param {string} path - 데이터를 요청할 URL
 * @returns {Promise<any>} - 데이터 응답을 담은 Promise 객체
 */
export const getData = async (url: string) => {
  try {
    const {data}: any = await ApiConfig.request({
      method: HttpMethod.GET,
      url: url,
      data: {},
      query: {},
      path: {},
    })
    if (!data) {
      return alert(`Not Data`)
    }
    return data
  } catch (error: any) {
    alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
  }
  //if (!isSuccess || isEmpty(result)) {
  //       return message
  //     }
  //     if (code === 1000) {
  //       return message
  //     } else {
  //       return message
  //     }
  //   } catch (error) {
  //     return error
  //   }
}

