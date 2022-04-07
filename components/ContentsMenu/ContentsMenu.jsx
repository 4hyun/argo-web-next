import React from 'react';
import tw, { css, styled } from 'twin.macro';
import MenuRoot from './MenuRoot';
import RecurseList from './RecurseList';
import { Item } from './Item';
import sortAsc from '@/lib/utils/sort-asc.js';

const KEY_FIELD = 'menuItemUid';
const getKeyProp = prop => prop[KEY_FIELD];

const RecurseListDevStyles = css`
  li:hover {
    background: red;
    ${tw`cursor-pointer`}
  }
  li:active {
    ${tw`ring-4 ring-red-400`}
  }
`;

const ContentMenu = ({ data, sortKey = 'sort' }) => {
  const sortedData = sortAsc(data, sortKey);
  if (!sortedData) return null;
  return (
    <MenuRoot>
      {sortedData.map((data, j) => (
        <RecurseList
          cssProp={RecurseListDevStyles}
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
