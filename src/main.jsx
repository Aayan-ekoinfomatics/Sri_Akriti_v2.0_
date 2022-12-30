import React from "react";
import ReactDOM from "react-dom/client";
import {  BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <React.StrictMode>
      <Router>
      <App />
      </Router>
    </React.StrictMode>
  </RecoilRoot>
);
