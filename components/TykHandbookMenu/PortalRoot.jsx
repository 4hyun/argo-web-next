import { withRouter } from 'next/router';
import tw, { styled } from 'twin.macro';

const PortalRoot = styled.div.attrs(_ => ({
  id: 'tyk-handbook-menu-root',
}))`
  ${tw`hidden`}
  ${({ router }) => router.pathname === '/tyk-handbook' && tw`fixed`}
  ${tw`top-0 left-0 bottom-0 flex items-center px-6`}
`;

export default withRouter(PortalRoot);
