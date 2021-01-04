const delay = (fn = () => {}, time = 400) => {
  return () => setTimeout(fn, time);
};
export { delay };
