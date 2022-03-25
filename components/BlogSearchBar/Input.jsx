import tw from 'twin.macro';
import { useRef, useEffect } from 'react';

const Root = tw.input``;

const Input = ({
  handleInputChange = () => {},
  placeholder = '',
  ...props
}) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Root
      ref={inputRef}
      onChange={handleInputChange}
      placeholder={placeholder}
      {...props}
    ></Root>
  );
};

export default Input;
