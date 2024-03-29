import styled from 'styled-components';
import tw from 'twin.macro';

const PostList = styled.ul`
  ${tw`flex mt-4`}
  ${({ col }) => col && tw`flex-col gap-y-6`}
  @media (min-width: 768px) {
    width: 65%;
  }
`;

export default PostList;
