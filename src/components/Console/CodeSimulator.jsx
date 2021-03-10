// React
import React from "react";

const CodeSimulator = ({ children }) => {
  return (
    <div className="containerConsole__documentationContainer__codeSimulator">
      <div className="containerConsole__documentationContainer__codeSimulator__header">Code sample</div>
      <div className="containerConsole__documentationContainer__codeSimulator__chunk">{children}</div>
    </div>
  );
};
export default CodeSimulator;
