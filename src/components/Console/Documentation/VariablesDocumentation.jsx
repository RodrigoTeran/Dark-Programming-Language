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
          <li>
            Functions{" "}
            <span style={{ color: "#AAA", marginLeft: "10px" }}>
              /# Just the result they throw #/
            </span>
          </li>
          <li>Lists</li>
        </ul>
        <CodeSimulator>variableString = "hi"</CodeSimulator>
        <CodeSimulator>variableInteger = 42</CodeSimulator>
        <CodeSimulator>anotherVariable = variableInteger</CodeSimulator>
        <CodeSimulator>sum = add(1 2)</CodeSimulator>
        <CodeSimulator>variableList = [1 2 3 4 5]</CodeSimulator>
      </div>
    </div>
  );
};
export default VariablesDocumentation;
