import tw, { styled } from 'twin.macro';

const List = styled.ul`
  ${({ paddingTop = '100px' }) => `padding-top: ${paddingTop};`}
  ${tw`flex flex-col`}
`;

const SearchResult = ({ result, config = {}, ...props }) => {
  // console.log('>>DEBUG/SearchResult props: ', props);
  // console.log('>>DEBUG/SearchResult result: ', result);
  return (
    <List
      css={props.css}>
      {result.map((item, i) => (
        <li
          key={i}>{item.item.title}</li>
      ))}
    </List>
  );
};

export default SearchResult;
