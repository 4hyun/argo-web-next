import { useEffect, useContext } from 'react';
import Input from './Input';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  width: fit-content;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`;

const SearchBar = ({ renderSearchResult = () => {}, context }) => {
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
      <Input
        handleInputChange={handleInputChange} />
      {/* TODO: style SearchResult layout to 'fixed', and position align to bottom of SearchBar */}
      {renderSearchResult()}
    </Root>
  );
};

export default SearchBar;
