// React
import React from "react";

const IndexConsole = ({ consoleRef, codeOutput, codeOutputError }) => {
  return (
    <div ref={consoleRef} className="containerConsole">
      <h2>CONSOLE</h2>
      <textarea
        style={{
          color: codeOutputError ? "#F00" : "#FFF",
        }}
        readOnly
        value={codeOutput}
      ></textarea>
    </div>
  );
};
export default IndexConsole;
