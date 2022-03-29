import tw, { styled, css } from 'styled-components';
import { Close } from '@/components/Icons';

const RootDefaultStyles = css`
  ${tw`flex py-1 px-1.5 space-x-4`}
`;

const Root = styled.div`
  ${({ css }) => !css && RootDefaultStyles}
`;
const Label = styled.span``;
const CloseButtonStyles = css``;

const Chip = ({ label = '', onDelete }) => {
  return (
    <Root>
      <Label>{label}</Label>
      {onDelete && <Close
        css={CloseButtonStyles}
        onClick={onDelet} />}
    </Root>
  );
};

export default Chip;
