// React
import React from "react";

// Components
import CodeSimulator from "../CodeSimulator";

const ListsMethods = () => {
  return (
    <div className="containerConsole__documentationContainer__section">
      <h3>Lists Methods</h3>
      <div className="containerConsole__documentationContainer__info">
        <div>
          DARK has very complementary methods for lists, both from python and
          javascript:
        </div>
        <ul>
          <li>Selection of item by index</li>
        </ul>
        <div
          className="containerConsole__documentationContainer__section__2"
          style={{ marginTop: "20px" }}
        >
          {/* ------------------------------------ Selection of item by index ------------------------------------*/}
          <h3>
            <span>Selection by index</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>If you want to select an item by its index in a list,</div>
            <div>
              as many programming languages, just type [index] after the list
              variable
            </div>
            <br />
            <div>The index can only be an integer or a variable</div>
            <div>
              If you pass a decimal number, another list, string, etc... inside
              the brackets... it is going to return
            </div>
            <div>an error</div>
            <div>Example of an index selection</div>
            <CodeSimulator>
              list = [1 2 3 4 5 6]
              <br />
              item = 2
              <br />
              result = list[item]
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: 3 #/</span>
            </CodeSimulator>
            <br />
            <div>Remember that in programming we start counting from zero</div>
            <br />

            <div>
              Because in python you can select an item by passing a negative
              index... here in DARK
            </div>
            <div>that is also available</div>
            <CodeSimulator>
              list = [1 2 3 4 5 6]
              <br />
              item = -2
              <br />
              result = list[item]
              <br />
              speak(result)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: 5 #/</span>
            </CodeSimulator>
            <br />
            <div>
              the negative number represents the position of the item in the
              list
            </div>
            <div>
              but in the opposite direction, from the end to the beginning.
            </div>
            <br/>
            <div>With negative numbers you start counting from -1</div>
            <br/>
            <br/>
            <div>
              If the index of the item is not existing in the list,
            </div>
            <div>
              then it is going to return nothing
            </div>
            <CodeSimulator>
              list = [1 2 3 4 5 6]
              <br />
              item = 55
              <br />
              result = list[item]
              <br />
              speak("Output: " result)
              <br />
              <span style={{ color: "#AAA" }}>/# Expected output: Output: #/</span>
            </CodeSimulator>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListsMethods;
