import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import trads from "translations/index"
import { TranslationsContext, supportedLangs as supportedLangsMap } from "contexts/Translations"

const Layout = ({ children }) => {
  const [lang, setLang] = useState(supportedLangsMap.ko)
  const [supportedLangsEntries, setSupportedLangsEntries] = useState(Object.entries(supportedLangsMap))
  const switchLang = (langObj, index) => {
    const selectedLocale = supportedLangsEntries[index]
    supportedLangsEntries.splice(index, 1)
    const sortedEntries = [selectedLocale, ...supportedLangsEntries]
    setSupportedLangsEntries(sortedEntries)
    setLang(langObj)
  }
  return (
    <>
      <TranslationsContext.Provider
        value={{ supportedLangsEntries, supportedLangsMap, lang: lang, switchLang: switchLang }}>
        <Header></Header>
        {children}
        {/* <Footer></Footer> */}
      </TranslationsContext.Provider>
    </>
  )
}

export default Layout
