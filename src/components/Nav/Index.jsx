// React
import React from "react";

// Functions
import { codeToParse } from "../../dark/parse";

const IndexNav = ({ textAreaCodeRef, setCodeOutput, setCodeOutputError }) => {
  return (
    <nav className="navLayout">
      <h1>
        <span>DARK</span> PROGRAMMING LANGUAGE
      </h1>
      <button
        onClick={() => {
          const darkOutput = codeToParse(textAreaCodeRef.current.value);
          if (darkOutput[0] === "SUCCESS") {
            setCodeOutput(darkOutput[1]);
            setCodeOutputError(false);
          } else {
            setCodeOutput(darkOutput[1]);
            setCodeOutputError(true);
          }
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
