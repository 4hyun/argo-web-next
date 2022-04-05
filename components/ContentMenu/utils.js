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
      /* traverse to key segment to end */
      locationKey.split(KEY_DELIMITER).reduce((acc, curId, i, arr) => {
        let findIndexResult;
        let itemOrPlaceholder;
        const isLocationKeyEnd = arr.length - 1 === i;
        if (Array.isArray(acc)) {
          // console.log('>>DEBUG this should log at the end too');
          /* note: we are starting a new menuItem iteration */
          findIndexResult = acc.findIndex(item => item.id === curId);

          console.log('>>DEBUG findIndexResult : ', findIndexResult);
          return acc[findIndexResult];
        } else if (typeof acc === 'object') {
          // if (curId === '624aad435c3a387b701b449b') {
          //   console.log(
          //     '>> DEBUG FROM HERE id: "624aad435c3a387b701b449b"',
          //     curId === '624aad435c3a387b701b449b',
          //   );
          //   console.log('>> acc: ', acc);
          // }
          if (isLocationKeyEnd) {
            itemOrPlaceholder = {
              ...item,
              menuItemUid: `${locationKey}`,
              sort: location[locationKey],
              level: i,
            };
            // if (curId === '624aad435c3a387b701b449b') {
            //   console.log(
            //     '>>DEBUG 아케텍쳐 itemOrPlaceholder: ',
            //     itemOrPlaceholder,
            //   );
            // }
          } else {
            let currentNodeIndex = acc.items.findIndex(
              item => item.id === curId,
            );
            /* TODO: check if this node already has full item. */
            const currentNode = acc.items[currentNodeIndex];
            if (currentNode._id) {
              /* Note: full item already in place. */
              /* Do not modify this item */
              itemOrPlaceholder = currentNode;
            } else {
              itemOrPlaceholder = { id: curId };
            }
            // if (
            //   curId === '624aad435c3a387b701b449b' &&
            //   locationKey ===
            //     '624aac545c3a387b701b4496.624aad435c3a387b701b449b.624b0063a5f4064104d0b337'
            // ) {
            //   console.log(
            //     '>>DEBUG 게이트웨이 itemOrPlaceholder: ',
            //     itemOrPlaceholder,
            //   );
            //   console.log(
            //     '>>DEBUG 게이트웨이 에서 acc[findIndexResult]: ',
            //     acc[findIndexResult],
            //   );
            //   console.log(
            //     '>>DEBUG 게이트웨이 에서 findIndexResult: ',
            //     findIndexResult,
            //   );
            //   console.log(
            //     '>>DEBUG 게이트웨이 에서 currentNodeIndex: ',
            //     currentNodeIndex,
            //   );
            // }
          }
          /*  */
          /* look for search in `acc.items` */
          if (!acc.items) {
            acc.items = [];

            acc.items.push(itemOrPlaceholder);
            return acc.items[0];
          }
          findIndexResult = acc.items.findIndex(item => item.id === curId);
          if (findIndexResult < 0) {
            acc.items = [...acc.items, itemOrPlaceholder];
            return acc.items[0];
          } else {
            acc.items[findIndexResult] = itemOrPlaceholder;
            return acc.items[findIndexResult];
          }
        } else {
          console.log('>>DEBUG acc: ', acc);
          // return;
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
      // console.log('>> debug item: ', item);
      // console.log('>> debug location: ', location);
      // console.log('>> debug root: ', JSON.stringify(root));
      // console.log('>> debug menuId: ', menuId);
      buildTreeFromLocation(item, location, root, menuId);
    }
  });
  return root;
}

export { parseMenuTree };
