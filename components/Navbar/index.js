import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Hamburger from "components/Navbar/Hamburger";
import DarkLogo from "../../public/logos/lettermark/logo-full_white-long-sm.svg";
import { useTranslationsContext, supportedLang } from "contexts/Translations";

const Logo = styled(DarkLogo)`
  width: auto;
  &,
  & > * {
    height: 35px;
  }
  @media (min-width: 1200px) {
    padding: 0 2rem;
  }
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  max-height: 64px;
  /* box-shadow: 0 2px 8px #222;
  box-shadow: 0 2px 16px #2222220f; */
  background-color: var(--nav-bg);
  padding: 0 1rem;
  @media (min-width: 1200px) {
    padding: unset;
  }
  z-index: 20;
`;

const MobileNavbarContainer = styled.nav`
  display: none;
  width: 100%;
`;

const DektopNavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
`;

const DesktopNavbar = ({ renderLangSwitch }) => {
  return (
    <DektopNavbarContainer>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      {renderLangSwitch()}
      <Hamburger />
    </DektopNavbarContainer>
  );
};

const MobileNavbar = ({ renderLangSwitch }) => {
  return (
    <MobileNavbarContainer>
      {renderLangSwitch()}
      <Hamburger />
    </MobileNavbarContainer>
  );
};

const LangButton = styled.span`
  padding: 0 0.5rem;
  cursor: pointer;
  min-width: 45px;
  font-weight: 400;
  transition: all 0.1s ease;
  text-align: center;
  line-height: 0.8;
  :hover,
  & > .lang-button.active {
    /* line-height: 120%; */
    text-decoration: underline;
    color: var(--argo-blue);
    font-weight: 800;
    transition: all 0.1s ease;
  }
  :first-child {
    border-right: 2px solid #333;
  }
  @media (min-width: 1200px) {
    min-width: 55px;
  }
`;

const LangButtonLabel = ({ currentLang, thisLang: { locale, label } }) => {
  const activeClassname = currentLang.locale === locale ? "active" : "";
  return (
    <span
      className={`lang-button ${activeClassname} flex justify-center items-start`}
    >
      {label}
    </span>
  );
};

const LangSwitch = () => {
  const { switchLang, lang } = useTranslationsContext();

  return (
    <div className="lang-switch ml-auto mr-auto md:mr-4 flex items-center select-none text-xs lg:text-base">
      {Object.keys(supportedLang).map((supportedLangKey) => {
        return (
          <LangButton
            key={supportedLangKey}
            onClick={() => {
              switchLang(supportedLang[supportedLangKey].locale);
            }}
          >
            <LangButtonLabel
              currentLang={lang}
              thisLang={supportedLang[supportedLangKey]}
            />
          </LangButton>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const { lang } = useTranslationsContext();

  return (
    <Container>
      <DesktopNavbar renderLangSwitch={LangSwitch} />
      <MobileNavbar renderLangSwitch={LangSwitch} />
    </Container>
  );
};

export default Navbar;
