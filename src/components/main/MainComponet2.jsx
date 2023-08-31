import React from "react";
import style from "../../css/main/mainComponet2.module.css";
import { useNavigate } from "react-router-dom";
export default function MainComponet2() {
  const navigate = useNavigate();
  return (
    <>
      <span className={style.container}>
        <img
          className={style.imgs}
          src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVDJTg0JUEwJUVDJTgzJTlEJUVCJThCJTk4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </span>
      <span className={style.span}>
        <h2 className={style.h2}>힘들면 찾아와줘</h2>
        <p>어느곳 이던 좋아 우릴 찾아와줘</p>
        <p>항상 선생님들은 기다리고 있을거야 </p>
        <button className={style.btn} onClick={() => navigate("/maps")}>
          쉼터 찾아오기{" "}
        </button>
      </span>
    </>
  );
}
