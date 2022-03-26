import React from 'react';
import tw, { styled, css } from 'twin.macro';
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

const ItemBase = styled.li`
  ${tw`flex`}
`;

const FlexCol = styled.div`
  ${tw`flex flex-col`}
`;

const Item = props => {
  const [hovered, setHovered] = React.useState(null);
  return (
    <ItemBase
      className={`${hovered ? 'hovered' : ''}`}
      onMouseOver={e => {
        e.stopPropagation();
        setHovered(true);
      }}
      onMouseOut={e => {
        e.stopPropagation();
        setHovered(false);
      }}
      css={props.itemCss}
    >
      {props.children}
    </ItemBase>
  );
};

const Line = styled.span`
  ${tw`flex whitespace-nowrap overflow-hidden`}
  max-width: 100%;

  ${'' /* TODO: decompose Config type to configure Line settings */}
`;

const FlexColWithIconStyles = css`
  width: 80%;
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
  renderItemIcon,
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
            key={item.item.id}
            itemCss={itemCss}>
            <FlexCol
              css={renderItemIcon && FlexColWithIconStyles}>
              {keys.map((key, j) => {
                const text = key
                  .split('.')
                  .reduce((value, property) => value[property], item.item);
                return (
                  <Line
                    css={lineStyles[key]}
                    key={`${item.item.id}-${j}`}>
                    {text}
                  </Line>
                );
              })}
            </FlexCol>
            {renderItemIcon && renderItemIcon()}
          </Item>
        ))}
      </List>
      <SearchResultFooter />
    </Container>
  );
};

export default SearchResult;
