import React, { createContext, useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import arJSON from "../../locale/ar.json";
import enJSON from "../../locale/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJSON,
    },
    ar: {
      translation: arJSON,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export const langContext = createContext();

const LocaleContext = ({ children }) => {
  const { t } = useTranslation();

  const changeLang = () => {
    const currentLang = localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "en";
    if (currentLang === "en") {
      i18n.changeLanguage("ar");
      localStorage.setItem("lang", "ar");
    } else if (currentLang === "ar") {
      i18n.changeLanguage("en");
      localStorage.setItem("lang", "en");
    }
  };

  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);

  return (
    <langContext.Provider value={[t, changeLang]}>
      {children}
    </langContext.Provider>
  );
};

export default LocaleContext;
