import tw, { styled } from 'twin.macro';
import { CaretDown as CaretDownIcon } from '@/components/Icons';

const CaretDown = styled(CaretDownIcon)`
  --size-md: 20px;
  @media (min-width: 1025px) {
    width: var(--size-md);
    height: var(--size-md);
  }
  ${tw`fill-current text-argo-blue-50 transform transition-transform ml-4`}
  ${({ open }) => open && tw`rotate-180`}
`;

export default CaretDown;
