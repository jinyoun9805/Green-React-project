import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginEvent } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase";
import style from "../../css/login/loginForm.module.css";

export default function LoginForm() {
  useEffect(() => {}, []);
  const [userEmailInpo, setUserEmailInpo] = useState("");
  const [userEmailCheck, setUserEmailCheck] = useState(true);
  const [userPasswordInpo, setUserPasswordInpo] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState(true);
  const loginAdmin = "admin";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUserEmailInpo(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPasswordInpo(e.target.value);
  };
  const goSingUp = () => {
    navigate("/singUp");
  };

  const login = async () => {
    if (userEmailInpo === loginAdmin) {
      setUserEmailCheck(true);
      setUserPasswordCheck(true);
      dispatch(loginEvent());
      sessionStorage.setItem("id", userEmailInpo);
      navigate("/");
    } else {
      try {
        const userInpo = await signInWithEmailAndPassword(
          firebaseAuth,
          userEmailInpo,
          userPasswordInpo
        );

        setUserEmailCheck(true);
        setUserPasswordCheck(true);
        dispatch(loginEvent());
        sessionStorage.setItem("id", userInpo.user.email);
        console.log("로그인 성공");
        navigate("/");
        return true;
      } catch (err) {
        console.log(err + "에러코드");
        setUserEmailCheck(false);
        alert("로그인 실패했습니다")
        setUserPasswordCheck(false);
        console.log(userPasswordCheck);
        return false;
      }
    }
  };

  return (
    <article className={style.article}>
      <h2 className={style.h2}>로그인</h2>
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {userEmailCheck ? (
          <label className={style.label} htmlFor="loginEmail">
            이메일을 입력해주세요
          </label>
        ) : (
          <label className={style.label} htmlFor="loginEmail">
            이메일을 확인해주세요
          </label>
        )}

        <input
          className={style.input}
          type="text"
          name="loginEmail"
          placeholder="이메일을 작성해주세요"
          onChange={handleEmailChange}
        />
        {userPasswordCheck ? (
          <label className={style.label} htmlFor="loginPassword">
            비밀번호를 입력해 주세요
          </label>
        ) : (
          <label className={style.label} htmlFor="loginPassword">
            비밀번호를 확인 주세요
          </label>
        )}
        <input
          className={style.input}
          type="password"
          name="loginPassword"
          placeholder="비밀번호를 작성해주세요"
          onChange={handlePasswordChange}
        />
        <span>
          <button className={style.btn} onClick={login}>
            로그인
          </button>

          <button className={style.btn} onClick={goSingUp}>
            회원가입
          </button>
        </span>
      </form>
    </article>
  );
}
