import React from 'react';
import tw, { styled } from 'twin.macro';
import mockMenuData from '@/lib/mock/menu';
import parseMenuTreeList, {
  parseMenuTreeMap,
} from '@/lib/utils/parse-menu-tree';

const FlexCol = styled.div`
  ${tw`flex flex-col`}
`;

const FlexRow = styled.div`
  ${tw`flex`}
`;

const OutputRow = ({ rowData }) => {
  return (
    rowData && rowData.map((row, index) => <FlexRow
      key={index}>{row}</FlexRow>)
  );
};
const MenuPOCPage = props => {
  const { menu = mockMenuData } = props;
  const { label: rootLabel, items } = menu;
  const rowData = [];
  const menuTree = parseMenuTreeMap(menu);
  console.log('>> menuTreeMap: ', menuTree);

  return (
    <FlexCol>
      Menu
      <OutputRow
        rowData={rowData} />
    </FlexCol>
  );
};

export default MenuPOCPage;
