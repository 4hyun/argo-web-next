import tw, { styled, css } from 'twin.macro';

export const DefaultStyles = css`
  ${tw`text-3xl font-black`}
`;

const H1 = styled.h1`
  ${DefaultStyles}
  ${({ cssProp }) => cssProp}
`;

export default H1;
