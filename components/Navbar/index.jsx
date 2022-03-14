import React from "react"
import tw, { styled } from "twin.macro"
import LanguageSelect from "./LanguageSelect"
import { Link, LogoA } from "./Link"
import Hamburger from "@/components/Navbar/Hamburger"
import Logo from "./Logo"

const Container = styled.div`
  ${tw`fixed flex items-center h-16 max-h-16 lg:(absolute items-end) w-full`};
  background: var(--nav-bg);
  padding: 0 1rem;
  @media (min-width: 1200px) {
    height: 105px;
    max-height: 105px;
    padding: unset;
  }
  z-index: 20;
`

const MobileNavbarContainer = styled.nav`
  ${tw`backdrop-filter backdrop-blur-md`}
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

const DesktopNavbar = ({ renderLangSelect, toggleMenu, menuOpen }) => {
  return (
    <DektopNavbarContainer>
      <Link
        href="/">
        <LogoA>
          <Logo />
        </LogoA>
      </Link>
      {renderLangSelect()}
      <Hamburger
        toggled={menuOpen}
        toggle={toggleMenu} />
    </DektopNavbarContainer>
  )
}

const MobileNavbar = ({ renderLangSelect, toggleMenu, menuOpen }) => {
  return (
    <MobileNavbarContainer>
      {renderLangSelect()}
      <Hamburger
        toggled={menuOpen}
        toggle={toggleMenu} />
    </MobileNavbarContainer>
  )
}

const Navbar = ({ menuOpen, toggleMenu }) => {
  return (
    <Container>
      <DesktopNavbar
        renderLangSelect={LanguageSelect}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen} />
      <MobileNavbar
        renderLangSelect={LanguageSelect}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen} />
    </Container>
  )
}

export default Navbar
