import { LogoWordmarkFullHorizontal, LogoCombination } from './Logo';

const _logoList = [LogoWordmarkFullHorizontal, LogoCombination];

export const renderLogoTypeHelper = ({
  logoList = _logoList,
  typeIndex = 0,
}) => {
  const Logo = logoList[typeIndex];
  return <Logo />;
};

export const isBlogOrPostPage = pathname => /^\/(blog|post)/g.test(pathname);
