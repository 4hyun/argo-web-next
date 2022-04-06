import React from 'react';
import MenuRoot from './MenuRoot';
import { RecurseList } from './RecurseList';

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
          getKeyProp={getKeyProp} />
      ))}
      {/* {(sortKey ? data.sort((a, b) => a[sortKey] - b[sortKey]) : data).map(
        rootMenuItem =>
          rootMenuItem?.items.length > 0 ? (
            <RecurseListDeprecated
              key={rootMenuItem.id}
              keyField={KEY_FIELD}
              {...rootMenuItem}
            >
              {(sortKey
                ? rootMenuItem.items.sort((a, b) => a[sortKey] - b[sortKey])
                : rootMenuItem.items
              ).map(item =>
                item?.items?.length > 0 ? (
                  <RecurseListDeprecated
                    key={item.id}
                    keyField={KEY_FIELD}
                    sortKey={deepSort && sortKey}
                    {...item}
                  />
                ) : (
                  <Item
                    key={item.menuItemUid}
                    {...item} />
                ),
              )}
            </RecurseListDeprecated>
          ) : (
            <Item
              key={rootMenuItem.menuItemUid}
              {...rootMenuItem} />
          ),
      )} */}
    </MenuRoot>
  );
};

export default ContentMenu;
