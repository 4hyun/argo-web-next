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

export const RecurseListDEV = props => {
  const { keyField, sortKey, data } = props;
  // const controlling = !!props.children;
  return (
    <UL>
      <ItemDEV
        data={data} />
      {data.items &&
        data.items.map((item, k) => <RecurseListDEV
          key={k}
          data={item} />)}
    </UL>
  );
};
export default RecurseListDeprecated;
