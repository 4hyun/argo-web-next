import React from 'react';
// import PropTypes from 'prop-types';
import tw, { styled, css } from 'twin.macro';
import H1 from '@/components/Page/H1';

const ContainerDefaultStyles = css`
  ${tw`flex flex-col space-y-4`}
`;
const Container = styled.div`
  ${({ styleDefault }) => !styleDefault && ContainerDefaultStyles}
`;

const headerComponents = {
  h1: H1,
};

const renderHeading = ({ heading, headingAs, headingStyles }) => {
  const Heading = headerComponents[headingAs];
  if (!Heading) return;
  return <Heading
    cssProp={headingStyles}>{heading}</Heading>;
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
  headingStyles,
  listStyles,
  handleTagToggle = () => {},
}) => {
  return (
    <Container
      css={containerStyles}
      styleDefault={!!containerStyles}
      onClick={handleTagToggle}
    >
      {heading &&
        headingAs &&
        renderHeading({ heading, headingAs, headingStyles })}
      <TagList
        css={listStyles}
        styleDefault={!!listStyles}>
        {children}
      </TagList>
    </Container>
  );
};

export default Tags;
