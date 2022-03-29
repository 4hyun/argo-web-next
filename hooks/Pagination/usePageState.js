import { useState } from 'react';

const usePageState = ({
  defaultPage = 1,
  pageProp: externalPageState,
} = {}) => {
  const stateInit = externalPageState != null ? externalPageState : defaultPage;
  console.log('>> DEBUG/usePageState stateInit: ', stateInit);
  const [page, setPageValue] = useState(stateInit);
  return [page, setPageValue];
};

export default usePageState;
