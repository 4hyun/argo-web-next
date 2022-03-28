import { useState } from 'react';

const usePageState = ({ defaultPage }) => {
  const [page, setPageValue] = useState(defaultPage);
  return [page, setPageValue];
};

export default usePageState;
