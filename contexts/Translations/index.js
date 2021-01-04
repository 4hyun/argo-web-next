import { createContext, useContext } from "react";

const supportedLang = {
  en: "en",
  ko: "ko",
};

const TranslationsContext = createContext({});

const useTranslationsContext = () => useContext(TranslationsContext);

export { TranslationsContext, useTranslationsContext, supportedLang };
