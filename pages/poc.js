import { fetchResource } from 'lib/api';
import MenuPOCPage from '@/containers/POC/Menu';
import FullScreen from '@/containers/FullScreen';

const POCPage = props => {
  return (
    <FullScreen>
      <MenuPOCPage
        {...props}></MenuPOCPage>
    </FullScreen>
  );
};

export default POCPage;

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
  // console.log('>>DEBUG menu: ', menu);
  return { props: { menu } };
}
