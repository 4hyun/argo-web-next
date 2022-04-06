import React from 'react';
import MenuRoot from './MenuRoot';
import Item from './Item';
import RecurseList from './RecurseList';

const KEY_FIELD = 'menuItemUid';

const ContentMenu = ({ data, sortKey = 'sort', deepSort = true }) => {
  return (
    <MenuRoot>
      {(sortKey ? data.sort((a, b) => a[sortKey] - b[sortKey]) : data).map(
        rootMenuItem =>
          rootMenuItem?.items.length > 0 ? (
            <RecurseList
              key={rootMenuItem.id}
              keyField={KEY_FIELD}
              {...rootMenuItem}
            >
              {(sortKey
                ? rootMenuItem.items.sort((a, b) => a[sortKey] - b[sortKey])
                : rootMenuItem.items
              ).map(item =>
                item?.items?.length > 0 ? (
                  <RecurseList
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
            </RecurseList>
          ) : (
            <Item
              key={rootMenuItem.menuItemUid}
              {...rootMenuItem} />
          ),
      )}
    </MenuRoot>
  );
};

export default ContentMenu;
