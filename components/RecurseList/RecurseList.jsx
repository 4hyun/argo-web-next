import { useContext } from 'react';
import tw, { css } from 'twin.macro';
import { UL } from '@/components/Base';
import { CaretDown } from '@/components/TykHandbookMenu';
import { ContentsMenuContext } from '@/contexts/ContentsMenu';
import useAccordion from './useAccordion';
import sortAsc from '@/lib/utils/sort-asc.js';

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
  caretDownIcon = CaretDown,
}) => {
  const {
    contentsMenuState: { selectedItem },
    setItemSelected,
  } = useContext(ContentsMenuContext);
  const [isOpen, toggleOpen] = useAccordion();
  const toggleOpenAndMarkActive = () => {
    setItemSelected(data.id);
    toggleOpen();
  };
  const OpenIndictorIcon = caretDownIcon;

  const sortedItems = sortAsc(data.items, sortKey);
  const Item = itemAs;

  return (
    <UL
      css={[cssProp, collapsed && CollapsedStyles]}>
      <Item
        key={`${getKeyProp}-root`}
        data={data}
        onClick={toggleOpenAndMarkActive}
        isOpen={isOpen}
        active={selectedItem === data.id}
      >
        {sortedItems && <OpenIndictorIcon
          open={isOpen} />}
      </Item>
      {sortedItems &&
        sortedItems.map((item, index) => (
          <RecurseList
            key={index}
            data={item}
            getKeyProp={getKeyProp}
            itemAs={itemAs}
            collapsed={!isOpen}
          />
        ))}
    </UL>
  );
};

export default RecurseList;
