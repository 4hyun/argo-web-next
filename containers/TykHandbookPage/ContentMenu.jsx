import React from 'react';
import ContentMenu from '@/components/ContentMenu';
import { parseMenuTree } from '@/components/parseMeuTree/utils';

const TykHandbookContentMenu = () => {
  const menuTree = parseMenuTree(menu);
  return (
    <div>
      Tyk Handbook Content Menu
      <ContentMenu
        data={menuTree} />
    </div>
  );
};

export default TykHandbookContentMenu;
