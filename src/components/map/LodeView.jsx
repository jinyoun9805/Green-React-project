import React from "react";
import style from "../../css/map/lodeview.module.css";
export default function LodeView(props) {
  return (
    <div className={style.contener}>
      <h2 className={style.title}>
        언제든지 저희가 필요하다면 주저없이 찾아와주세요 <br />
        <span className={style.span}>항상 모두가 기다리고 있습니다.</span>
      </h2>

      <h4 className={style.h4}>찾아 오시는 길</h4>
      <ul className={style.ul}>
        <li>
          센터 이름
          <p>{props.place_name}</p>
        </li>
        <li>
          주소
          <p>{props.address}</p>
        </li>
        <li>
          전화
          <p>{props.phone}</p>
        </li>
        <li>
          <button
            className={style.btn}
            onClick={() => {
              // 버튼 클릭시 카카오맵 길찾기 url로 이동한다.

              const place_url = props.place_url;
              window.open(place_url);
            }}
          >
            길찾기
          </button>
        </li>
      </ul>
    </div>
  );
}
