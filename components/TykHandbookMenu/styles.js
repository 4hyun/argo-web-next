import tw, { css } from 'twin.macro';

const ItemFontCss = css`
  ${tw`font-medium`}
`;

const MenuItemActiveStyles = css`
  ${tw`bg-argo-blue-400 bg-opacity-30 text-white`}
`;

const MenuItemCss = css`
  ${tw`my-1`}
  --indent: 1rem;
  ${tw`flex`}
  margin-left: ${({ level }) =>
    level > 0 ? `calc(var(--indent) * ${level})!important` : 0};
  ${({ active }) => active && MenuItemActiveStyles}
`;

const PortalRootCss = css`
  @media (min-width: 1025px) {
    ${tw`w-1/4 flex-grow`}
  }
  ${tw`bg-argo-blue-50 bg-opacity-50`}
`;

const MenuRootCss = css`
  ${ItemFontCss}
  @media (min-width: 1025px) {
    ${tw`flex-grow`}
  }
`;

const RecurseListCss = css`
  li {
    ${tw`flex-1 px-4 pt-2 pb-2 rounded-md items-center`}
    ${ItemFontCss}
  }
  li:hover {
    ${tw`cursor-pointer bg-white`}
  }
  li:active {
    ${tw`ring-4 ring-argo-blue-50 select-none`}
  }
`;

export { PortalRootCss, MenuRootCss, RecurseListCss, MenuItemCss };
