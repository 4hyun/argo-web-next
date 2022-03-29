import tw, { styled, css } from 'twin.macro';

const DefaultStyles = css`
  ${tw`container mx-auto text-3xl font-black`}
`;

const H1 = styled.h1`
  ${({ css }) => !css && DefaultStyles}
`;

export default H1;
