import React from "react";
import LoginForm from "../../components/login/LoginForm";
import style from "../../css/login/login.module.css";
export default function login() {
  return (
    <div className={style.div}>
      <LoginForm />
    </div>
  );
}
