import { useEffect, useContext } from 'react';
import Input from './Input';
import styled from 'styled-components';
import tw, { css } from 'twin.macro';
import { Search } from '@/components/icons';
import { getInputProps } from './utils';
import {
  SearchIconStyles,
  SearchIconWrapperStyles,
  InputStyles,
} from './styles';

const Root = styled.div`
  display: flex;
  width: fit-content;
  margin-right: auto;
`;

const FlexRow = styled.div`
  ${tw`relative flex h-10 border border-argo-blue-400`}
`;

const ButtonWrapper = styled.div`
  ${tw`flex items-center justify-center bg-argo-blue-400 hover:cursor-pointer active:cursor-default`}
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
  const searchContext = useContext(context);
  useEffect(() => {
    /* init() fuse */
    console.log('>> SearchBar useEffect()');
    if (searchContext) {
      console.log(searchContext.search('Monster'));
    }
  }, []);
  const handleInputChange = () => {
    console.log('handleInputChange()');
  };
  return (
    <Root>
      <FlexRow>
        <Input
          {...getInputProps(props)}
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
