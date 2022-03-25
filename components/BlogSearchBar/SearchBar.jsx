import { useEffect, useContext, useState } from 'react';
import Input from './Input';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Search } from '@/components/icons';
import { getInputProps } from './utils';
import {
  SearchIconStyles,
  SearchIconWrapperStyles,
  InputStyles,
} from './styles';

const Root = styled.div`
  ${tw`flex mr-auto items-center my-auto`}
`;

const FlexRow = styled.div`
  ${tw`relative flex h-10 border border-argo-blue-400 rounded-md overflow-hidden`}
  ${({ focused }) => (focused && tw`ring-2 ring-blue-400`) || ''}
`;

const ButtonWrapper = styled.div`
  ${tw`flex items-center justify-center hover:cursor-pointer active:cursor-default`}
  width: 40px;
`;

const SearchButton = styled(Search)`
  ${SearchIconStyles}
`;

const SearchBar = ({
  renderSearchResult = () => {},
  context = {},
  ...props
}) => {
  const [focused, setFocused] = useState(null);
  const searchContext = useContext(context);
  const setIsFocused = v => () => {
    if (focused === v) return;
    setFocused(v);
  };
  useEffect(() => {
    /* init() fuse */
    if (searchContext) {
      console.log(searchContext.search('Monster'));
    }
  }, []);
  const handleInputChange = () => {
    console.log('handleInputChange()');
  };
  return (
    <Root>
      <FlexRow
        focused={focused}>
        <Input
          {...getInputProps(props)}
          onFocus={setIsFocused(true)}
          setParentFocusOut={setIsFocused(false)}
          handleInputChange={handleInputChange}
          css={InputStyles}
        />
        {/* TODO: style SearchResult layout to 'fixed', and position align to bottom of SearchBar */}
        {renderSearchResult()}
        <ButtonWrapper
          css={SearchIconWrapperStyles}>
          <SearchButton
            size={22} />
        </ButtonWrapper>
      </FlexRow>
    </Root>
  );
};

export default SearchBar;
