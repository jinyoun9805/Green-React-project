import { Link } from "react-router-dom";
import stlye from "../../css/header/navbar.module.css";
export default function Navbar() {
  const admin = sessionStorage.getItem("id");
  console.log(admin);
  return (
    <nav>
      <ul className={stlye.flex}>
        <li>
          <Link to="/apply">신청하기</Link>
        </li>
        <li>
          <Link to="/maps">쉼터 찾아오기</Link>
        </li>
        <li>
          <Link to="/ReviewNotice">상담 후기</Link>
        </li>
        {admin === "admin" ? (
          <Link to="/applyCheck">신청자 확인</Link>
        ) : (
          <span />
        )}
      </ul>
    </nav>
  );
}
