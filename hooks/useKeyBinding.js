import { useState, useEffect } from 'react';

const defaultConfig = {};

const useKeyBinding = (ref, config) => {
  /* add throttle to handler */
  /* initialize event listener on document */
  const keydownHandler = e => {
    console.log('>>DEBUG keyDownHandler() e.code: ', e.code);
  };

  /* remove event listener */
  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, []);
};

export default useKeyBinding;
