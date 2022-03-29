import { useState } from 'react';
// import useLogger from '@/hooks/useLogger';

const usePageState = ({
  defaultPage = 1,
  pageProp: externalPageState,
} = {}) => {
  // const log = useLogger('>>DEBUG usePageState()');
  const stateInit = externalPageState != null ? externalPageState : defaultPage;
  // log('stateInit', stateInit);
  const [page, setPageValue] = useState(stateInit);
  return [page, setPageValue];
};

export default usePageState;
