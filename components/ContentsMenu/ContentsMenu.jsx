import React from 'react';
import MenuRoot from './MenuRoot';
import RecurseList from './RecurseList';
import { Item } from './Item';
import sortAsc from '@/lib/utils/sort-asc.js';

const KEY_FIELD = 'menuItemUid';
const getKeyProp = prop => prop[KEY_FIELD];

const ContentMenu = ({ rootCss, listCss, itemCss, data, sortKey = 'sort' }) => {
  const sortedData = sortAsc(data, sortKey);
  if (!sortedData) return null;
  return (
    <MenuRoot
      css={rootCss}>
      {sortedData.map((data, j) => (
        <RecurseList
          cssProps={{ listCss, itemCss }}
          key={j}
          data={data}
          getKeyProp={getKeyProp}
          itemAs={Item}
          isRoot={true}
        />
      ))}
    </MenuRoot>
  );
};

export default ContentMenu;
