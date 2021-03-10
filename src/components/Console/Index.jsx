// React
import React from "react";

// Components
import IntroductionDocumentation from "./Documentation/IntroductionDocumentation";
import VariablesDocumentation from "./Documentation/VariablesDocumentation";
import BuiltInFunctions from "./Documentation/BuiltInFunctions";

const IndexConsole = ({
  consoleRef,
  codeOutput,
  codeOutputError,
  setIsDocumentation,
  isDocumentation,
}) => {
  return (
    <div ref={consoleRef} className="containerConsole">
      <div className="containerConsole__header">
        <h2>{isDocumentation ? "DOCUMENTATION" : "CONSOLE"}</h2>
        <button
          onClick={() => {
            setIsDocumentation(!isDocumentation);
          }}
        >
          {isDocumentation ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
              <path d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" />
            </svg>
          )}
        </button>
      </div>
      {isDocumentation ? (
        <div className="containerConsole__documentationContainer">
          <IntroductionDocumentation></IntroductionDocumentation>
          <VariablesDocumentation></VariablesDocumentation>
          <BuiltInFunctions></BuiltInFunctions>
        </div>
      ) : (
        <textarea
          style={{
            color: codeOutputError ? "#F00" : "#FFF",
          }}
          readOnly
          value={codeOutput}
        ></textarea>
      )}
    </div>
  );
};
export default IndexConsole;
