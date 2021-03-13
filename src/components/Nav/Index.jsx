// React
import React, { useRef, useEffect } from "react";

// Functions
import { codeToParse } from "../../dark/parse";

const IndexNav = ({
  textAreaCodeRef,
  setCodeOutputError,
  setIsConsoleEditable,
  consoleTextAreaRef,
  defaultTextAreaConsole,
}) => {
  // Event Listener
  useEffect(() => {
    const textarea = consoleTextAreaRef.current;
    textarea.addEventListener("keydown", handleInput);
    return () => {
      textarea.removeEventListener("keydown", handleInput);
    };
  }, []);
  // Handle Input User
  const handleInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsConsoleEditable(false);
      var textarea = consoleTextAreaRef.current;
      var default_ = defaultTextAreaConsole.current;
      var valueText = textarea.value;
      var newSection = valueText.substring(default_.length);
      var arrayFirstInstructions = firstInstructions.current.split("\n");
      var lastOne = arrayFirstInstructions.pop();
      lastOne = lastOne.substring(0, lastOne.length - 2);
      arrayFirstInstructions.push(`${lastOne}${newSection}")`);
      arrayFirstInstructions = arrayFirstInstructions.join("\n").toString();
      firstInstructions.current = arrayFirstInstructions;
      firstInstructions.current =
        firstInstructions.current +
        "\n" +
        `var ${askedVariableName.current} = "${newSection}"`;
      askFunction();
    }
  };

  // Refs
  const startingIndex = useRef(0);
  const firstInstructions = useRef("");
  const askedVariableName = useRef("");

  const askFunction = () => {
    const darkOutput = codeToParse(
      textAreaCodeRef.current.value,
      startingIndex.current,
      firstInstructions.current
    );

    const arrangeValues = () => {
      var textarea_ = consoleTextAreaRef.current;
      textarea_.value = darkOutput[1];
      defaultTextAreaConsole.current = textarea_.value;
    };

    if (darkOutput[0] === "SUCCESS") {
      arrangeValues();
      setCodeOutputError(0);
    } else if (darkOutput[0] === "ERROR") {
      var textarea_ = consoleTextAreaRef.current;
      var darkCodeOutput_ = darkOutput[1];
      if (textarea_.value === "") {
        textarea_.value = darkCodeOutput_;
      } else {
        textarea_.value = textarea_.value + "\n" + darkCodeOutput_;
      }
      defaultTextAreaConsole.current = textarea_.value;
      setCodeOutputError(1);
    } else if (darkOutput[0] === "ASKED") {
      arrangeValues();
      setCodeOutputError(2);
      // return ["ASKED", result.join("\n"), variableName, indexForBreaked, theInstructions];
      setIsConsoleEditable(true);
      startingIndex.current = darkOutput[3] + 1;
      firstInstructions.current = darkOutput[4];
      askedVariableName.current = darkOutput[2];
    }
  };
  return (
    <nav className="navLayout">
      <h1>
        <span>DARK</span> PROGRAMMING LANGUAGE
      </h1>
      <button
        onClick={() => {
          var textarea = consoleTextAreaRef.current;
          textarea.value = "";
          defaultTextAreaConsole.current = "";
          setCodeOutputError(0);
          startingIndex.current = 0;
          firstInstructions.current = "";
          askedVariableName.current = "";
          askFunction();
        }}
      >
        <div>RUN</div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
          </svg>
        </div>
      </button>
    </nav>
  );
};
export default IndexNav;
