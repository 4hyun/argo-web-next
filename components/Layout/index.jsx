// import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import { useState, createContext, useRef, useEffect } from 'react';
import Header from './Header';
import { PortalRoot as TykHandbookPortalRoot } from '@/components/TykHandbookMenu';
// import Footer from "./Footer"
// import trads from "translations/index"
import { PostsProvider } from '@/contexts/Posts';
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

  useEffect(() => {
    // console.log('>>DEBUG/Layout rendered...');
    const index = supportedLocaleEntries.findIndex(
      ([localeId, ,]) => localeId === DEFAULT_LOCALE,
    );
    sortLocaleDisplayOrder(index);
  }, []);
  return (
    <div>
      <PostsProvider>
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
          <TykHandbookPortalRoot />
          {/* <Footer></Footer> */}
        </TranslationsContext.Provider>
      </PostsProvider>
    </div>
  );
};

export default Layout;
