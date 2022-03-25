import tw, { styled } from 'twin.macro';
import Hamburger from './Hamburger';
import { Link, LogoA } from './Link';
import Logo from './Logo';

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
`;

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
  );
};

export default DesktopNavbar;
