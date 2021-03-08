// React
import React, { useRef } from "react";

// Components
import IndexNav from "./components/Nav/Index";
import IndexCode from "./components/Code/Index";
import IndexConsole from "./components/Console/Index";
import Draggable from "./components/Draggable";

const App = () => {
  // Hooks
  const codeRef = useRef(null);
  const consoleRef = useRef(null);
  return (
    <>
      <IndexNav></IndexNav>
      <div className="layout">
        <IndexCode codeRef={codeRef}></IndexCode>
        <Draggable consoleRef={consoleRef} codeRef={codeRef}></Draggable>
        <IndexConsole consoleRef={consoleRef}></IndexConsole>
      </div>
    </>
  );
};

export default App;
