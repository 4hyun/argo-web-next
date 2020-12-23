import React from "react";
import styled from "styled-components";
import Hamburger from "components/Navbar/Hamburger";
import DarkLogo from "../../public/logos/lettermark/dark.svg";

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

const DesktopNavbar = () => {
  return (
    <DektopNavbarContainer>
      <Logo />
      <Hamburger />
    </DektopNavbarContainer>
  );
};

const MobileNavbar = () => {
  return (
    <MobileNavbarContainer>
      <Hamburger />
    </MobileNavbarContainer>
  );
};

const Navbar = () => {
  return (
    <Container>
      <DesktopNavbar />
      <MobileNavbar />
    </Container>
  );
};

export default Navbar;
