// Taken from https://medium.com/@jaredloson/custom-javascript-cursor-in-react-d7ffefb2db38
import React from 'react';

const { createContext, useContext, useState, useEffect, useCallback } = React;

const isTouchDevice =
  "ontouchstart" in window
  || navigator.MaxTouchPoints > 0
  || navigator.msMaxTouchPoints > 0;

const CursorContext = createContext({ active: false });

const CursorContextProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false });

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {children}
    </CursorContext.Provider>
  );
}

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = event => {
    const { clientX, clientY } = event;

    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", updatePosition, false);
    document.body.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.body.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
}

const Cursor = () => {
  if (isTouchDevice) {
    return null;
  }

  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none"
      }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          pointerEvents: "none",
          left: clientX,
          top: clientY,
          // TODO: extra check on clientX needed here
          // because mouseleave event not always firing
          // when slowly exiting left side of browser
          opacity: isVisible && clientX > 1 ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? "black" : "white",
          strokeWidth: 1,
          fill: cursor.active ? "rgba(255,255,255,.5)" : "black",
          transition: "transform .2s ease-in-out",
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="8"
        />
      </svg>
    </div>
  );
};

const useCursorHandlers = (options = {}) => {
  if (isTouchDevice) {
    return options;
  }

  const [, setCursor] = useContext(CursorContext);

  const toggleCursor = () => {
    setCursor(({ active }) => ({ active: !active }));
  };

  const onMouseEnter = useCallback(event => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }

    toggleCursor();
  });

  const onMouseLeave = useCallback(event => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }

    toggleCursor();
  });

  return { onMouseEnter, onMouseLeave };
};
