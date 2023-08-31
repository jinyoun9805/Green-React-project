import React from "react";
import Navbar from "../../components/header/Navbar";
import LoginBtn from "../../components/header/LoginBtn";
import LoginOut from "../../components/header/LogoutBtn";
import style from "../../css/header/header.module.css";
import "../../css/header/header.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/"); // 홈으로 이동하는 함수
  };

  const loginState = useSelector((state) => state.loginCheckd);
  return (
    <div className={style.headerContener}>
      <h2 className={style.h2} onClick={handleGoHome}>
        도와줄게
      </h2>
      <div className={style.navbarmenu}>
        <Navbar className="navbarmenu" />
      </div>
      <div className={style.navbarmenu}>
        {loginState ? <LoginOut /> : <LoginBtn />}
      </div>
      <p className={style.hearder_btn}>
        <span onClick={handleClick} className=" material-symbols-outlined">
          menu
        </span>
      </p>
      <div
        className={`${style.myComponent} ${
          isActive ? style.active : style.hide
        }`}
      >
        <ul className={style.ul}>
          <li className={style.li}>
            <Navbar />
            {loginState ? <LoginOut /> : <LoginBtn />}
          </li>
        </ul>
      </div>
    </div>
  );
}
