// React
import React from "react";

// Components
import CodeSimulator from "../CodeSimulator";

const ConditionalsDocumentation = () => {
  return (
    <div className="containerConsole__documentationContainer__section">
      <h3>Conditionals</h3>
      <div className="containerConsole__documentationContainer__info">
        There are three types of conditionals:
        <br />
        if...
        <br />
        else if...
        <br />
        else...
        <br />
        <br />
        In DARK this is the syntax of each one of those:
        <br />
        <CodeSimulator>
          /# If statement
          <br />
          <br />
          variable = "hello"
          <br />
          assuming -&#62; variable == "hello" &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("yes")
          <br />
          &#125;
          <br />
          <span style={{ color: "#AAA" }}>/# Expected output: yes</span>
        </CodeSimulator>
        <br />
        Just write the keyword "assuming", the arrow -&#62; and then a
        comparison...
        <br />
        <div>Just as python there is no need to write the parenthesis</div>
        <br />
        <br />
        <div>
          For "else if" and "else" the only thing that changes is the keyword:
        </div>
        <CodeSimulator>
          /# Else if statement
          <br />
          <br />
          variable = "hi"
          <br />
          assuming -&#62; variable == "hello" &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("yes")
          <br />
          &#125;
          <br />
          differentAssumption -&#62; variable == "hi" &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("lol")
          <br />
          &#125;
          <br />
          <span style={{ color: "#AAA" }}>/# Expected output: lol</span>
        </CodeSimulator>
        <br />
        <CodeSimulator>
          /# Else statement
          <br />
          <br />
          variable = "nsdsnlds"
          <br />
          assuming -&#62; variable == "hello" &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("yes")
          <br />
          &#125;
          <br />
          different -&#62; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("no hello")
          <br />
          &#125;
          <br />
          <span style={{ color: "#AAA" }}>/# Expected output: no hello</span>
        </CodeSimulator>
        <br />
        <br />
        Watch out!... you cannot write the next comparison beside the right
        curly brace
        <div>of the previous comparison...</div>
        <br />
        <div>Example that would not work:</div>
        <CodeSimulator>
          /# Else statement
          <br />
          <br />
          variable = "nsdsnlds"
          <br />
          assuming -&#62; variable == "hello" &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("yes")
          <br />
          <span style={{ color: "#F00" }}>&#125; different -&#62; &#123;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("no hello")
          <br />
          &#125;
          <br />
          <span style={{ color: "#AAA" }}>/# Expected output: Error</span>
        </CodeSimulator>
        <br />
        <div>Right way:</div>
        <CodeSimulator>
          /# Else statement
          <br />
          <br />
          variable = "nsdsnlds"
          <br />
          assuming -&#62; variable == "hello" &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("yes")
          <br />
          <span style={{ color: "#0F0" }}>
            &#125; <br /> different -&#62; &#123;
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;speak("no hello")
          <br />
          &#125;
          <br />
          <span style={{ color: "#AAA" }}>/# Expected output: no hello</span>
        </CodeSimulator>
        <br />
        <div>You can stack different comparisons with the logic operators:</div>
        <ul>
          <li>
            noup &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ color: "#AAA" }}>/# &nbsp;&nbsp;Same as: &nbsp;&nbsp;&nbsp;&nbsp;!</span>
          </li>
          <li>
            and &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ color: "#AAA" }}>/# &nbsp;&nbsp;Same as: &nbsp;&nbsp;&nbsp;&nbsp;&&</span>
          </li>
          <li>
            or &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ color: "#AAA" }}>/# &nbsp;&nbsp;Same as: &nbsp;&nbsp;&nbsp;&nbsp;||</span>
          </li>
        </ul>
        <br/>
        <br/>
        <div>
          Here is a very useful example:
        </div>
        <CodeSimulator>
          /# Conditionals
          <br />
          <br />
          /# This function returns a statement 
          <br/>
          /# representing your life stage
          <br />
          task -&#62; stageOfLife(age) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;res = ""
          <br />
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;/# Check if the age is going to be ignored
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;/# if the sum stays in 3 and the age is no 0
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;/# then it was ignored because it was not a number
          <br/>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;checkIfNumber = add(3 age)
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;assuming -&#62; checkIfNumber == 3 and age != 0 &#123;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = "Not a number"
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;differentAssumption -&#62; age &#62;= 100 or age 	&#60; 0 &#123;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = "Impossible age"
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;differentAssumption -&#62; age &#62;= 18 &#123;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = "Adult"
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;differentAssumption -&#62; age &#62;= 12 &#123;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = "Teenager"
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;different -&#62; &#123;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = "Baby :)"
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return =&#62; res
          <br/>
          &#125;
          <br/>
          <br/>
          age = ask("Your age: ")
          <br/>
          speak(stageOfLife(age))
          <br/>
          <span style={{ color: "#AAA" }}>/# Expected output: Your age</span>
        </CodeSimulator>
      </div>
    </div>
  );
};
export default ConditionalsDocumentation;
