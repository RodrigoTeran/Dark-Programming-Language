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
          if you want to name a function as one of our built-in functions, it is
          going to throw an error
        </div>
        <div>For example:</div>
        <CodeSimulator>
          task speak(){" {"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;...stuff
          <br />
          {"}"}
          <br />
          <span style={{ color: "#AAA" }}>
            /# Expected output: SyntaxError: Identifier 'speak' has already been
            declared #/
          </span>
        </CodeSimulator>
        <br />
        <div>...is wrong...</div>
        <br />
        <div>Here are our built-in functions:</div>
        <ul>
          <li>speak()</li>
          <li>add()</li>
          <li>dot()</li>
          <li>concat()</li>
          <li>concatWith()</li>
        </ul>
        <br />
        <br />
        <div>"detailed" explanation of each one:</div>
        <br />
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ speak() ------------------------------------*/}
          <h3>
            <span>speak()</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>
              The speak function is similar to print() in python and
              console.log() in javascript
            </div>
            <div>
              ...know everybody can read the value of your parameters...
            </div>
            <br />
            <div>It only shows the parameters it receives on the console.</div>
            <CodeSimulator>
              speak("hi to David")
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: hi to David #/
              </span>
            </CodeSimulator>
            <br />
            <div>
              When it receives multiple parameters, it doesn't separate them
            </div>
            <CodeSimulator>
              variable = "monday"
              <br />
              speak(3 "bar" variable)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: 3barmonday #/
              </span>
            </CodeSimulator>
            <br />
            <div>If doesn't return any value when assigned to a variable</div>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ add() ------------------------------------*/}
          <h3>
            <span>add()</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>
              This function believes in teamwork ... that's why it adds all its
              parameters
            </div>
            <div>This function is better used with integer values</div>
            <CodeSimulator>
              sum = add(1 2 3)
              <br />
              speak("Sum: " sum)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: Sum: 6 #/
              </span>
            </CodeSimulator>
            <br />
            <div>It returns the sum of the integers</div>
            <div>
              but it still works when it is passed integers values as strings
            </div>
            <CodeSimulator>
              sum = add(1 2 3 "4")
              <br />
              speak("Sum: " sum)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: Sum: 10 #/
              </span>
            </CodeSimulator>
            <br />
            <div>
              it is very clever, so it ignores the parameters that are just
              strings without integer values,
            </div>
            <CodeSimulator>
              result = add("2" 3 "string" add(1 2) [3])
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: 11 #/</span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ dot() ------------------------------------*/}
          <h3>
            <span>dot()</span>
          </h3>
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
              <span style={{ color: "#AAA" }}>/# Expected output: 6 #/</span>
            </CodeSimulator>
            <br />
            <div>
              as the add function, it ignores all the non integer values...{" "}
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
              just as javascript, when it is passed a string with integer
              values, it catches up and also multiplies it with the rest of
              integer parameters
            </div>
            <CodeSimulator>
              result = dot("2" 3 "string" add(1 2))
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: 18 #/</span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ concat() ------------------------------------*/}
          <h3>
            <span>concat()</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <br />
            <div>
              The concat function unifies all its parameters and throw the result, it doesn't matter
              if they are strings, lists, etc.
            </div>
            <CodeSimulator>
              result = concat("2" 3 "string" add(1 2))
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: 23string3 #/
              </span>
            </CodeSimulator>
            <br />
            <div>it doesn't add space between those values</div>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ concatWith() ------------------------------------*/}
          <h3>
            <span>concatWith()</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <br />
            <div>It does the same as concat()</div>
            <div>
              But the last parameter represents the spacing between the values
            </div>
            <CodeSimulator>
              result = concatWith(1 2 3 4 5 " - ")
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: 1 - 2 - 3 - 4 - 5 #/
              </span>
            </CodeSimulator>
            <br />
            <br />
            <div>
              if you only pass one or no parameters, it is going to throw an
              error
            </div>
            <CodeSimulator>
              result = concatWith(1)
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: <br /> TypeError: Reduce of empty array with
                no initial value #/
              </span>
            </CodeSimulator>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuiltInFunctions;
