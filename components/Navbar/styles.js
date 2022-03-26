import tw, { css } from 'twin.macro';

export const SearchResultContainerStyles = css`
  ${({ paddingTop = '100px' }) => `margin-top: ${paddingTop};`}
  ${({ theme }) => ({
    backgroundColor: theme.backgroundColor || 'transparent',
  })}
  ${tw`absolute top-0  max-w-full rounded-md`}
  z-index: -1;
`;

export const SearchResultBoxStyles = css`
  ${tw`list-none flex flex-col space-y-4 py-4 px-2`}
  max-height: 400px;
  overflow-y: auto;
`;

export const SearchResultItemStyles = css`
  background: #332fe4;
  ${tw`rounded-sm px-3 py-2`}
  color: #f2f2f2;
  &.hovered {
    cursor: pointer;
    background: #8686ff;
  }
`;
