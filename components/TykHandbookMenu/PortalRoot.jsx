import tw, { styled } from 'twin.macro';

const PortalRoot = styled.div.attrs(_ => ({
  id: 'tyk-handbook-menu-root',
}))`
  ${tw`fixed top-0 left-0 bottom-0 flex items-center px-6`}
`;

export default PortalRoot;
