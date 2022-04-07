import { useState } from 'react';
import tw, { css } from 'twin.macro';
import { UL } from '@/components/Base';
import sortAsc from '@/lib/utils/sort-asc.js';

const useAccordion = initState => {
  const [state, setState] = useState(initState);
  const toggle = () => {
    console.log('>> toggled');
    setState(!state);
  };
  return [state, toggle];
};

const CollapsedStyles = css`
  ${tw`hidden`}
`;

const RecurseList = ({
  cssProp,
  getKeyProp = () => 'undefined',
  sortKey,
  data,
  itemAs,
  collapsed,
}) => {
  const [isOpen, toggleOpen] = useAccordion();

  const sortedItems = sortAsc(data.items, sortKey);
  const Item = itemAs;

  return (
    <UL
      css={[cssProp, collapsed && CollapsedStyles]}>
      <Item
        key={`${getKeyProp}-root`}
        data={data}
        onClick={toggleOpen}
        isOpen={isOpen}
      ></Item>
      {sortedItems &&
        sortedItems.map((item, index) => (
          <RecurseList
            key={index}
            data={item}
            getKeyProp={getKeyProp}
            itemAs={itemAs}
            collapsed={isOpen}
          />
        ))}
    </UL>
  );
};

export default RecurseList;
