import React from 'react';
import tw, { styled } from 'twin.macro';

const FullScreenLayout = styled.div`
  ${tw`w-screen h-screen bg-argo-blue-50 flex justify-center items-center`}
`;

const FullScreen = ({ children }) => {
  return <FullScreenLayout>{children}</FullScreenLayout>;
};

export default FullScreen;
