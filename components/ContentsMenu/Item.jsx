import { LI, Label } from '@/components/Base';
import tw, { css } from 'twin.macro';

const ItemStyles = css`
  --indent: 1rem;
  ${tw`flex`}
  margin-left: ${({ level }) =>
    level > 0 ? `calc(var(--indent) * ${level})` : 0}
`;

export const Item = props => {
  const { data = {}, onClick } = props;
  const { label, level, controlling } = data;

  return (
    <LI
      css={ItemStyles}
      onClick={onClick}
      {...{ level }}>
      {controlling && 'controlling'}
      {Label && <Label>{label}</Label>}
    </LI>
  );
};
