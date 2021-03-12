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
          <li>Numbers</li>
          <li>Other variables</li>
          <li>
            Functions{" "}
            <span style={{ color: "#AAA", marginLeft: "10px" }}>
              /# Just the result they throw #/
            </span>
          </li>
          <li>Lists</li>
          <li>Boolean</li>
        </ul>
        <CodeSimulator>variableString = "hi"</CodeSimulator>
        <CodeSimulator>variableNumber = -4.2</CodeSimulator>
        <CodeSimulator>anotherVariable = variableNumber</CodeSimulator>
        <CodeSimulator>sum = add(1 2)</CodeSimulator>
        <CodeSimulator>variableList = [1 2 3 4 5]</CodeSimulator>
        <CodeSimulator>variableBoolean = WIN</CodeSimulator>
      </div>
    </div>
  );
};
export default VariablesDocumentation;
