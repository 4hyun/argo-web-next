const LOCATION_FIELD = 'parentId_to_sort';
const KEY_DELIMITER = '.';

function buildTreeFromLocation(item, location, root, menuId) {
  /* TODO: consider changing `parentId_to_sort` field to `location_to_sort` */
  /* menuLocationsMap: Record<ConcatMenuKey, SortInt> */
  // console.log('>>DEBUG buildTreeFromLocation()/ arguments.root: ', root);
  // return;
  if (typeof location === 'number' && location > -1) {
    root.push({
      ...item,
      menuItemUid: `${menuId}-${item.id}`,
      sort: location,
      level: 0,
      items: [],
    });
    return;
  }

  if (typeof location === 'object') {
    /* feature: support multiple locations in a `menu`. */
    /* a `menu-item` can be placed in more than one location of a `menu` */
    for (const locationKey in location) {
      /* traverse to end */
      locationKey.split(KEY_DELIMITER).reduce((acc, parentId, i, arr) => {
        let findIndexResult;
        let itemOrPlaceholder;
        const isLocationKeyEnd = arr.length - 1 === i;
        if (Array.isArray(acc)) {
          /* note: we are starting a new menuItem iteration */
          findIndexResult = acc.findIndex(item => item.id === parentId);
          return acc[findIndexResult];
        } else if (typeof acc === 'object') {
          itemOrPlaceholder = isLocationKeyEnd
            ? {
                ...item,
                menuItemUid: `${locationKey}`,
                sort: location[locationKey],
                level: i,
              }
            : { id: parentId };
          /* look for search in `acc.items` */
          if (!acc.items) {
            acc.items = [];

            acc.items.push(itemOrPlaceholder);
            return acc.items[0];
          }
          findIndexResult = acc.items.findIndex(item => item.id === parentId);
          if (findIndexResult < 0) {
            acc.items = [...acc.items, itemOrPlaceholder];
            return acc.items[0];
          } else {
            acc.items[findIndexResult] = itemOrPlaceholder;
            return acc.items[findIndexResult];
          }
        } else {
          throw new Error(
            `buildTreeFromLocation() Type Error: Invalid 'acc' type: ${typeof acc}`,
          );
        }
      }, root);
    }
  }

  return root;
}

function parseMenuTree(menu) {
  if (!menu)
    throw new Error(
      `parseMenuTree() Error: invalid 'root' value provided: ${root}. Valid root node object with \`label\`, \`items\`, \`id\` is required.`,
    );
  const root = [];
  const { id: menuId, items } = menu;
  items.forEach(item => {
    if (item[LOCATION_FIELD][menuId]) {
      const location = item[LOCATION_FIELD][menuId];
      buildTreeFromLocation(item, location, root, menuId);
    }
  });
  return root;
}

export default parseMenuTree;
