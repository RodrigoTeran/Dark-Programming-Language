// React
import React from "react";

// Components
import CodeSimulator from "../CodeSimulator";

const LoopsDocumentation = () => {
  return (
    <div className="containerConsole__documentationContainer__section">
      <h3>Loops</h3>
      <div className="containerConsole__documentationContainer__info">
        There are two types of loops in DARK:
        <ul>
          <li>
            period &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ color: "#AAA" }}>
              /# &nbsp;&nbsp;Same as: &nbsp;&nbsp;&nbsp;&nbsp;while
            </span>
          </li>
          <li>
            from... to... &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ color: "#AAA" }}>
              /# &nbsp;&nbsp;Same as: &nbsp;&nbsp;&nbsp;&nbsp;for{" "}
            </span>
          </li>
        </ul>
        <br />
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ Period ------------------------------------*/}
          <h3>
            <span>period</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>Period loop is like the while loop</div>
            <div>
              It needs a comparison, and when that comparison is true, it runs
              again.
            </div>
            <div>Example:</div>
            <CodeSimulator>
              /# Stars with Loops
              <br />
              <br/>
              numberStars = ask("Number of rows: ")
              <br/>
              counter = 1
              <br/>
              <br/>
              speak("--Stars--")
              <br/>
              period -&#62; counter &#60;= numberStars &#123;
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;text = ""
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;auxCounter = counter
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;period -&#62; auxCounter &#62; 0 &#123;
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text = concat(text "* ")
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;auxCounter = discount(auxCounter 1)
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;speak(text)
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;counter = add(counter 1)
              <br/>
              &#125;
              <br/>
              <span style={{ color: "#AAA" }}>
                /# Expected output: Number of rows
              </span>
            </CodeSimulator>
            <br/>
            <div>
              it has the same structure as the conditionals "assuming" and "differentAssumption"...
            </div>
            <div>
              just the only difference is the syntax in the keyword "period"
            </div>
            <br/>
            <div>
              Another example:
            </div>
            <CodeSimulator>
              /# Factorial
              <br />
              <br/>
              number = ask("Number: ")
              <br/>
              counter = 1
              <br/>
              <br/>
              res = 1
              <br/>
              speak("--Factorial of " number "--")
              <br/>
              period -&#62; counter &#60;= number &#123;
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;res = dot(counter res)
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;counter = add(counter 1)
              <br/>
              &#125;
              <br/>
              <br/>
              speak(res)
              <br/>
              <span style={{ color: "#AAA" }}>
                /# Expected output: Number
              </span>
            </CodeSimulator>
            <br/>
            <div>
              As other programming languages, in DARK you can break
            </div>
            <div>
              a loop by calling the destroy() function inside the loop.
            </div>
            <br/>
            <div>
              This function is just like the keyword break; in javascript
            </div>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ From to ------------------------------------*/}
          <h3>
            <span>from... to...</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>From loop is like the for loop, it needs a starting value, the end value and a variable</div>
            <div>
              to iterate all the values between the start and the end
            </div>
            <br/>
            <div>Example:</div>
            <CodeSimulator>
              list = ["This" "is" "from, to" "loop"]
              <br />
              <br/>
              from -&#62; 0 to 4 with i &#123;
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;speak(list[i])
              <br/>
              &#125;
              <br/>
              <span style={{ color: "#AAA" }}>
                /# Expected output <br/>
                /# This<br/>
                /# is<br/>
                /# from, to<br/>
                /# loop
              </span>
            </CodeSimulator>
            <br/>
            <div>
              The from loop has a different syntax...
            </div>
            <div>
              the first parameter is a number... the starting value
            </div>
            <br/>
            <div>
              <span style={{ color: "#AAA" }}>...then the keyword to...</span>
            </div>
            <br/>
            <div>
              the third parameter is a number again... the ending value
            </div>
            <br/>
            <div>
              <span style={{ color: "#AAA" }}>...then the keyword with...</span>
            </div>
            <br/>
            <div>
              and then the name of a variable... it needs to be a variable, that variable its
            </div>
            <div>
              going to iterate through all the values in the loop from the start to the end
            </div>
            <br/>
            <div>
              you can also use the destroy() function in the from loop
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};
export default LoopsDocumentation;
