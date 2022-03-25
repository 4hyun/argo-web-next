import React, { useState } from 'react';
import Header from './Header';
// import Footer from "./Footer"
// import trads from "translations/index"
import {
  TranslationsContext,
  supportedLocaleMap,
  DEFAULT_LOCALE,
} from 'contexts/Translations';

const Layout = ({ children }) => {
  const [currentLocaleData, setLocale] = useState(
    supportedLocaleMap[DEFAULT_LOCALE],
  );
  const [supportedLocaleEntries, setSupportedLocaleEntries] = useState(
    Object.entries(supportedLocaleMap),
  );
  const sortLocaleDisplayOrder = index => {
    const selectedLocale = supportedLocaleEntries[index];
    supportedLocaleEntries.splice(index, 1);
    const sortedEntries = [selectedLocale, ...supportedLocaleEntries];
    setSupportedLocaleEntries(sortedEntries);
  };
  const switchLocale = (localeData, index) => {
    sortLocaleDisplayOrder(index);
    setLocale(localeData);
  };

  React.useEffect(() => {
    const index = supportedLocaleEntries.findIndex(
      ([localeId, ,]) => localeId === DEFAULT_LOCALE,
    );
    sortLocaleDisplayOrder(index);
  }, []);
  return (
    <>
      <TranslationsContext.Provider
        value={{
          supportedLocaleEntries,
          supportedLocaleMap,
          currentLocaleData,
          switchLocale,
        }}
      >
        <Header></Header>
        {children}
        {/* <Footer></Footer> */}
      </TranslationsContext.Provider>
    </>
  );
};

export default Layout;
