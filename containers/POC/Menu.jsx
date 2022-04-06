import React from 'react';
import tw, { styled } from 'twin.macro';
import mockMenuData from '@/lib/mock/menu';
import { parseMenuTree } from '@/components/ContentsMenu/utils';
import ContentsMenu from '@/components/ContentsMenu';

const FlexCol = styled.div`
  ${tw`flex flex-col`}
`;

const FlexRow = styled.div`
  ${tw`flex`}
`;

// const OutputRow = ({ rowData }) => {
//   return (
//     rowData && rowData.map((row, index) => <FlexRow
//       key={index}>{row}</FlexRow>)
//   );
// };
const MenuPOCPage = props => {
  const { menu = mockMenuData } = props;
  const menuTree = parseMenuTree(menu);
  // console.log('>> menuTree: ', menuTree);

  return (
    <FlexCol>
      <ContentsMenu
        data={menuTree} />
    </FlexCol>
  );
};

export default MenuPOCPage;
