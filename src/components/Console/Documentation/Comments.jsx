// React
import React from "react";

// Components
import CodeSimulator from "../CodeSimulator";

const CommentsDocumentation = () => {
  return (
    <div className="containerConsole__documentationContainer__section">
      <h3>Comments</h3>
      <div className="containerConsole__documentationContainer__info">
        There is no programming language without comments, so here they are:
        <CodeSimulator>
          /# Function that always adds 2
          <br />
          <br />
          task -&#62; add2Always(number) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;res = add(2 number)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return =&#62; res
          <br />
          &#125;
          <br />
          <br />
          number = ask("Number: ")
          <br />
          speak(add2Always(number))
          <br />
          <span style={{ color: "#AAA" }}>/# Expected output: Number</span>
        </CodeSimulator>
        <br />
        Just write /# at the beginning of the comment and it will be ignored
        <div>by the parser</div>
        <br />
        <div>
          This syntax is inspired by python and javascript comments... // and #
        </div>
        <br />
        <br />
        <div>
          For now, avoid writing rare symbols at the beginning and end of the
          comment body :)
        </div>
      </div>
    </div>
  );
};
export default CommentsDocumentation;
