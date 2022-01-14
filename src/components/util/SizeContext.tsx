import React, { useContext, useEffect, useState } from 'react';

function isSmallScreen(width: number) {
  return width < 600;
}

interface SizeContextData {
  smallScreen: boolean;
}

const SizeContextObject = React.createContext({ smallScreen: isSmallScreen(window.innerWidth) });

export const SizeContext: React.FC = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sizeState, setSizeState] = useState({ smallScreen: isSmallScreen(windowWidth) });
  useEffect(() => {
    if (sizeState.smallScreen !== isSmallScreen(windowWidth)) {
      setSizeState({ smallScreen: isSmallScreen(windowWidth) });
    }
  }, [windowWidth, sizeState]);

  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [setWindowWidth]);

  return <SizeContextObject.Provider value={sizeState}>{children}</SizeContextObject.Provider>;
};

export function useSizeContext(): SizeContextData {
  return useContext(SizeContextObject);
}
