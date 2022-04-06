import React from 'react';
import MenuRoot from './MenuRoot';
import RecurseList from './RecurseList';
import { Item } from './Item';

const KEY_FIELD = 'menuItemUid';
const getKeyProp = prop => prop[KEY_FIELD];

const ContentMenu = ({ data, sortKey = 'sort' }) => {
  const sortedData = sortKey
    ? data.sort((a, b) => a[sortKey] - b[sortKey])
    : data;
  return (
    <MenuRoot>
      {sortedData.map((data, j) => (
        <RecurseList
          key={j}
          data={data}
          getKeyProp={getKeyProp}
          itemAs={Item}
        />
      ))}
    </MenuRoot>
  );
};

export default ContentMenu;
