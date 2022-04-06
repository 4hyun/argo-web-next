import { UL } from '@/components/Base';
import Item, { ItemDEV } from './Item';
import List from './List';

export const getSortProps = props => {
  const { keyField, sortKey } = props;
  return { keyField, sortKey };
};

const RecurseListDeprecated = props => {
  const { keyField, sortKey } = props;
  const controlling = !!props.children;
  return (
    <UL>
      <Item
        key={keyField ? `${props[keyField]}-li` : props.id}
        {...props}
        controlling={controlling}
      />
      {props.children ? (
        props.children
      ) : (
        <List
          key={keyField ? `${props[keyField]}-ul` : props.id}
          {...props}
          sortKey={sortKey}
        />
      )}
    </UL>
  );
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
      <ItemDEV
        key={`${getKeyProp}-root`}
        data={data} />
      {sortedDataItems &&
        sortedDataItems.map((item, index) => (
          <RecurseListDEV
            key={index}
            data={item}
            getKeyProp={getKeyProp} />
        ))}
    </UL>
  );
};

export default RecurseListDeprecated;
