// React
import React from "react";

// Components
import CodeSimulator from "../CodeSimulator";

const VariablesDocumentation = () => {
  return (
    <div className="containerConsole__documentationContainer__section">
      <h3>Variables</h3>
      <div className="containerConsole__documentationContainer__info">
        <div>The DARK variables can only be assigned to:</div>
        <ul>
          <li>Strings</li>
          <li>Integers</li>
          <li>Variables</li>
          <li>Functions</li>
        </ul>
        <CodeSimulator>variableString = "hi"</CodeSimulator>
        <CodeSimulator>variableInteger = 42</CodeSimulator>
        <CodeSimulator>anotherVariable = variableInteger</CodeSimulator>
        <CodeSimulator>sum = add(1 2)</CodeSimulator>
      </div>
    </div>
  );
};
export default VariablesDocumentation;
