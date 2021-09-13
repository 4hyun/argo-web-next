import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import trads from "translations/index";
import { TranslationsContext, supportedLang } from "contexts/Translations";

const Layout = ({ children }) => {
  const [lang, setLang] = useState(supportedLang.ko);
  const switchLang = (lang) => {
    setLang(supportedLang[lang]);
  };
  return (
    <>
      <TranslationsContext.Provider
        value={{ lang: lang, switchLang: switchLang }}
      >
        <Header></Header>
        {children}
        {/* <Footer></Footer> */}
      </TranslationsContext.Provider>
    </>
  );
};

export default Layout;
