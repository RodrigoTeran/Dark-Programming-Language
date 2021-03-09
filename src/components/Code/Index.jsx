// React
import React, { useState, useRef } from "react";

const IndexCode = ({ codeRef, textAreaCodeRef }) => {
  // Hooks
  const [numberOfRows, setNumberOfRows] = useState([1]);
  const rowsRef = useRef(null);

  const tranformRows = (e) => {
    // Transform the rows
    rowsRef.current.style.transform = `translateY(-${e.target.scrollTop}px)`;
  };
  const onTextAreaChange = (e) => {
    var textTextArea = e.target.value;
    var numberRows = textTextArea.split("\n").length;
    var newArrayRows = [];
    for (var i = 1; i < numberRows + 1; i++) {
      newArrayRows.push(i);
    }
    tranformRows(e);
    setNumberOfRows(newArrayRows);
  };
  return (
    <div className="containerCode" ref={codeRef}>
      <h2>DARK CODE</h2>
      <div className="containerCode__code">
        <div className="containerCode__code__rows" ref={rowsRef}>
          {numberOfRows.map((number, index) => {
            return <div key={index}>{number}</div>;
          })}
        </div>
        <div className="containerCode__code__text">
          <textarea
            wrap="off"
            onScroll={tranformRows}
            onChange={onTextAreaChange}
            spellCheck="false"
            ref={textAreaCodeRef}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default IndexCode;
