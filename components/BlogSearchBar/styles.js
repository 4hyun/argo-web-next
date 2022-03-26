import tw, { css } from 'twin.macro';

export const SearchIconStyles = css`
  * {
    ${tw`fill-current text-argo-blue-400`};
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

/* style line by 'key' to print */
/* eg. 'title' key is styled with lineStyles.title<css> */
export const lineStyles = {
  title: css`
    ${tw`font-bold`}
  `,
  excerpt: css`
    ${tw`font-light`}
  `,
};
