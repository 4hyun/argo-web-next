import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

const defaultConfig = {
  // {keyCode} : handler<function>
  // ...
};
const THROTTLE_WAIT = 300;

const getCtrlKeyString = eventCtrlKey => (eventCtrlKey ? 'ctrlKey+' : '');
const useKeyBinding = (config = defaultConfig) => {
  /* add throttle to handler */
  /* initialize event listener on document */
  const keydownHandler = e => {
    const pressedKeyString = `${getCtrlKeyString(e.ctrlKey)}${e.code}`;
    // console.log('>>DEBUG keyDownHandler() e.code: ', e.keyCode);
    // console.log('>>DEBUG keyDownHandler() e.ctrlKey: ', e.ctrlKey);
    /*    console.log(
      '>>DEBUG keyDownHandler() pressedKeyString: ',
      pressedKeyString,
    ); */
    try {
      config[pressedKeyString].handler();
    } catch (error) {
      console.warn(
        'useKeyBinding<hook> Error: error during pressedKeyString.handler().\n' +
          error.msg,
      );
    }
  };

  const throttledKeyDownHandler = throttle(keydownHandler, THROTTLE_WAIT);

  /* remove event listener */
  useEffect(() => {
    window.addEventListener('keydown', throttledKeyDownHandler);
    return () => window.removeEventListener('keydown', throttledKeyDownHandler);
  }, []);
};

export default useKeyBinding;
