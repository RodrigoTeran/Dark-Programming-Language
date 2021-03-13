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

  const documentationScrollRef = useRef(0);

  // Output
  const [codeOutputError, setCodeOutputError] = useState(0);

  // Documentation
  const [isDocumentation, setIsDocumentation] = useState(false);

  // Console
  const [isConsoleEditable, setIsConsoleEditable] = useState(false);
  const consoleTextAreaRef = useRef(null);
  const defaultTextAreaConsole = useRef("");
  return (
    <>
      <IndexNav
        setCodeOutputError={setCodeOutputError}
        textAreaCodeRef={textAreaCodeRef}
        setIsConsoleEditable={setIsConsoleEditable}
        consoleTextAreaRef={consoleTextAreaRef}
        defaultTextAreaConsole={defaultTextAreaConsole}
        isDocumentation={isDocumentation}
      ></IndexNav>
      <div className="layout">
        <IndexCode
          codeRef={codeRef}
          textAreaCodeRef={textAreaCodeRef}
          isConsoleEditable={isConsoleEditable}
        ></IndexCode>
        <Draggable consoleRef={consoleRef} codeRef={codeRef}></Draggable>
        <IndexConsole
          codeOutputError={codeOutputError}
          consoleRef={consoleRef}
          setIsDocumentation={setIsDocumentation}
          isDocumentation={isDocumentation}
          documentationScrollRef={documentationScrollRef}
          isConsoleEditable={isConsoleEditable}
          setIsConsoleEditable={setIsConsoleEditable}
          consoleTextAreaRef={consoleTextAreaRef}
          defaultTextAreaConsole={defaultTextAreaConsole}
          setCodeOutputError={setCodeOutputError}
        ></IndexConsole>
      </div>
    </>
  );
};

export default App;
