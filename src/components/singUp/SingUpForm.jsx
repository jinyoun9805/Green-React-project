import React, { useState, useRef } from "react";
import style from "../../css/singUp/singUpForm.module.css";
import { useNavigate } from "react-router-dom";
import {
  firebaseAuth,
  createUserWithEmailAndPassword,
} from "../../firebase/index";
export default function SingUpForm() {
  const navigate = useNavigate();
  const [reginsterName, setRegisterName] = useState("");
  const [reegisterEmail, setRegisterEmail] = useState("");
  const [reginsterPassword, setRegisterPassword] = useState("");
  const [reginsterPhone, setRegisterPhone] = useState("");
  const [erroMsg, setErrorMsg] = useState("");
  const [nameCheck, setNameCheck] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const [emailPattern, setEmailPatternCheck] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [passwordPattern, setPasswordPatternCheck] = useState(true);
  const [phoneCheck, setPhoneCheck] = useState(true);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const userName = (event) => {
    setRegisterName(event.target.value);
  };

  const userEmail = (event) => {
    setRegisterEmail(event.target.value);
  };

  const userPassword = (event) => {
    setRegisterPassword(event.target.value);
  };

  const userPhone = (event) => {
    setRegisterPhone(event.target.value);
  };

  const regiser = async () => {
    try {
      setErrorMsg("");
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        reegisterEmail,
        reginsterPassword
      );
      console.log(createdUser);
      setRegisterEmail("");
      setRegisterPassword("");
      navigate("/logIn"); // 회원가입 완료 후 이동
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("이미 가입된 회원입니다.");
      }
      console.log(erroMsg + " 에러 메세지");
      setErrorMsg("");
    }
  };
  const formCheck = () => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const passwordRegEx =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (!reginsterName) {
      console.log(reginsterName);
      alert("이름을 입력해주세요");
      setNameCheck(false);
      return false;
    } else if (!reegisterEmail) {
      alert("이메일을 입력해주세요");
      setEmailCheck(false);
      inputEmail.current.focus();
      return false;
    } else if (!emailRegEx.test(reegisterEmail)) {
      setEmailPatternCheck(false);
      alert("이메일의 형식이 정상적이지 않습니다. 확인해주세요");
      inputEmail.current.focus();
      return false;
    } else if (!reginsterPassword) {
      alert("비밀번호를 작성해주세요");
      setPasswordCheck(false);
      inputPassword.current.focus();
      return false;
    } else if (!passwordRegEx.test(reginsterPassword)) {
      alert("비밀번호 형식이 정상적이지 않습니다. 확인해주세요");
      setPasswordPatternCheck(false);
      return false;
    } else if (!reginsterPhone) {
      alert("휴대폰 번호를 입력해주세요");
      setPhoneCheck(false);
      return false;
    }
    return true;
  };
  return (
    <article className={style.article}>
      <h2 className={style.h2}>회원가입을 위해 정보를 입력해주세요</h2>
      <form
        className={style.form}
        onSubmit={function (e) {
          e.preventDefault();
        }}
      >
        {nameCheck ? (
          <label htmlFor="name"> 이름을 작성해주세요 </label>
        ) : (
          <label htmlFor="name" className={style.lebalWarning}>
            이름을 작성해주세요
          </label>
        )}
        <input
          type="text"
          name="name"
          placeholder="이름을 입력해주세요"
          value={reginsterName} // 변경
          onChange={userName} // 변경
          className={style.input}
        />

        {emailCheck ? (
          <label htmlFor="email">로그인 시 사용할 이메일을 작성해주세요</label>
        ) : emailPattern ? (
          <label htmlFor="email" className={style.lebalWarning}>
            이메일을 작성해주세요
          </label>
        ) : (
          <label htmlFor="email" className={style.lebalWarning}>
            정상적인 이메일 형태가 아닙니다.
          </label>
        )}
        <input
          className={style.input}
          ref={inputEmail}
          type="email"
          name="email"
          value={reegisterEmail}
          onChange={userEmail}
          placeholder="email@example.com"
        />
        {passwordCheck ? (
          <label htmlFor="password">
            로그인 시 사용할 비밀번호를 입력해주세요
          </label>
        ) : passwordPattern ? (
          <label htmlFor="password " className={style.lebalWarning}>
            비밀번호를 해주세요
          </label>
        ) : (
          <label htmlFor="password" className={style.lebalWarning}>
            정상적인 비밀번호 형태가 아닙니다.
          </label>
        )}

        <input
          className={style.input}
          ref={inputPassword}
          type="password"
          name="password"
          value={reginsterPassword}
          onChange={userPassword}
          placeholder="비밀번호를 입력해주세요"
        />

        {phoneCheck ? (
          <label htmlFor="phoneNumber">휴대폰 번호를 -없이 입력해주세요</label>
        ) : (
          <label htmlFor="phoneNumber" className={style.lebalWarning}>
            휴대폰 번호를 확인해주세요
          </label>
        )}

        <input
          type="text"
          name="phoneNumber"
          placeholder="01012345678"
          value={reginsterPhone}
          onChange={userPhone}
          className={style.input}
        />
        <button
          className={style.btn}
          onClick={() => {
            try {
              if (formCheck() === true) {
                regiser(); // formCheck() 에서 문제 없을 때만 호출
              } else {
                console.log("regiser 작동 중지");
              }
            } catch (err) {
              console.log("에러 발생: " + err);
            }
          }}
        >
          회원가입
        </button>
      </form>
    </article>
  );
}
