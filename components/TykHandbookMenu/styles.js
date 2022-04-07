import tw, { css } from 'twin.macro';

const PortalRootCss = css`
  @media (min-width: 1025px) {
    ${tw`w-1/4 flex-grow`}
  }
  ${tw`bg-argo-blue-50 bg-opacity-50`}
`;

const MenuRootCss = css`
  @media (min-width: 1025px) {
    ${tw`flex-grow`}
  }
`;

export { PortalRootCss, MenuRootCss };
