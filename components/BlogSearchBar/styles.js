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
  ${'' /* Desktop: width */}
  width: 400px;
  ${tw`px-4 focus:outline-none`}
`;
