import React from 'react';
import MenuRoot from './MenuRoot';
import Item from './Item';
import RecurseListDeprecated, { RecurseListDEV } from './RecurseList';

const KEY_FIELD = 'menuItemUid';

const ContentMenu = ({ data, sortKey = 'sort', deepSort = true }) => {
  const sortedData = sortKey
    ? data.sort((a, b) => a[sortKey] - b[sortKey])
    : data;
  return (
    <MenuRoot>
      {sortedData.map((data, j) => (
        <RecurseListDEV
          key={j}
          data={data} />
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
