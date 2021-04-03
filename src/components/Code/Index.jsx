// React
import React, { useState, useRef, useEffect } from "react";

const IndexCode = ({ codeRef, textAreaCodeRef, isConsoleEditable }) => {
  // Hooks
  const [numberOfRows, setNumberOfRows] = useState([1]);
  const rowsRef = useRef(null);

  const tranformRows = (e) => {
    // Transform the rows
    rowsRef.current.style.transform = `translateY(-${e.target.scrollTop}px)`;
  };
  useEffect(() => {
    var value = `/# THIS IS AN EXAMPLE OF HOW A DARK PROGRAM LOOKS LIKE\n/# If you want to learn this language click in the "i" icon on the right\n/# to read the documentation\n\nnumberStars = ask("Number of rows: ")\ncounter = 1\n\nspeak("--Stars--")\nperiod -> counter <= numberStars {\n\ttext = ""\n\tauxCounter = counter\n\tperiod -> auxCounter > 0 {\n\t\ttext = concat(text "* ")\n\t\tauxCounter = discount(auxCounter 1)\n\t}\n\tspeak(text)\n\tcounter = add(counter 1)\n}\n`;
    textAreaCodeRef.current.defaultValue = value;
    onTextAreaChange({
      target: {
        value,
      },
    });
  }, []);
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
  const onTextAreaKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      var start = textAreaCodeRef.current.selectionStart;
      var end = textAreaCodeRef.current.selectionEnd;
      var new_ =
        e.target.value.substring(0, start) +
        "\t" +
        e.target.value.substring(end);
      textAreaCodeRef.current.value = new_;

      textAreaCodeRef.current.selectionEnd = start + 1;
    }
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
            onKeyDown={onTextAreaKeyDown}
            onScroll={tranformRows}
            onChange={onTextAreaChange}
            spellCheck="false"
            ref={textAreaCodeRef}
            readOnly={isConsoleEditable}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default IndexCode;
