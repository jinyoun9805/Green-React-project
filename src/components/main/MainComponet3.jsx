import React from "react";
import style from "../../css/main/mainComponet3.module.css";
import { useNavigate } from "react-router-dom";
export default function MainComponet3() {
  const navigate = useNavigate();
  return (
    <>
      <span className={style.container}>
        <img
          className={style.imgs}
          src="https://plus.unsplash.com/premium_photo-1682309504951-43bae484e04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fCVFQiVBNiVBQyVFQiVCNyVCMHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </span>
      <span className={style.span}>
        <h2 className={style.h2}>솔직한 후기</h2>
        <p>상담받은 친구들의 따듯한</p>
        <p>후기를 보고 신청해도 좋아</p>
        <button className={style.btn} onClick={() => navigate("/ReviewNotice")}>
          상담 후기{" "}
        </button>
      </span>
    </>
  );
}
