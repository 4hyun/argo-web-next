const useLogger = tag => {
  const logger = tag => (message, value) =>
    console.log(`${tag}/${message} : `, value);

  logger.tag = tag;
  return logger;
};

export default useLogger;
