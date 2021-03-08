// React
import React, { useState, useRef, useEffect } from "react";

const IndexCode = ({ codeRef }) => {
  // Hooks
  const [numberOfRows, setNumberOfRows] = useState([1]);
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.addEventListener("input", onTextAreaChange);
    return () => {
      textAreaRef.current.removeEventListener("input", onTextAreaChange);
    };
  });

  const onTextAreaChange = () => {
    var textTextArea = textAreaRef.current.innerHTML;
    var numberRows = (textTextArea.match(/<div>/g) || []).length + 1;

    var numberRows = (textTextArea.match(/<div>/g) || []).length + 1;
    if (numberRows >= 19) {
      textAreaRef.current.style.height = "auto";
    } else {
      textAreaRef.current.style.height = "100%";
    }
    var newArrayRows = [];
    for (var i = 1; i < numberRows + 1; i++) {
      newArrayRows.push(i);
    }
    setNumberOfRows(newArrayRows);
  };
  return (
    <div className="containerCode" ref={codeRef}>
      <h2>DARK CODE</h2>
      <div className="containerCode__code">
        <div className="containerCode__code__rows">
          {numberOfRows.map((number, index) => {
            return <div key={index}>{number}</div>;
          })}
        </div>
        <div className="containerCode__code__text">
          <div
            spellCheck="false"
            contentEditable="true"
            className="containerCode__code__text__textarea"
            ref={textAreaRef}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default IndexCode;
