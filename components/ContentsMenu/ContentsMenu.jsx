import React from 'react';
import tw, { css, styled } from 'twin.macro';
import MenuRoot from './MenuRoot';
import RecurseList from './RecurseList';
import { Item } from './Item';
import sortAsc from '@/lib/utils/sort-asc.js';

const KEY_FIELD = 'menuItemUid';
const getKeyProp = prop => prop[KEY_FIELD];

const RecurseListDevStyles = css`
  li {
    ${tw`px-4 pt-2 pb-2 rounded-md flex-1`}
  }
  li:hover {
    ${tw`cursor-pointer bg-white`}
  }
  li:active {
    ${tw`ring-4 ring-argo-blue-50 select-none`}
  }
`;

const ContentMenu = ({ rootCssProp, data, sortKey = 'sort' }) => {
  const sortedData = sortAsc(data, sortKey);
  if (!sortedData) return null;
  return (
    <MenuRoot
      css={rootCssProp}>
      {sortedData.map((data, j) => (
        <RecurseList
          cssProp={RecurseListDevStyles}
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
