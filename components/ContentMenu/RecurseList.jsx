import { UL } from '@/components/Base';
import Item from './Item';
import List from './List';

const RecurseList = props => {
  const { keyField } = props;
  return (
    <UL>
      <Item
        key={keyField ? `${props[keyField]}-li` : props.id}
        {...props} />
      {props.children ? (
        props.children
      ) : (
        <List
          key={keyField ? `${props[keyField]}-ul` : props.id}
          {...props}
        ></List>
      )}
    </UL>
  );
};

export default RecurseList;
