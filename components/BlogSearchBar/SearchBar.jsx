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
import { SearchContext } from '@/contexts/Search';
const Root = styled.div`
  ${tw`relative flex mr-auto items-center my-auto`}
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
  // context = {},
  ...props
}) => {
  const [result, setResult] = useState(null);
  const [focused, setFocused] = useState(null);
  const searchContext = useContext(SearchContext);
  const setIsFocused = v => () => {
    if (focused === v) return;
    setFocused(v);
  };
  const handleInputChange = e => {
    // console.log('handleInputChange()/ e: ', e.target.value);
    // console.log('searchContext', searchContext);
    console.log(searchContext.search(e.target.value));
    setResult(searchContext.search(e.target.value));
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

        <ButtonWrapper
          css={SearchIconWrapperStyles}>
          <SearchButton
            size={22} />
        </ButtonWrapper>
      </FlexRow>
      {result != null && !!result.length && renderSearchResult({ result })}
    </Root>
  );
};

export default SearchBar;
