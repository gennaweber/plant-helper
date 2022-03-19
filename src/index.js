import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";

const LoadingMarkup = () => (
  <div className="centered">
    <h2 className="loadingText">Loading...</h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={<LoadingMarkup />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
