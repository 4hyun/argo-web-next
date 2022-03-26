import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { lineStyles } from './styles';
import { Close } from '@/components/Icons';
import { KeyComboIcon, keyComboKeyString } from '@/components/KeyCombo';
import { KeyComboButtonStyles } from './styles';

const Container = styled.div`
  ${tw`flex flex-col`}
`;

const SearchResultHeader = styled.header`
  ${tw`flex items-end w-full bg-transparent pt-2 pb-4`}
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

// const CloseButton = styled(Close)`
//   width: 20px;
//   height: auto;
//   color: #f2f2f2;
//   ${tw`flex ml-auto`}
// `;

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
      <SearchResultHeader>
        <KeyComboIcon
          css={KeyComboButtonStyles}
          keyString={keyComboKeyString['esc']}
        />
      </SearchResultHeader>
      <List
        css={wrapperCss}>
        {result.map(({ item }, i) => (
          <a
            href={`/blog/post/${item.slug}`}
            key={item.id}>
            <Item
              itemCss={itemCss}>
              <FlexCol
                css={renderItemIcon && FlexColWithIconStyles}>
                {keys.map((key, j) => {
                  const text = key
                    .split('.')
                    .reduce((value, property) => value[property], item);
                  return (
                    <Line
                      css={lineStyles[key]}
                      key={`${item.id}-${j}`}>
                      {text}
                    </Line>
                  );
                })}
              </FlexCol>
              {renderItemIcon && renderItemIcon()}
            </Item>
          </a>
        ))}
      </List>
      <SearchResultFooter />
    </Container>
  );
};

export default SearchResult;
