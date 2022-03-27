const inputPropList = ['placeholder'];

export const getInputProps = props => {
  let inputProps = {};
  for (let prop of inputPropList) {
    if (props[prop]) {
      inputProps[prop] = props[prop];
    }
  }
  // console.log('>>getInputProps()/inputProps: ', inputProps);
  return inputProps;
};

export const buildSearchResultBox =
  ({ wrapperCss, itemCss, containerCss }, component, curriedProps) =>
  props => {
    return component({
      wrapperCss,
      itemCss,
      containerCss,
      ...props,
      ...curriedProps,
    });
  };
