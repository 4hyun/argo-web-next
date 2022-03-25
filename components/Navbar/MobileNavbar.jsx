import tw, { styled } from 'twin.macro';
import Hamburger from '@/components/Navbar/Hamburger';

const MobileNavbarContainer = styled.nav`
  ${tw`backdrop-filter backdrop-blur-md`}
  display: none;
  width: 100%;
`;

const MobileNavbar = ({ renderLangSelect, toggleMenu, menuOpen }) => {
  return (
    <MobileNavbarContainer>
      {renderLangSelect()}
      <Hamburger
        toggled={menuOpen}
        toggle={toggleMenu} />
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;
