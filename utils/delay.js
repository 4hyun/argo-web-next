const delay = (fn = () => {}, time = 400) => {
  return () => setTimeout(fn, time);
};

const delayed = (fn = () => {}, time = 400) => {
  delay(fn, time)();
};
export { delay, delayed };
