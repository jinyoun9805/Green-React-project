import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "../../css/applyCheck/ask.module.css";
const Ask = (props) => {
  const form = useRef();
  const names = props.name;
  const emails = props.email;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sejz08j",
        "template_v8r35tq",
        form.current,
        "drMpWpRGhNGOkhJYu"
      )
      .then(
        (result) => {
          alert("성공적으로 이메일 발송");
          console.log(e, "/", form.current);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.formContauner}>
      <form ref={form} onSubmit={sendEmail}>
        <label className={style.formContainerLabel}>신청자 이름</label>
        <input
          className={style.formContainerInput}
          type="text"
          name="thisName"
          value={names}
        />
        <label className={style.formContainerLabel}>신청자 이메일 </label>
        <input
          className={style.formContainerInput}
          type="email"
          name="email"
          value={emails}
        />
        <label className={style.formContainerLabel}>개인 연락 시간 약속 </label>
        <input className={style.formContainerInput} type="text" name="times" />
        <label className={style.formContainerLabel}>선생님 1</label>
        <input
          className={style.formContainerInput}
          type="text"
          name="techer1"
        />
        <label className={style.formContainerLabel}>선생님 2</label>
        <input
          className={style.formContainerInput}
          type="text"
          name="techer2"
        />
        <input className={style.formSubmit} type="submit" value="이메일 전송" />
      </form>
    </div>
  );
};

export default Ask;
