// import { initializeApp } from "firebase/app";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const firebaseConfig = {
//   apiKey: "AIzaSyBJji4Y3Uiwf7gqvessKHBtCTSLv2Nvhio",
//   authDomain: "eternadb-0.firebaseapp.com",
//   projectId: "eternadb-0",
//   storageBucket: "eternadb-0.appspot.com",
//   messagingSenderId: "245121678872",
//   appId: "1:245121678872:web:d2a4fde2825f624b90cd6d"
// };

// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
