// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//호출주소: http://localhost:3000/api/hello
//라우팅 주소는 /api 폴더 아래 물리적 폴더명과 파일명으로 라우팅 주소가 설정됨

//NextApuRequest 객체는 웹브라우저에서 서버로 전달되는 각종 정보를 추출하는 HTTPRequest
//NextApiResponse 타입은 서버에서 웹브라우저로 전달하는 응답처리를 위한  HTTpResponse
import type { NextApiRequest, NextApiResponse } from "next";
//서버에서 웹브라우저로 반환하는 처리결과 데이터 타입
type ResponseData = {
  code: number;
  data: string | null;
  msg: string;
};
//해당경우 (HEllo)에 대한 C?R?U/D 처리를 위한 RESTFUL API 기능 구현 핸들러 함수
//하나의 함수로 해당업무의 모든 라우팅 방식을 통합해서 기능을 제공하는 통합 라우팅 함수

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  //API 호출 기본 결과값 처리
  let apiResult: ResponseData = {
    code: 400,
    data: null,
    msg: "Failed",
  };
  try {
    if (req.method == "GET") {
      //step1: 로직 구현

      //Step2:API 호출결과 설정

      apiResult.code = 200;
      apiResult.data = "안녕하세요. 벡엔드데이터 GET 서비스입니다.";
      apiResult.msg = "Ok";
    }
    if (req.method == "POST") {
      //step1: 로직 구현
      //Step2:API 호출결과 설정

      apiResult.code = 200;
      apiResult.data = "안녕하세요. 벡엔드데이터 POST 서비스입니다.";
      apiResult.msg = "Ok";
    }
  } catch (err) {
    //Step2:API 호출결과 설정
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.msg = "Server Error Failed";
  }
  res.json(apiResult);
}
