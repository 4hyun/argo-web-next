import tw, { styled } from 'twin.macro';
import { LogoFullDarkHorizontal } from 'components/Brand';

const Logo = styled(LogoFullDarkHorizontal)`
  ${tw`h-3/5 w-auto`}
  ${tw`lg:(h-full px-0)`}
`;

export const LogoWordmarkFullHorizontal = Logo;

export const LogoCombination = styled.div`
  height: 100%;
  width: 50px;
  background: 100% / contain url('/argo-logo-combination-512x512.png') no-repeat;
`;

export default Logo;
