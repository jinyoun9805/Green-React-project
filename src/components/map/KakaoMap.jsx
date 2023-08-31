import React, { useEffect, useState } from "react";
import "../../css/map/map.css";
import LodeView from "./LodeView";
const { kakao } = window;

export default function KakaoMap() {
  const [apis, setApi] = useState();
  const [ss, setSs] = useState();
  const [inpo, setInpo] = useState();
  useEffect(() => {
    fetch(
      "https://apis.data.go.kr/1383000/gmis/teenRAreaServiceV2/getTeenRAreaListV2?serviceKey=Cb8HA2fIsXZOi2muC%2BNG05esA8GfVCn6tgBGUq9PvvFHDWF3Z0lgae8oYegDA2AfqALAxQI4FkEIULzZeQUUbQ%3D%3D&pageNo=1&numOfRows=1000&type=json&fcltNm=%EC%B2%AD%EC%86%8C%EB%85%84%EC%89%BC%ED%84%B0"
    )
      .then((response) => {
        // JSON 데이터를 파싱하여 반환
        return response.json();
      })
      .then((data) => {
        setApi(data.response.body.items.item);
        setSs(data.response.body.items.item.length);
      });
  }, []);
  setTimeout(() => {
    const Container = document.getElementById("map"); // 지도를 표시할 div
    var Option;

    if (inpo == null) {
      Option = {
        center: new kakao.maps.LatLng(37.27538, 127.05488),
        level: 12,
      };
    } else {
      Option = {
        center: new kakao.maps.LatLng(inpo.y, inpo.x),
        level: 7,
      };
    }

    const ps = new kakao.maps.services.Places();
    for (var i = 0; i < ss; i++) {
      if (apis && apis[i]) {
        var keyword = apis[i].fcltNm;
        ps.keywordSearch(keyword, placesSearchCB);
      }
    }
    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        let bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        setInpo(place);
        // console.log(apis.lat);
        // console.log(apis.lot);
        console.log(place);
        new kakao.maps.LatLng(place.y, place.x);
      });
    }
    const map = new kakao.maps.Map(Container, Option);
  }, [apis, inpo]);

  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  return (
    <>
      <LodeView
        place_name={inpo ? inpo.place_name : ""}
        address={inpo ? inpo.address_name : ""}
        phone={inpo ? inpo.phone : ""}
        place_url={inpo ? inpo.place_url : ""}
      ></LodeView>
      <div id="map" className="map"></div>;
    </>
  );
}
