import { useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import tw, { css, styled } from 'twin.macro';
import SearchBar from '@/components/BlogSearchBar/SearchBar';
import Hamburger from './Hamburger';
import { Link, LogoA } from './Link';
import Logo from './Logo';
import SearchResultBase from '@/components/BlogSearchBar/SearchResult';
import { PostsContext } from '@/contexts/Posts';
import { SearchContext } from '@/contexts/Search';
import { fuseFactory } from '@/lib/fuse';

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

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ['title'],
};

const buildSearchResult = (ResultStyles, searchComponent) => props => {
  return searchComponent({ css: ResultStyles, ...props });
};

const ResultStyles = css`
  ${tw`absolute top-0 list-none`}
`;
const SearchResult = buildSearchResult(ResultStyles, SearchResultBase);

const DesktopNavbar = ({ renderLangSelect, toggleMenu, menuOpen }) => {
  const { pathname } = useRouter();
  const isBlogPage = /^\/(blog|post)/g.test(pathname);
  const { posts } = useContext(PostsContext);
  const fuse = fuseFactory.createSingleton(posts, fuseOptions);
  useEffect(() => {
    if (posts.length && posts.length !== SearchContext?._docs?.length) {
      // console.log('>>DEBUG/ searchContext: ', SearchContext);
      fuse.setCollection(posts);
    }
  }, [posts]);
  // console.log('>>DEBUG/ posts: ', posts);

  return (
    <DektopNavbarContainer>
      <Link
        href="/">
        <LogoA>
          <Logo />
        </LogoA>
      </Link>
      <SearchContext.Provider
        value={fuse}>
        {isBlogPage && (
          <SearchBar
            renderSearchResult={SearchResult}
            placeholder="Quick search..."
          />
        )}
      </SearchContext.Provider>
      {renderLangSelect()}
      <Hamburger
        toggled={menuOpen}
        toggle={toggleMenu} />
    </DektopNavbarContainer>
  );
};

export default DesktopNavbar;
