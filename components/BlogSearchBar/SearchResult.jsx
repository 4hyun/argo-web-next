import tw, { styled } from 'twin.macro';
import { lineStyles } from './styles';

const Container = styled.div`
  ${tw`flex flex-col`}
`;

const SearchResultHeader = styled.header`
  ${tw`h-8 w-full bg-transparent`}
`;

const SearchResultFooter = styled.div`
  ${tw`h-8 w-full bg-transparent`}
`;

const List = styled.ul``;

const Item = styled.li`
  ${tw`flex flex-col`}
`;
const Line = styled.span`
  ${tw`flex whitespace-nowrap overflow-hidden`}
  max-width: 100%;

  ${'' /* TODO: decompose Config type to configure Line settings */}
`;

const SearchResult = ({
  result,
  config = {},
  containerCss,
  wrapperCss,
  itemCss,
  paddingTop,
  theme,
  /* keys to print */
  keys = [],
  lineStylesConfig = {},
  ...props
}) => {
  // console.log('>>DEBUG/SearchResult props: ', props);
  // console.log('>>DEBUG/SearchResult result: ', result);
  return (
    <Container
      paddingTop={paddingTop}
      theme={theme}
      css={containerCss}>
      <SearchResultHeader />
      <List
        css={wrapperCss}>
        {result.map((item, i) => (
          <Item
            css={itemCss}
            key={i}>
            {/* <Line >{item.item.title}</Line>
            <Line>{item.item.excerpt}</Line> */}
            {keys.map((key, j) => {
              console.log('>>DEBUG key: ', key);
              console.log('>>DEBUG item.item: ', item.item);
              const text = key
                .split('.')
                .reduce((value, property) => value[property], item.item);
              console.log('>>DEBUG: text: ', text);
              return <Line
                key={`${item.item.id}-${j}`}>{text}</Line>;
            })}
          </Item>
        ))}
      </List>
      <SearchResultFooter />
    </Container>
  );
};

export default SearchResult;
