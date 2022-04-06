import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ContentsMenuPortal = ({ children }) => {
  const [shouldRender, setShouldRender] = useState();
  const menuRootRef = useRef();

  useEffect(() => {
    menuRootRef.current = document.getElementById('tyk-handbook-menu-root');
    setShouldRender(true);
  }, []);

  if (shouldRender) return createPortal(children, menuRootRef.current);
  return null;
};

export default ContentsMenuPortal;
