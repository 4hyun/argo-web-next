import React from 'react';
import { LI, Label } from '@/components/Base';
import tw, { css } from 'twin.macro';

const ItemStyles = css`
  --indent: 1rem;
  ${tw`flex`}
  margin-left: ${({ level }) =>
    level > 0 ? `calc(var(--indent) * ${level})` : 0}
`;

const Item = props => {
  const { label, level, controlling } = props;

  return (
    <LI
      css={ItemStyles}
      {...{ level }}>
      {controlling && 'controlling'}
      {Label && <Label>{label}</Label>}
    </LI>
  );
};

export const ItemDEV = props => {
  const { data = {} } = props;
  const { label, level, controlling } = data;

  return (
    <LI
      css={ItemStyles}
      {...{ level }}>
      {controlling && 'controlling'}
      {Label && <Label>{label}</Label>}
    </LI>
  );
};

export default Item;
