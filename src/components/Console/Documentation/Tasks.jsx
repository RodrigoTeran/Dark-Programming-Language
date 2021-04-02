// React
import React from "react";

// Components
import CodeSimulator from "../CodeSimulator";

const Tasks = () => {
  return (
    <div className="containerConsole__documentationContainer__section">
      <h3>Make Functions</h3>
      <div className="containerConsole__documentationContainer__info">
        If you want to create your own functions this is the syntax
        <CodeSimulator>
          task -&#62; nameOfYourFunction() &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("hi")
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return =&#62; WIN
          <br />
          &#125;
          <br />
          nameOfYourFunction()
          <br />
          <span style={{ color: "#AAA" }}>/# Expected output: Hi </span>
        </CodeSimulator>
        <br/>
        It is necessary to write "task -&#62;" before your function name
        <div>
          and then in the parenthesis you can include your parameters... without commas
        </div>
        <br/>
        <div>
          If yo dont specify the "return =&#62;" then the function doesn't return anything
        </div>
        <div>
          and if you only leave the expression like "return =&#62;" then it returns FAIL
        </div>
        <br/>
        <div>
          An example of how to build functions:
        </div>
        <CodeSimulator>
          list = [1 2 3 4 5]
          <br />
          <br />
          task -&#62; getListItem(item) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return =&#62; list[item]
          <br />
          &#125;
          <br />
          <br />
          speak("What index of this list: [" list "]")
          <br />
          <br />
          item = ask("you want to get: ")
          <br />
          itemResult = getListItem(item)
          <br />
          <br />
          speak()
          <br />
          speak("This is your item: " itemResult)
          <br />
          <span style={{ color: "#AAA" }}>/# Expected output: <br /> What index of this list: [1,2,3,4,5] <br />
          you want to get </span>
        </CodeSimulator>
      </div>
    </div>
  );
};
export default Tasks;
