import tw, { styled } from 'twin.macro';
import { withRouter } from 'next/router';
import Link from 'next/link';
import A from './A';
import { useNavbarLogo } from '@/contexts/NavbarLogo';
import { renderLogoTypeHelper, isBlogOrPostPage } from './utils';
import { DefaultStyles as PageTitleDefaultStyles } from '@/components/Page/H1';

const PageTitle = styled.span`
  ${PageTitleDefaultStyles}
  ${tw`ml-2`}
  display: flex;
  align-items: center;
  padding-bottom: 7px;
`;

const DesktopNavbarLogo = withRouter(({ router, pageTitle }) => {
  const isBlogPage = isBlogOrPostPage(router.pathname);
  const { typeIndex } = useNavbarLogo();
  return (
    <>
      <Link
        href="/"
        passHref>
        <A>{renderLogoTypeHelper({ typeIndex: isBlogPage ? 1 : typeIndex })}</A>
      </Link>
      {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
    </>
  );
});

export default DesktopNavbarLogo;
