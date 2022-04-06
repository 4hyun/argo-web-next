import { UL } from '@/components/Base';

export const getSortProps = props => {
  const { keyField, sortKey } = props;
  return { keyField, sortKey };
};

const RecurseList = props => {
  const { getKeyProp = () => 'undefined', sortKey, data } = props;

  const Item = props.itemAs;

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
        data={data}></Item>
      {sortedDataItems &&
        sortedDataItems.map((item, index) => (
          <RecurseList
            key={index}
            data={item}
            getKeyProp={getKeyProp}
            itemAs={props.itemAs}
          />
        ))}
    </UL>
  );
};

export default RecurseList;
