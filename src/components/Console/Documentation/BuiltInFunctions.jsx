// React
import React from "react";

// Components
import CodeSimulator from "../CodeSimulator";

const BuiltInFunctions = () => {
  return (
    <div className="containerConsole__documentationContainer__section">
      <h3>Built-in Functions</h3>
      <div className="containerConsole__documentationContainer__info">
        <div>DARK has already some useful built-in functions</div>
        <div>So you cannot overwrite those functions</div>
        <br />
        <div>
          So if you want to name a function as one of our built-in functions, it
          is going to throw an error
        </div>
        <div>For example:</div>
        <CodeSimulator>
          task speak(){" {"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;...stuff
          <br />
          {"}"}
          <br />
          <span style={{ color: "#AAA" }}>/# Expected output: Error</span>
        </CodeSimulator>
        <br />
        <div>...is wrong...</div>
        <br />
        <div>Here are our built-in functions:</div>
        <ul>
          <li>speak()</li>
          <li>speakWith()</li>
          <li>add()</li>
          <li>dot()</li>
        </ul>
        <br />
        <br />
        <div>"detailed" explanation of each one:</div>
        <br/>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ speak() ------------------------------------*/}
          <h3><span>speak()</span></h3>
          <div className="containerConsole__documentationContainer__info">
            <div>
              The speak function is similar when you hit your little toe...
              everybody can hear you scream...
            </div>
            <div>in this case, everybody can read your statement</div>
            <br />
            <div>
              speak is equivalent to print() in python and console.log() in
              javascript
            </div>
            <br />
            <div>It only shows in the console the parameters it receives.</div>
            <CodeSimulator>
              speak("hi to David")
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: hi to David
              </span>
            </CodeSimulator>
            <br />
            <div>
              When it receives multiple parameters, it separates them with a
              comma
            </div>
            <CodeSimulator>
              variable = "monday"
              <br />
              speak(3 "bar" variable)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: <br /> 3, bar, monday #/
              </span>
            </CodeSimulator>
            <br />
            <div>
              If you assign this funcion to a variable it is going to return
              nothing
            </div>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ speakWith() ------------------------------------*/}
          <h3><span>speakWith()</span></h3>
          <div className="containerConsole__documentationContainer__info">
            <div>
              The speakWith function is similar to speak, but now you can
              specify the spacing between the parameters
            </div>
            <div>
              The last parameter is the spacing that they are going to follow
            </div>
            <CodeSimulator>
              speakWith("hi" "to" "David" " - ")
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: hi - to - David
              </span>
            </CodeSimulator>
            <br />
            <div>
              If you only pass one parameter it is not going to speak... this
              function needs more food...
            </div>
            <br />
            <div>
              If you assign this funcion to a variable it is going to return
              nothing
            </div>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ add() ------------------------------------*/}
          <h3><span>add()</span></h3>
          <div className="containerConsole__documentationContainer__info">
            <div>
              This function believes in teamwork ... that's why it unifies all
              its parameters
            </div>
            <div>This function is better used with integer values</div>
            <CodeSimulator>
              sum = add(1 2 3)
              <br />
              speakWith("Sum:" sum " ")
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: Sum: 6</span>
            </CodeSimulator>
            <br />
            <div>It returns the sum of the integers</div>
            <div>
              but it still works when it is passed strings as parameters
            </div>
            <CodeSimulator>
              sum = add(1 2 3 "4")
              <br />
              speakWith("Sum:" sum " ")
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: Sum: 64</span>
            </CodeSimulator>
            <br />
            <div>but once a string is added in the parameters list,</div>
            <div>
              the rest of the parameters will be taken as strings as well...
            </div>
            <CodeSimulator>
              sum = add(1 2 3 "4" 2 1)
              <br />
              speakWith("Sum:" sum " ")
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: Sum: 6421
              </span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ dot() ------------------------------------*/}
          <h3><span>dot()</span></h3>
          <div className="containerConsole__documentationContainer__info">
            <br />
            <div>
              This function is old school... it multiplies all its integers
              parameters and return the result
            </div>
            <div>
              This function only multiplies integer values but you can pass
              strings values as well
            </div>
            <CodeSimulator>
              result = dot(1 2 3 "my string")
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: 6</span>
            </CodeSimulator>
            <br />
            <div>
              It is very clever, it ignores all the non Integers values...{" "}
            </div>
            <br />
            <div>
              This can be useful to skip evaluating if your variables are
              integers or strings...
            </div>
            <br />
            <div>...you dont have time for that...</div>
            <br />
            <div>But...</div>
            <div>
              just as Javascript, when it is passed a string with integer
              values, it catches up and also multiplies it with the rest of
              integer parameters
            </div>
            <CodeSimulator>
              result = dot("2" 3 "string" add(1 2))
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: 18</span>
            </CodeSimulator>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuiltInFunctions;
