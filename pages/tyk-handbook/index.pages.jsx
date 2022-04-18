// import { useMemo } from 'react';
import Container from '@/containers/TykHandbookPage/Container';
import TykHandbookMenu from '@/containers/TykHandbookMenu';
import { fetchResource } from '@/lib/api/resources';
// import { ContentsMenuPortal } from '@/components/TykHandbookMenu';
// import ContentsMenu from '@/components/ContentsMenu';
// import { parseMenuTree } from '@/components/ContentsMenu/utils';
// import { MenuRootCss } from '@/components/TykHandbookMenu/styles';

const TykHandbookPage = ({ menu }) => {
  // const menuTree = useMemo(() => parseMenuTree(menu), [menu]);

  return (
    <Container>
      <TykHandbookMenu
        data={menu} />
    </Container>
  );
};

export default TykHandbookPage;

export async function getStaticProps() {
  const menuResponse = await fetchResource({
    resourceName: 'Menu',
    method: 'Get',
    query: {
      id: '62494855709b5b7834468c11',
      params: '?_publicationState=preview',
    },
  });
  const menu = await menuResponse.json();
  return { props: { menu } };
}
