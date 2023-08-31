import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import SingUp from "./pages/singUp/SingUp";
import Maps from "./pages/map/Map";
import Apply from "./pages/apply/Apply";
import ApplyCheck from "./pages/applyCheck/ApplyCheck";
import ReviewNotice from "./pages/reviewNotice/ReviewNotice";
import ReviewCorrection from "./components/ReviewPage/ReviewCorrection";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/applyCheck" element={<ApplyCheck />} />
          <Route path="/ReviewNotice" element={<ReviewNotice />} />
          <Route path="/reviewCorrection" element={<ReviewCorrection />} />

          <Route path="/ReviewPage" element={<ReviewPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
export default App;
