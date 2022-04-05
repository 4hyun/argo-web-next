import React from 'react';
import MenuRoot from './MenuRoot';
import Item from './Item';
import RecurseList from './RecurseList';

const KEY_FIELD = 'menuItemUid';

const ContentMenu = ({ data }) => {
  return (
    <MenuRoot>
      {data.map(rootMenuItem =>
        rootMenuItem?.items.length > 0 ? (
          <RecurseList
            key={rootMenuItem.id}
            keyField={KEY_FIELD}
            {...rootMenuItem}
          >
            {rootMenuItem.items.map(item =>
              item?.items.length > 0 ? (
                <RecurseList
                  key={item.id}
                  keyField={KEY_FIELD}
                  {...item} />
              ) : null,
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
