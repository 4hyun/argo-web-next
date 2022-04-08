import { createContext, useState } from 'react';

const init = {
  selectedItem: null,
};

export const ContentsMenuContext = createContext(init);

export const ContentsMenuProvider = ({ children, value }) => {
  const [state, setState] = useState(init);
  const setItemSelected = id => {
    setState(prevState => {
      return {
        ...prevState,
        selectedItem: id,
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
