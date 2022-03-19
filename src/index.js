import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

import App from "./App";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fa", "ps"],
    fallbackLng: "en",
    detection: {
      // order and from where user language should be detected
      order: [
        "localStorage",
        "sessionStorage",
        "querystring",
        "navigator",
        "path",
        "subdomain",
        "cookie",
        "htmlTag",
      ],

      // keys or params to lookup language from
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ["localStorage", "sessionStorage"],
    },

    backend: { loadPath: "/assets/locales/{{lng}}/translation.json" },
    interpolation: {
      escapeValue: false,
    },
  });

const LoadingMarkup = () => (
  <div className="centered">
    <h2 className="loadingText">Loading...</h2>
    <img src="/assets/images/Rhombus.gif" alt="loading animation"></img>
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
