// React
import React from "react";

// Components
import CodeSimulator from "../CodeSimulator";

const DataTypesDocumentation = () => {
  return (
    <div className="containerConsole__documentationContainer__section">
      <h3>Data Types</h3>
      <div className="containerConsole__documentationContainer__info">
        <div>DARK has very useful data types:</div>
        <ul>
          <li>Strings</li>
          <li>Integers</li>
          <li>Lists</li>
        </ul>
        <div
          className="containerConsole__documentationContainer__section__2"
          style={{ marginTop: "20px" }}
        >
          {/* ------------------------------------ Strings ------------------------------------*/}
          <h3>
            <span>Strings</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>The strings are very easy to use</div>
            <div>This strings are just as any other programming language</div>
            <CodeSimulator>variableString = "hi"</CodeSimulator>
            <br />
            <CodeSimulator>variableString = 'hi'</CodeSimulator>
            <br />
            <div>You can use both "" and '' to name your strings</div>
            <br />
            <div>So you can see the quotes in the console as you want:</div>
            <br />
            <div>With quotes inside:</div>
            <CodeSimulator>
              variableString = 'hi'
              <br />
              speak(variableString)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: hi</span>
            </CodeSimulator>
            <br />
            <div>Without quotes inside:</div>
            <CodeSimulator>
              variableString = '"hi"'
              <br />
              speak(variableString)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: "hi"</span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ Integers ------------------------------------*/}
          <h3>
            <span>Integers</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>
              The integers are... integer numbers... a very descriptive name
              right?
            </div>
            <CodeSimulator>variableInteger = 42</CodeSimulator>
            <br />
            <CodeSimulator>variableString = "42"</CodeSimulator>
            <br />
            <div>yes... "42" is also an integer</div>
            <br />
            <div>
              DARK has an automatic string parser, and if the string value is an
              integer
            </div>
            <div>then it is taken as integer</div>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ Lists ------------------------------------*/}
          <h3>
            <span>Lists</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>
              DARK hates the commas... so the lists are non-comma-separated
              values...
            </div>
            <br />
            <div>Example:</div>
            <CodeSimulator>variableList = [1 2 3 4 5]</CodeSimulator>
            <br />
            <div>They need to be inside of a pair of brackets</div>
            <br />
            <div>but careful...</div>
            <div>this is not the same as the parameters of a function</div>
            <br />
            <div>This is a bunch of parameters... no need to add the brackets</div>
            <CodeSimulator>
              speak(1 2 3 4 5 6 7 8)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: 1, 2, 3, 4, 5, 6, 7, 8
              </span>
            </CodeSimulator>
            <br />
            <div>This is lists as parameters</div>
            <CodeSimulator>
              list1 = [1 2]
              <br />
              list2 = [3 4]
              <br />
              list3 = [5 6]
              <br />
              list4 = [7 8]
              <br />
              speak(list1 list2 list3 list4)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: 1,2, 3,4, 5,6, 7,8
              </span>
            </CodeSimulator>
            <br />
            <div>
              ...if you have doubt of what the speak() function does... you can
              read the built-in functions section...
            </div>
            <br />

            <div>
              in short the speak() function prints its parameters in the
              console and separate
            </div>
            <div>them with commas and a space</div>
            <br />
            <br />
            <div>
              In the last code sample, the function separates its arguments, but it only has
              4 arguments...
            </div>
            <div>thats why it doesnt separates the values of each list</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataTypesDocumentation;
