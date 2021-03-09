// React
import React, { useRef, useState } from "react";

// Components
import IndexNav from "./components/Nav/Index";
import IndexCode from "./components/Code/Index";
import IndexConsole from "./components/Console/Index";
import Draggable from "./components/Draggable";

const App = () => {
  // Hooks
  const codeRef = useRef(null);
  const textAreaCodeRef = useRef(null);
  const consoleRef = useRef(null);

  // Output
  const [codeOutput, setCodeOutput] = useState("");
  return (
    <>
      <IndexNav
        setCodeOutput={setCodeOutput}
        textAreaCodeRef={textAreaCodeRef}
      ></IndexNav>
      <div className="layout">
        <IndexCode
          codeRef={codeRef}
          textAreaCodeRef={textAreaCodeRef}
        ></IndexCode>
        <Draggable consoleRef={consoleRef} codeRef={codeRef}></Draggable>
        <IndexConsole
          codeOutput={codeOutput}
          consoleRef={consoleRef}
        ></IndexConsole>
      </div>
    </>
  );
};

export default App;
