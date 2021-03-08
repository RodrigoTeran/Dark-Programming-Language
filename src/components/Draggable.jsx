// React
import React, { useRef } from "react";

// Hooks
import { useResizable } from "../hooks/useResizable";

const Draggable = ({ consoleRef, codeRef }) => {
  // Hooks
  const draggableRef = useRef(null);
  useResizable({
    draggableRef: draggableRef,
    left: codeRef,
    right: consoleRef,
  });
  return <div ref={draggableRef} className="draggable"></div>;
};
export default Draggable;
