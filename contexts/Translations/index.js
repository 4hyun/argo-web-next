import { createContext, useContext } from "react";

/* TODO: backup - testing new supportedLang structure */
// const supportedLang = {
//   en: "en",
//   ko: "ko",
// };

const supportedLang = {
  en: { locale: "en", label: "ENG" },
  ko: { locale: "ko", label: "KOR" },
};

const TranslationsContext = createContext({});

const useTranslationsContext = () => useContext(TranslationsContext);

export { TranslationsContext, useTranslationsContext, supportedLang };
