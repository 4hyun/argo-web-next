import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import SearchBar from '@/components/BlogSearchBar/SearchBar';
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
    > :nth-child(2) {
      ${tw`ml-8`}
    }
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
  ${tw`flex w-full mx-auto justify-between bg-transparent`}
`;

const DesktopNavbar = ({ renderLangSelect, toggleMenu, menuOpen }) => {
  const { pathname } = useRouter();
  const isBlogPage = /^\/(blog|post)/g.test(pathname);

  return (
    <DektopNavbarContainer>
      <Link
        href="/">
        <LogoA>
          <Logo />
        </LogoA>
      </Link>
      {isBlogPage && <SearchBar
        placeholder="Quick search..." />}
      {renderLangSelect()}
      <Hamburger
        toggled={menuOpen}
        toggle={toggleMenu} />
    </DektopNavbarContainer>
  );
};

export default DesktopNavbar;
