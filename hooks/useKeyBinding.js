import { useState, useEffect } from 'react';

const defaultConfig = {};

const useKeyBinding = (ref, config) => {
  /* initialize event listener on document */
  const keydownHandler = e => {
    console.log('>>DEBUG keyDownHandler() e: ', e);
  };

  /* remove event listener */
  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, []);
};

export default useKeyBinding;
