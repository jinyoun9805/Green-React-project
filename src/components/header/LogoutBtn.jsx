import React from "react";
import style from "../../css/header/loginbtn.module.css";
import { useDispatch } from "react-redux";
import { logOutEvent } from "../../redux/actions";
export default function LogoutBtn() {
  const dispatch = useDispatch();
  const logOutBtn = () => {
    dispatch(logOutEvent());
    sessionStorage.clear();
  };
  return (
    <ul className={style.point}>
      <li onClick={logOutBtn} className={style.point}>
        로그아웃
        <span className="login material-symbols-outlined">logout</span>
      </li>
    </ul>
  );
}
