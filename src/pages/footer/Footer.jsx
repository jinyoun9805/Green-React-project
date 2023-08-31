import React from "react";
import style from "../../css/footer/footer.module.css";
import imstagram from "../../img/free-icon-instagram-logo-87390.png";
import facebook from "../../img/free-icon-facebook-2175193.png";
import twitter from "../../img/free-icon-twitter-733635.png";
export default function Footer() {
  return (
    <footer>
      <div className={style.footerContener}>
        <ul className={style.flex}>
          <li className={style.copyright}>Copyright &copy; </li>
          <li className={style.li}>
            <img src={imstagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
