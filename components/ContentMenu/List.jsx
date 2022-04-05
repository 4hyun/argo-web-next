import React from 'react';
import Item from './Item';
import UL from '../Base/UL';

const List = props => {
  const { items, keyField, sortKey } = props;

  return (
    <UL>
      {(sortKey ? items.sort((a, b) => a[sortKey] - b[sortKey]) : items).map(
        (item, i) => (
          <Item
            key={keyField ? item[keyField] : i}
            {...item} />
        ),
      )}
    </UL>
  );
};

export default List;
