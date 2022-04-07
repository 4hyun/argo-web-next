import React, { useState, useMemo } from 'react';
import ContentsMenuPortal from '@/components/TykHandbookMenu/ContentsMenuPortal';
import ContentsMenu from '@/components/ContentsMenu';
import {
  MenuRootCss,
  RecurseListCss,
} from '@/components/TykHandbookMenu/styles';
import { parseMenuTree } from '@/components/ContentsMenu/utils';

const TykHandbookMenu = ({ data }) => {
  const menuTree = useMemo(() => parseMenuTree(data), [data]);

  return (
    <ContentsMenuPortal>
      <ContentsMenu
        rootCss={MenuRootCss}
        listCss={RecurseListCss}
        data={menuTree}
      />
    </ContentsMenuPortal>
  );
};

export default TykHandbookMenu;
