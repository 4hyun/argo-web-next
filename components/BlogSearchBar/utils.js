const inputPropList = ['placeholder'];

export const getInputProps = props => {
  let inputProps = {};
  for (let prop of inputPropList) {
    if (props[prop]) {
      inputProps[prop] = props[prop];
    }
  }
  console.log('>>getInputProps()/inputProps: ', inputProps);
  return inputProps;
};

const searchResultWrapperProps = ['css'];
export const getSearchResultWrapperProps = props => {
  let _props = {};
  for (const k of searchResultWrapperProps) {
    _props[k] = props[k];
  }
  console.log('_props:', _props);
  return _props;
};

export const buildSearchResultBox = (wrapperCss, searchComponent) => props => {
  return searchComponent({ wrapperCss, ...props });
};
