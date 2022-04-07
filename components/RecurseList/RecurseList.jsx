import { UL } from '@/components/Base';
import sortAsc from '@/lib/utils/sort-asc.js';

const RecurseList = props => {
  const { cssProp, getKeyProp = () => 'undefined', sortKey, data } = props;

  const sortedItems = sortAsc(data.items, sortKey);
  const Item = props.itemAs;

  return (
    <UL
      css={cssProp}>
      <Item
        key={`${getKeyProp}-root`}
        data={data}></Item>
      {sortedItems &&
        sortedItems.map((item, index) => (
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
