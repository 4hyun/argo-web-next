import { UL } from '@/components/Base';
import { Item } from './Item';
// import List from './List';

export const getSortProps = props => {
  const { keyField, sortKey } = props;
  return { keyField, sortKey };
};

export const RecurseList = props => {
  const { getKeyProp = () => 'undefined', sortKey, data } = props;
  let sortedDataItems;
  if (data.items) {
    if (sortKey) {
      sortedDataItems = data.items.sort((a, b) => a[sortKey] - b[sortKey]);
    } else {
      sortedDataItems = data.items;
    }
  }
  return (
    <UL>
      <Item
        key={`${getKeyProp}-root`}
        data={data} />
      {sortedDataItems &&
        sortedDataItems.map((item, index) => (
          <RecurseList
            key={index}
            data={item}
            getKeyProp={getKeyProp} />
        ))}
    </UL>
  );
};
