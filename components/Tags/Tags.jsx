import React from 'react';
// import PropTypes from 'prop-types';
import tw, { styled, css } from 'twin.macro';
import { H1 } from '@/components/Page';

const ContainerDefaultStyles = css`
  ${tw`flex flex-col space-y-4`}
`;
const Container = styled.div`
  ${({ styleDefault }) => !styleDefault && ContainerDefaultStyles}
`;

const headerComponents = {
  h1: H1,
};

const renderHeader = ({ heading, headingAs }) => {
  const Heading = headerComponents[headingAs];
  return <Heading>{heading}</Heading>;
};

const TagListDefaultStyles = css`
  ${tw`flex flex-wrap gap-x-2 gap-y-2`}
`;
const TagList = styled.ul`
  ${({ styleDefault }) => !styleDefault && TagListDefaultStyles}
`;

const Tags = ({
  children,
  containerStyles,
  heading,
  headingAs,
  listStyles,
  handleTagToggle = () => {},
}) => {
  return (
    <Container
      css={containerStyles}
      styleDefault={!!containerStyles}
      onClick={handleTagToggle}
    >
      {heading && renderHeader({ heading, headingAs })}
      <TagList
        css={listStyles}
        styleDefault={!!listStyles}>
        {children}
      </TagList>
    </Container>
  );
};

export default Tags;
