// React
import React, { useLayoutEffect, useRef } from "react";

// Components
import IntroductionDocumentation from "./Documentation/IntroductionDocumentation";
import VariablesDocumentation from "./Documentation/VariablesDocumentation";
import BuiltInFunctions from "./Documentation/BuiltInFunctions";
import DataTypesDocumentation from "./Documentation/DataTypes";
import ListsMethods from "./Documentation/ListsMethods";

const IndexConsole = ({
  consoleRef,
  codeOutputError,
  setCodeOutputError,
  setIsDocumentation,
  isDocumentation,
  documentationScrollRef,

  isConsoleEditable,
  setIsConsoleEditable,
  consoleTextAreaRef,
  defaultTextAreaConsole,
}) => {
  const documentationRef = useRef(null);
  useLayoutEffect(() => {
    const element = documentationRef.current;
    if (element) {
      element.scrollTop = documentationScrollRef.current;
    }
  }, [isDocumentation]);
  const handleScroll = (e) => {
    documentationScrollRef.current = e.target.scrollTop;
  };

  const checkOnTextAreaKeyDow = () => {
    var textarea = consoleTextAreaRef.current;
    var default_ = defaultTextAreaConsole.current;
    var valueText = textarea.value;

    var section = valueText.substring(0, default_.length);
    if (section !== default_) {
      textarea.value = defaultTextAreaConsole.current;
    }
  };

  const checkNoQuotes = (e) => {
    if(e.key === "'" || e.key === '"') {
      e.preventDefault();
    }
  };

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
        <div
          className="containerConsole__documentationContainer"
          onScroll={handleScroll}
          ref={documentationRef}
        >
          <IntroductionDocumentation></IntroductionDocumentation>
          <VariablesDocumentation></VariablesDocumentation>
          <DataTypesDocumentation></DataTypesDocumentation>
          <ListsMethods></ListsMethods>
          <BuiltInFunctions></BuiltInFunctions>
        </div>
      ) : (
        <textarea
          ref={consoleTextAreaRef}
          style={{
            color:
              codeOutputError === 0
                ? "#FFF"
                : codeOutputError === 1
                ? "#F00"
                : "#0F0",
          }}
          readOnly={!isConsoleEditable}
          onChange={checkOnTextAreaKeyDow}
          onKeyDown={checkNoQuotes}
          spellCheck="false"
        ></textarea>
      )}
      {isConsoleEditable && !isDocumentation ? (
        <div
          className={`containerConsole__pause`}
          onClick={() => {
            setIsConsoleEditable(false);
            setCodeOutputError(0);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
          </svg>
        </div>
      ) : null}
    </div>
  );
};
export default IndexConsole;
