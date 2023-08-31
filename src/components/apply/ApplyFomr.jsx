import React, { useState } from "react";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "../../firebase/index";
import { useNavigate } from "react-router-dom";
import style from "../../css/apply/apply.module.css";
// 오후에 해야 할것 세션 스토리지에 저장된 이메일을 가져와서 customKey에 담고
// 인풋 값들 data 변수에 저장해서 데이터베이스에 올린다.
export default function ApplyFomr() {
  // 로그인한 로컬스토리지 안에 아이디 값을 Key값으로 지정하기위해 로컬스토리지 값을 가져온다.
  const id = sessionStorage.getItem("id");
  const navigate = useNavigate();
  const customKey = id; // 사용자가 정한 특정 키 값
  //  신청자  데이터 저장
  const [name, setName] = useState("");
  const applyName = (e) => {
    setName(e.target.value);
  };
  const [phone, setPhone] = useState("");
  const applyPhone = (e) => {
    setPhone(e.target.value);
  };
  const [category, setCategory] = useState("");
  const applyCategory = (e) => {
    setCategory(e.target.value);
  };
  const [title, setTitle] = useState("");
  const applyTitle = (e) => {
    setTitle(e.target.value);
  };
  const [textArea, setTextArea] = useState("");
  const applyTextArae = (e) => {
    setTextArea(e.target.value);
  };
  const data = {
    name: name,
    phone: phone,
    category: category,
    title: title,
    textFild: textArea,
  };
  const Submit = async function () {
    const docRef = doc(db, "application", customKey);
    setDoc(docRef, data)
      .then(() => {
        navigate("/");
        alert(
          "신청이 완료 되었습니다. 곧 로그인된 이메일로 1차 연락이 도착할겁니다. 확인해주세요."
        );
        console.log("문서가 생성되었습니다.");
      })
      .catch((error) => {
        console.error("문서 생성 중 오류 발생:", error);
      });
  };
  const goBack = () => {
    navigate("/");
    alert("작성을 중지하고 돌아가시 겠습니까?");
  };
  return (
    <div>
      <form className={style.form} onSubmit={(e) => e.preventDefault()}>
        <label className={style.label} htmlFor="name">
          이름
        </label>
        <input
          className={style.input}
          type="text"
          id="name"
          name="name"
          onChange={applyName}
        />

        <label className={style.label} htmlFor="phone">
          핸드폰 번호
        </label>
        <input
          className={style.input}
          type="phone"
          id="phone"
          name="phone"
          onChange={applyPhone}
          placeholder="-없이 작성해주세요"
        />

        <label className={style.label} htmlFor="category">
          도움이 필요한 방법이 있으실까요?
        </label>
        <select
          className={style.select}
          id="category"
          name="category"
          onChange={applyCategory}
        >
          <option value={false}>선택해주세요!</option>
          <option value="기타">
            선생님들과 상담후 필요한 도움을 받고싶어요.
          </option>
          <option value="와주세요!">
            선생님들의 도움이 필요합니다.(저의 위치로 찾아와 주세요!)
          </option>
          <option value="센터의 도움">
            센터의 도움을 받고 싶습니다.(가까운 센터로 찾아가겠습니다!)
          </option>
          <option value="입소">센터의 입소하고 싶습니다.</option>
          <option value="교육신청">센터의 교육과정을 듣고 싶습니다.</option>
        </select>

        <label className={style.label} htmlFor="title">
          제목
        </label>
        <input
          className={style.input}
          type="text"
          id="title"
          name="title"
          onChange={applyTitle}
        />

        <label className={style.label} htmlFor="textFild">
          내용
        </label>
        <textarea
          className={style.textarea}
          id="textFild"
          name="textFild"
          cols="30"
          rows="10"
          onChange={applyTextArae}
        ></textarea>
        <button
          className={style.button}
          onClick={() => {
            Submit();
          }}
        >
          신청하기
        </button>
        <button
          className={style.button}
          onClick={() => {
            goBack();
          }}
        >
          돌아가기
        </button>
      </form>
    </div>
  );
}
