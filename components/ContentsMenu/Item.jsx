import { useState } from 'react';
import { LI, Label } from '@/components/Base';
import tw, { css } from 'twin.macro';

const ActiveStyles = css`
  ${tw`bg-argo-blue-400 bg-opacity-30 text-white`}
`;

const ItemStyles = css`
  --indent: 1rem;
  ${tw`flex`}
  margin-left: ${({ level }) =>
    level > 0 ? `calc(var(--indent) * ${level})!important` : 0};
  ${({ active }) => active && ActiveStyles}
`;

export const Item = props => {
  const [mouseEntered, setMouseEntered] = useState();
  const { active, children: icon, data = {}, onClick } = props;
  const { label, level, controlling } = data;

  return (
    <LI
      active={!mouseEntered && active}
      css={ItemStyles}
      onClick={onClick}
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
      {...{ level }}
    >
      {controlling && 'controlling'}
      {Label && <Label>{label}</Label>}
      {icon && icon}
    </LI>
  );
};
