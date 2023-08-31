import React, { useState, useEffect } from "react";
import style from "../../css/reviewNotice/reviewNotice.module.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase/index";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [updataState, setupdataState] = useState();
  const navigate = useNavigate();
  const Userid = sessionStorage.getItem("id");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const querySnapshot = await getDocs(collection(db, "review"));

        const reviewsData = [];
        querySnapshot.forEach((doc) => {
          reviewsData.push({ id: doc.id, ...doc.data() });
        });

        setReviews(reviewsData);
      } catch (error) {
        console.error("리뷰 데이터 가져오기 오류:", error);
      }
    }
    fetchReviews();
  }, [updataState]);

  const updateReview = (review) => {
    navigate("/ReviewCorrection", {
      state: {
        id: review.id,
      },
    });
  };

  const deleteReview = async (reviews) => {
    await deleteDoc(doc(db, "review", reviews.id));
    setupdataState({});
  };

  return (
    <div className={style.container}>
      <h2>상담 후기</h2>
      <Link to="/ReviewPage" className={style.reviewPage}>
        상담 후기 작성 페이지 가기
      </Link>

      <ul>
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <li className={style.reviewList} key={review.id}>
              {review.star && (
                <p className={style.star}>
                  별점:
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        cursor: "default",
                        color: star <= review.star ? "gold" : "gray",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </p>
              )}
              <p>
                {review.teacher1 && (
                  <span className={style.teacher1}>
                    담당 선생님: {review.teacher1}
                  </span>
                )}
                {review.teacher2 && <span>담당 선생님: {review.teacher2}</span>}
              </p>
              {review.title && (
                <span className={style.title}>제목: {review.title}</span>
              )}
              {review.review && (
                <p className={style.reviewText}>리뷰: {review.review}</p>
              )}
              <div className={style.btnContener}>
                {Userid === review.ids && (
                  <button
                    onClick={() => updateReview(review)}
                    className={style.editButton}
                  >
                    수정하기
                  </button>
                )}
                {Userid === review.ids && (
                  <button
                    onClick={() => deleteReview(review)}
                    className={style.deleteButton}
                  >
                    리뷰 삭제
                  </button>
                )}
              </div>
            </li>
          ))
        ) : (
          <p className={style.noReview}>리뷰가 없습니다.</p>
        )}
      </ul>
    </div>
  );
}
