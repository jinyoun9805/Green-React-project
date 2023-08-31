import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Provider 임포트
import store from "./redux/store"; // Redux 스토어 임포트
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    {" "}
    {/* Redux 스토어를 Provider로 감싸기 */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
