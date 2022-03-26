import tw, { styled } from 'twin.macro';
import { getSearchResultWrapperProps } from '@/components/BlogSearchBar/utils';

const List = styled.ul`
  ${({ paddingTop = '100px' }) => `padding-top: ${paddingTop};`}
  ${tw`flex flex-col`}
`;

const SearchResult = ({ result, config = {}, wrapperCss, ...props }) => {
  // console.log('>>DEBUG/SearchResult props: ', props);
  // console.log('>>DEBUG/SearchResult result: ', result);
  return (
    <List
      css={wrapperCss}>
      {result.map((item, i) => (
        <li
          key={i}>{item.item.title}</li>
      ))}
    </List>
  );
};

export default SearchResult;
