import useWindowStore from "#store/window";
import React from "react";
import { useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    return (
      <section
        id={windowsKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowsWrapper(${
    Component.displayName || Component.name || "Component"
  })`;
  return <div>WindowWrapper</div>;
};

export default WindowWrapper;
