import { useState } from 'react';

const useAccordion = (initState = true) => {
  const [state, setState] = useState(initState);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default useAccordion;
