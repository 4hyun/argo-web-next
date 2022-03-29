import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex w-max font-post text-white font-bold bg-argo-blue-400 rounded-full py-2 px-4 md:px-6 cursor-pointer hover:(filter drop-shadow-lg)`}
`;

const Tag = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Tag;
