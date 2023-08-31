import React from "react";
import KakaoMap from "../../components/map/KakaoMap";
export default function Map() {
  // const baseURL =
  //   "https://apis.data.go.kr/1383000/gmis/teenRAreaServiceV2/getTeenRAreaListV2?serviceKey=";
  // const apikey =
  //   "Cb8HA2fIsXZOi2muC%2BNG05esA8GfVCn6tgBGUq9PvvFHDWF3Z0lgae8oYegDA2AfqALAxQI4FkEIULzZeQUUbQ%3D%3D";
  // const query = `&pageNo=1&numOfRows=10&type=json&fcltNm=%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EC%B2%AD%EC%86%8C%EB%85%84%EC%9D%B4%EB%8F%99%EC%89%BC%ED%84%B0&ctpvNm=%EC%84%9C%EC%9A%B8&sggNm=%EC%A2%85%EB%A1%9C`;

  return (
    <div>
      <KakaoMap></KakaoMap>
    </div>
  );
}
