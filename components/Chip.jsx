import { useRef } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Close } from '@/components/Icons';

const RootDefaultStyles = css`
  ${tw`flex py-1 px-1.5 space-x-4`}
`;

const Root = styled.div`
  ${({ styleDefault }) => !styleDefault && RootDefaultStyles}
`;
const Label = styled.span``;
const CloseButtonStyles = css``;

const Chip = ({ label = '', onDelete, as, chipStyles, ...other }) => {
  return (
    <Root
      as={as || null}
      css={chipStyles}
      styleDefault={!!chipStyles}>
      <Label>{label}</Label>
      {onDelete && <Close
        css={CloseButtonStyles}
        onClick={onDelet} />}
    </Root>
  );
};

export default Chip;
