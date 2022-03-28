import { useState } from 'react';

const usePageState = ({ defaultPage = 1 } = {}) => {
  const [page, setPageValue] = useState(defaultPage);
  return [page, setPageValue];
};

export default usePageState;
