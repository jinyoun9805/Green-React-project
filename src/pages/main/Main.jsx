import React from "react";
import style from "../../css/main/main.module.css";
import MainComponet from "../../components/main/MainComponet.jsx";
import MainComponet2 from "../../components/main/MainComponet2.jsx";
import MainComponet3 from "../../components/main/MainComponet3.jsx";
export default function Main() {
  return (
    <>
      <ul className={style.ul}>
        <li>
          <MainComponet />
        </li>
        <li>
          <MainComponet2 />
        </li>
        <li>
          <MainComponet3 />
        </li>
      </ul>
    </>
  );
}
