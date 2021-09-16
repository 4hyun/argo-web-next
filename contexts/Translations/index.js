import { createContext, useContext } from "react"

/* TODO: backup - testing new supportedLang structure */
// const supportedLang = {
//   en: "en",
//   ko: "ko",
// };

const DEFAULT_LOCALE = "ko"

const supportedLocaleMap = {
  en: { locale: "en", label: "EN" },
  ko: { locale: "ko", label: "KR" },
}

const TranslationsContext = createContext({})

const useTranslationsContext = () => useContext(TranslationsContext)

export { TranslationsContext, useTranslationsContext, supportedLocaleMap, DEFAULT_LOCALE }
