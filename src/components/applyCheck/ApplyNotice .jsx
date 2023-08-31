import React, { useEffect, useState } from "react";
import { db } from "../../firebase/index";
import { collection, getDocs } from "firebase/firestore";
import Ask from "../../components/applyCheck/Ask";
import style from "../../css/applyCheck/applyCheck.module.css";
export default function ApplyNotice() {
  const [notice, setNotice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지 당 항목 수

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "application"));

      const docs = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data(); // 문서의 필드 값들을 가져옵니다
        docs.push({
          email: doc.id, // 문서의 ID를 추가합니다
          name: data.name,
          title: data.title,
          category: data.category,
          phone: data.phone,
          textFild: data.textFild,
        });
      });
      setNotice(docs);
    }
    fetchData();
  }, []);

  // 현재 페이지의 항목을 가져오는 함수
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return notice.slice(startIndex, endIndex);
  };
  return (
    <div className={style.container}>
      <h2 className={style.h2}>신청자 게시판</h2>
      <ul className={style.applicantList}>
        {getCurrentPageItems().map((item, index) => (
          <li className={style.applicantListLi} key={item.id}>
            <p className={style.p}>
              신청자 이름입니다 : <span>{item.name}</span>
            </p>
            <p className={style.p}>
              신청자가 선택한 도움방법 입니다 : <span>{item.category}</span>
            </p>
            <p className={style.p}>
              휴대전화 번호입니다 : <span>{item.phone}</span>
            </p>
            <p className={style.p}>
              신청내용 제목 : <span>{item.title}</span>
            </p>
            <p className={style.p}>
              신청 내용입니다 : <span>{item.textFild}</span>
            </p>
            <Ask name={item.name} email={item.email}></Ask>
          </li>
        ))}
      </ul>

      <div className={style.pagination}>
        <button
          className={style.paginationButton}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          이전 페이지
        </button>
        <button
          className={style.paginationButton}
          disabled={notice.length <= currentPage * itemsPerPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          다음 페이지
        </button>
      </div>
    </div>
  );
}
