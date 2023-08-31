import React from "react";
import style from "../../css/main/mainComponet.module.css";
import { useNavigate } from "react-router-dom";

export default function MainComponet() {
  const navigate = useNavigate();
  return (
    <>
      <span className={style.container}>
        <img
          className={style.imgs}
          src="https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fCVFQyVCMiVBRCVFQyU4NiU4QyVFQiU4NSU4NCVFQiU5MyVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </span>
      <span className={style.span}>
        <h2 className={style.h2}>우리가 도와줄게</h2>
        <p>전국 어디든 우리가 찾아갈수 있어</p>
        <p>우리 편하게 얘기 하는거야 </p>
        <button onClick={() => navigate("/apply")} className={style.btn}>
          상담 신청하기{" "}
        </button>
      </span>
    </>
  );
}
