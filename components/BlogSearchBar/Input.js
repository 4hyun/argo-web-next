const Input = ({
  handleInputChange = () => {},
  placeholder = 'input text',
}) => {
  return <input
    onChange={handleInputChange}
    placeholder={placeholder}></input>;
};

export default Input;
