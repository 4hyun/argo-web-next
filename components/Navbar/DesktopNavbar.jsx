import { useEffect, useContext, useMemo } from 'react';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import { fuseFactory } from '@/lib/fuse';
import SearchBar from '@/components/BlogSearchBar/SearchBar';
import SearchResultBase from '@/components/BlogSearchBar/SearchResult';
import { buildSearchResultBox } from '@/components/BlogSearchBar/utils';
import DesktopNavbarLogo from './DesktopNavbarLogo';
import Hamburger from './Hamburger';
import { PostsContext } from '@/contexts/Posts';
import { SearchContext } from '@/contexts/Search';
import { NavbarLogoProvider } from '@/contexts/NavbarLogo';
import {
  SearchResultBoxStyles,
  SearchResultItemStyles,
  SearchResultContainerStyles,
  SearchResultItemLinkIconStyles,
  SearchBarRootStyles,
} from './styles';
import { isBlogOrPostPage } from './utils';

import { ExternalLinkAlt } from '@/components/Icons';

const LinkIcon = () => {
  return <ExternalLinkAlt
    css={SearchResultItemLinkIconStyles} />;
};

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

const searchResultBoxStylesConfig = {
  containerCss: SearchResultContainerStyles,
  wrapperCss: SearchResultBoxStyles,
  itemCss: SearchResultItemStyles,
};

const searchResultBoxProps = {
  paddingTop: '50px',
  theme: { backgroundColor: '#001ba8' },
  keys: ['title', 'excerpt'],
  renderItemIcon: LinkIcon,
};
const SearchResultBox = buildSearchResultBox(
  searchResultBoxStylesConfig,
  SearchResultBase,
  searchResultBoxProps,
);

/* @param {string} pathname - NextRouter.pathname */
const pageTitleMap = {
  blog: 'Blog',
  tykhandbook: 'Tyk Handbook',
};
const getPageTitle = ({ pathname, isBlogPage, isTykHandbookPage }) => {
  if (isBlogPage) return pageTitleMap['blog'];
  if (isTykHandbookPage) return pageTitleMap['tykhandbook'];
  return '';
};

const DesktopNavbar = ({ renderLangSelect, toggleMenu, menuOpen }) => {
  const { pathname } = useRouter();
  const { posts } = useContext(PostsContext);
  const { isBlogPage, isTykHandbookPage } = useMemo(
    () => ({
      isBlogPage: isBlogOrPostPage(pathname),
      isTykHandbookPage: pathname === '/tyk-handbook',
    }),
    [pathname],
  );
  const fuse = fuseFactory.createSingleton(posts, fuseOptions);

  useEffect(() => {
    if (posts.length && posts.length !== SearchContext?._docs?.length) {
      fuse.setCollection(posts);
    }
  }, [posts]);

  return (
    <DektopNavbarContainer>
      <NavbarLogoProvider>
        <DesktopNavbarLogo
          pageTitle={getPageTitle({ isBlogPage, isTykHandbookPage })}
          {...{ isBlogPage, isTykHandbookPage }}
        />
      </NavbarLogoProvider>
      <SearchContext.Provider
        value={fuse}>
        {isBlogPage && (
          <SearchBar
            rootStyles={SearchBarRootStyles}
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
