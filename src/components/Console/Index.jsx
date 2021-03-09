// React
import React from "react";

const IndexConsole = ({ consoleRef, codeOutput }) => {
  return (
    <div ref={consoleRef} className="containerConsole">
      <h2>CONSOLE</h2>
      <textarea readOnly value={codeOutput}></textarea>
    </div>
  );
};
export default IndexConsole;
