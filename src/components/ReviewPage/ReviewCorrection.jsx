import React, { useEffect, useState } from "react";
import StarRating from "./StarTating";
import style from "../../css/ReviewPage/ReviewCorrection.module.css";
import { useLocation } from "react-router-dom";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/index";
import { useNavigate } from "react-router-dom";
export default function ReviewCorrection(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.id;
  const [userReviews, setUserReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [teacher1, setTeacher1] = useState(0);
  const [teacher2, setTeacher2] = useState(0);
  const [title, setTitle] = useState(0);
  const id = sessionStorage.getItem("id");
  console.log(id);
  const handleRatingChange = (newRating) => {
    setSelectedRating(newRating);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "review"));
        const reviews = [];

        querySnapshot.forEach((doc) => {
          const reviewData = doc.data();
          if (doc.id === userId) {
            reviews.push({ id: doc.id, ...reviewData });
          }
        });

        setUserReviews(reviews);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    // userReviews가 업데이트될 때마다 해당 값을 사용하여 상태 업데이트
    if (userReviews.length > 0) {
      setTeacher1(userReviews[0].teacher1);
      setTeacher2(userReviews[0].teacher2);
      setReviewText(userReviews[0].review);
      setTitle(userReviews[0].title);
      setSelectedRating(userReviews[0].star);
    }
  }, [userReviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateReview = async () => {
      const ref = doc(db, "review", userId);
      const data = {
        star: selectedRating,
        review: reviewText,
        teacher1: teacher1,
        teacher2: teacher2,
        title: title,
      };
      try {
        await updateDoc(ref, data);
        navigate("/ReviewNotice");
        alert("수정이 완료되었습니다.");
        console.log("업데이트 성공");
      } catch (error) {
        console.error(error);
      }
    };
    updateReview();
  };
  console.log(selectedRating);
  return (
    <div className={style.container}>
      <h2 className={style.h2}>후기 수정하기</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className="star-rating">
          <StarRating onChange={handleRatingChange} />
        </div>
        <input
          className={style.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <input
          className={style.input}
          type="text"
          value={teacher1}
          onChange={(e) => setTeacher1(e.target.value)}
          placeholder="선생님 1"
        />
        <input
          className={style.input}
          type="text"
          value={teacher2}
          onChange={(e) => setTeacher2(e.target.value)}
          placeholder="선생님 2"
        />
        <textarea
          value={reviewText}
          className={style.textarea}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="선생님들과 함께한 따듯한 내용을 입력해주세요."
        ></textarea>
        <button className={style.btn} type="submit">
          후기 수정 완료
        </button>
      </form>
    </div>
  );
}
