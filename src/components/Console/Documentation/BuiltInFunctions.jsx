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
          task -&#62; speak(){" {"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;...stuff
          <br />
          {"}"}
          <br />
          <span style={{ color: "#AAA" }}>
            /# Expected output: SyntaxError: Identifier 'speak' has already been
            declared
          </span>
        </CodeSimulator>
        <br />
        <div>...is wrong...</div>
        <br />
        <div>Here are our built-in functions:</div>
        <ul>
          <li>speak()</li>
          <li>add()</li>
          <li>discount()</li>
          <li>dot()</li>
          <li>over()</li>
          <li>concat()</li>
          <li>concatWith()</li>
          <li>ask()</li>
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
                /# Expected output: hi to David
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
                /# Expected output: 3barmonday
              </span>
            </CodeSimulator>
            <br />
            <div>This function returns what it printed in console</div>
            <CodeSimulator>
              whatWhasPrinted = speak("Hi" " welcome")
              <br />
              speak(whatWhasPrinted)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: <br /> /# Hi welcome <br /> /# Hi welcome
              </span>
            </CodeSimulator>
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
            <div>This function is better used with numbers</div>
            <CodeSimulator>
              sum = add(1 2 3)
              <br />
              speak("Sum: " sum)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: Sum: 6</span>
            </CodeSimulator>
            <br />
            <div>It returns the sum of the numbers</div>
            <div>
              it still works when it is passed numbers values as strings
            </div>
            <CodeSimulator>
              sum = add(1 2 3 "4")
              <br />
              speak("Sum: " sum)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: Sum: 10</span>
            </CodeSimulator>
            <br />
            <div>
              it is very clever, so it ignores the parameters that are just
              strings without number values,
            </div>
            <CodeSimulator>
              result = add("2" 3 "string" add(1 2) [3])
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: 11</span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ discount() ------------------------------------*/}
          <h3>
            <span>discount()</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>
              This function discounts each value from the one before
            </div>
            <div>This function is better used with numbers as well...</div>
            <CodeSimulator>
              res = discount(10 5 2)
              <br />
              speak("Result: " res)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: Result: 3</span>
            </CodeSimulator>
            <br />
            <div>
              also, it still works when it is passed numbers values as strings and also it ignores the non number values
            </div>
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
              This function is old school... it multiplies all its number
              parameters and return the result
            </div>
            <div>
              This function only multiplies number values but you can pass
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
              as the add function, it ignores all the non number values...{" "}
            </div>
            <br />
            <div>
              This can be useful to skip evaluating if your variables are
              numbers or strings...
            </div>
            <br />
            <div>...you dont have time for that...</div>
            <br />
            <div>But...</div>
            <div>
              just as javascript, when it is passed a string with number a
              value, it catches up and also multiplies it with the rest of
              number parameters
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
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ over() ------------------------------------*/}
          <h3>
            <span>over()</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>
              This function divides each value from the one before
            </div>
            <CodeSimulator>
              res = over(15.5 0.5)
              <br />
              speak("Result: " res)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: Result: 31</span>
            </CodeSimulator>
            <br />
            <div>
              also, it is as clever as the other ones...
            </div>
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
              The concat function unifies all its parameters and throw the
              result, it doesn't matter if they are strings, lists, etc.
            </div>
            <CodeSimulator>
              result = concat("2" 3 "string" add(1 2))
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: 23string3
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
                /# Expected output: 1 - 2 - 3 - 4 - 5
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
                /# Expected output: <br /> /# TypeError: Reduce of empty array
                with no initial value
              </span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ ask() ------------------------------------*/}
          <h3>
            <span>ask()</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>The ask function is like an input() in python</div>
            <div>...it allows the user to pass data from the console...</div>
            <br />
            <div>
              When this function is compiled it stops the compilation process,
              and it waits for
            </div>
            <div>
              the user to type the data... when the user hits ENTER then it
              starts to complie again
            </div>
            <br />
            <div>
              When the console is color green you can type data, and you cannot
              modify the code.
            </div>
            <br />
            <br />
            <div>
              Is required that the ask function is assigned to a variable to
              keep reference of what the user had typed
            </div>
            <CodeSimulator>
              result = ask("Name: ")
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: Name:</span>
            </CodeSimulator>
            <br />
            <div>
              In the console it will appear a stop button, to stop the code from
              running
            </div>
            <br />
            <br />
            <div>
              You can only pass 1 parameter to the ask function, and it only can
              be a string, number or a variable.
            </div>
            <br />
            <div>
              If you need to pass a list, boolean, etc. Then you will need to
              pass a variable with that value.
            </div>
            <CodeSimulator>
              name = "Name: "
              <br />
              name_answer = ask(name)
              <br />
              speak(name_answer ", good afternoon")
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: Name:</span>
            </CodeSimulator>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuiltInFunctions;
