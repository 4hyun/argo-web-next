import React from 'react';
import tw, { styled } from 'twin.macro';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import LanguageSelect from './LanguageSelect';

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
`;

const Navbar = ({ menuOpen, toggleMenu }) => {
  return (
    <Container>
      <DesktopNavbar
        renderLangSelect={LanguageSelect}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />
      <MobileNavbar
        renderLangSelect={LanguageSelect}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />
    </Container>
  );
};

export default Navbar;
