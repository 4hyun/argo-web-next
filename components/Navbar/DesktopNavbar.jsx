import { useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import tw, { css, styled } from 'twin.macro';
import SearchBar from '@/components/BlogSearchBar/SearchBar';
import Hamburger from './Hamburger';
import { Link, LogoA } from './Link';
import Logo from './Logo';
import SearchResultBase from '@/components/BlogSearchBar/SearchResult';
import { buildSearchResultBox } from '@/components/BlogSearchBar/utils';
import { PostsContext } from '@/contexts/Posts';
import { SearchContext } from '@/contexts/Search';
import { fuseFactory } from '@/lib/fuse';
import { ResultStyles } from './styles';

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
      ${({ showSearch }) => showSearch && tw`ml-8`}
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

const SearchResultBox = buildSearchResultBox(ResultStyles, SearchResultBase);

const DesktopNavbar = ({ renderLangSelect, toggleMenu, menuOpen }) => {
  const { pathname } = useRouter();
  const showSearch = /^\/(blog|post)/g.test(pathname);
  const { posts } = useContext(PostsContext);
  const fuse = fuseFactory.createSingleton(posts, fuseOptions);
  useEffect(() => {
    if (posts.length && posts.length !== SearchContext?._docs?.length) {
      fuse.setCollection(posts);
    }
  }, [posts]);

  return (
    <DektopNavbarContainer
      showSearch={showSearch}>
      <Link
        href="/">
        <LogoA>
          <Logo />
        </LogoA>
      </Link>
      <SearchContext.Provider
        value={fuse}>
        {showSearch && (
          <SearchBar
            renderSearchResult={SearchResultBox}
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
