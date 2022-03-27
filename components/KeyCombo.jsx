import tw, { styled } from 'twin.macro';
import CtrlK from '../public/ctrl+k.svg';
import Esc from '../public/esc.svg';

const keyComboIcon = {
  'ctrl+k': CtrlK,
  esc: Esc,
};

const keyComboKeyString = {};
for (let k in keyComboIcon) {
  keyComboKeyString[k] = k;
}

const Wrapper = styled.div`
  ${tw`px-1.5 py-2 rounded-md ml-auto mr-2 bg-argo-blue-400 hover:ring-1`}
`;

const KeyComboIcon = ({ keyString, wrapperCss, ...props }) => {
  // console.log('>>DEBUG keyString: ', keyString);
  const Cmp = keyComboIcon[keyString];
  if (!Cmp) return;
  return (
    <Wrapper>
      <Cmp
        {...props} />
    </Wrapper>
  );
};

export { keyComboKeyString, KeyComboIcon };
