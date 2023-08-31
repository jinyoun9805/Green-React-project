import React from "react";
import { Link } from "react-router-dom";
import style from "../../css/header/loginbtn.module.css";
export default function LoginBtn() {
  return (
    <ul className={style.flex}>
      <li>
        <Link to="/login">
          로그인
          <span className="login material-symbols-outlined">person</span>
        </Link>
      </li>
      <li>
        <Link to="/singUp">
          회원가입
          <span className="login material-symbols-outlined">person_add</span>
        </Link>
      </li>
    </ul>
  );
}
