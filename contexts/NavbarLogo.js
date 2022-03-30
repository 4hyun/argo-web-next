import { createContext, useState, useContext } from 'react';

const NavbarLogoContext = createContext({
  typeIndex: 0,
});

const NavbarLogoProvider = ({ children }) => {
  const [state, setState] = useState({
    typeIndex: 0,
  });
  const updateLogoState = ({ typeIndex }) => {
    setState(prevState => ({ ...prevState, typeIndex }));
  };
  return (
    <NavbarLogoContext.Provider
      value={{ ...state, updateLogoState }}>
      {children}
    </NavbarLogoContext.Provider>
  );
};

const useNavbarLogo = () => useContext(NavbarLogoContext);

export { NavbarLogoProvider, useNavbarLogo };
