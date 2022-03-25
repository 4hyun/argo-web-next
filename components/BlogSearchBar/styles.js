import tw, { css } from 'twin.macro';

export const SearchIconStyles = css`
  * {
    fill: #fff;
  }
`;

export const SearchIconWrapperStyles = css`
  ${'' /* Desktop: move up 1px to close gap. */}
  margin-top:-1px;
`;

export const InputStyles = css`
  ${tw`px-4 focus:outline-none`}
`;
