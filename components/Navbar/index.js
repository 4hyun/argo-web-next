import React from "react"
import tw, { styled } from "twin.macro"
import LangButton from "./LanguageButton"
import { Link, LogoA } from "./Link"
import Hamburger from "components/Navbar/Hamburger"
import Logo from "./Logo"

import { useTranslationsContext, supportedLang } from "contexts/Translations"

const Container = styled.div`
  ${tw`fixed flex items-center h-16 max-h-16 lg:(absolute items-end) w-full`};
  background-color: var(--nav-bg);
  padding: 0 1rem;
  @media (min-width: 1200px) {
    height: 105px;
    max-height: 105px;
    padding: unset;
  }
  z-index: 20;
`

const MobileNavbarContainer = styled.nav`
  display: none;
  width: 100%;
`

const DektopNavbarContainer = styled.nav`
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
  ${tw`flex w-full mx-auto justify-between bg-transparent`}
`

const DesktopNavbar = ({ renderLangSwitch }) => {
  return (
    <DektopNavbarContainer>
      <Link href="/">
        <LogoA>
          <Logo />
        </LogoA>
      </Link>
      {renderLangSwitch()}
      <Hamburger />
    </DektopNavbarContainer>
  )
}

const MobileNavbar = ({ renderLangSwitch }) => {
  return (
    <MobileNavbarContainer>
      {renderLangSwitch()}
      <Hamburger />
    </MobileNavbarContainer>
  )
}

const LangButtonLabel = ({ currentLang, thisLang: { locale, label } }) => {
  const activeClassname = currentLang.locale === locale ? "active" : ""
  return <span className={`lang-button ${activeClassname} flex justify-center items-start`}>{label}</span>
}

const LangSwitch = () => {
  const { switchLang, lang } = useTranslationsContext()

  return (
    <div className="lang-switch ml-auto mr-auto md:mr-4 flex items-center select-none text-xs lg:text-base">
      {Object.keys(supportedLang).map((supportedLangKey) => {
        return (
          <LangButton
            key={supportedLangKey}
            onClick={() => {
              switchLang(supportedLang[supportedLangKey].locale)
            }}
          >
            <LangButtonLabel currentLang={lang} thisLang={supportedLang[supportedLangKey]} />
          </LangButton>
        )
      })}
    </div>
  )
}

const Navbar = () => {
  const { lang } = useTranslationsContext()

  return (
    <Container>
      <DesktopNavbar renderLangSwitch={LangSwitch} />
      <MobileNavbar renderLangSwitch={LangSwitch} />
    </Container>
  )
}

export default Navbar
