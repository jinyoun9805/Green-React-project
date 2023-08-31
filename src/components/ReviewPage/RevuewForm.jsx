import React, { useState } from "react";
import StarRating from "./StarTating"; // 별점 컴포넌트 가져오기
import style from "../../css/ReviewPage/ReviewCorrection.module.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/index";
import { useNavigate } from "react-router-dom";
export default function RevuewForm() {
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [teacher1, setTeacher1] = useState(0);
  const [teacher2, setTeacher2] = useState(0);
  const [title, setTitle] = useState(0);
  const id = sessionStorage.getItem("id");
  const handleRatingChange = (newRating) => {
    setSelectedRating(newRating);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 리뷰와 선택된 별점을 서버로 전송하거나 다른 처리 수행'
    try {
      const docRef = await addDoc(collection(db, "review"), {
        ids: id,
        star: selectedRating,
        review: reviewText,
        teacher1: teacher1,
        teacher2: teacher2,
        title: title,
      });
      navigate("/ReviewNotice");
      alert("후기 작성이  완료되었습니다.");
      console.log(docRef);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={style.container}>
      <h2 className={style.h2}>상담 후기 작성하기</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <StarRating onChange={handleRatingChange} />
        <input
          className={style.input}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해 주세요"
        />
        <input
          className={style.input}
          type="text"
          onChange={(e) => setTeacher1(e.target.value)}
          placeholder="리뷰 작성하실 선생님 이름을 작성해 주세요"
        />
        <input
          className={style.input}
          type="text"
          onChange={(e) => setTeacher2(e.target.value)}
          placeholder="리뷰 작성하실 선생님 이름을 작성해 주세요"
        />
        <textarea
          value={reviewText}
          className={style.textarea}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="선생님들과 함께한 따듯한 내용을 입력해주세요."
        ></textarea>
        <button className={style.btn} type="submit">
          후기 작성 완료
        </button>
      </form>
    </div>
  );
}
