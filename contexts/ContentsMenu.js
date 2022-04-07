import { createContext, useState } from 'react';

const init = {};

export const ContentsMenuContext = createContext(init);

export const ContentsMenuProvider = ({ children, value }) => {
  const [state, setState] = useState();
  const setItemSelected = id => {
    setState(prevState => {
      return {
        ...prevState,
        selected: id,
      };
    });
  };
  const _value = value || {
    contentsMenuState: state,
    setItemSelected,
  };

  return (
    <ContentsMenuContext.Provider
      value={_value}>
      {children}
    </ContentsMenuContext.Provider>
  );
};
