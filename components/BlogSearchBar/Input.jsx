import tw from 'twin.macro';
import { useRef, useEffect } from 'react';

const Root = tw.input``;

const Input = ({
  handleInputChange = () => {},
  onFocus = () => {},
  setParentFocusOut = () => {},
  placeholder = '',
  ...props
}) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    const handleClickAway = e => {
      if (e.target === inputRef.current) return;
      setParentFocusOut();
    };
    window.addEventListener('click', handleClickAway, true);
    return window.removeEventListener('click', handleClickAway);
  }, []);

  return (
    <Root
      ref={inputRef}
      onChange={handleInputChange}
      onFocus={onFocus}
      placeholder={placeholder}
      {...props}
    ></Root>
  );
};

export default Input;
