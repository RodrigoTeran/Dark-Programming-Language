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
          <li>Take out end</li>
          <li>Take out</li>
          <li>Insert End</li>
          <li>Insert</li>
          <li>Count</li>
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
              <span style={{ color: "#AAA" }}>/# Expected output: 3 </span>
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
              <span style={{ color: "#AAA" }}>/# Expected output: 5 </span>
            </CodeSimulator>
            <br />
            <div>
              the negative number represents the position of the item in the
              list
            </div>
            <div>
              but in the opposite direction, from the end to the beginning.
            </div>
            <br />
            <div>With negative numbers you start counting from -1</div>
            <br />
            <br />
            <div>If the index of the item is not existing in the list,</div>
            <div>then it is going to return nothing</div>
            <CodeSimulator>
              list = [1 2 3 4 5 6]
              <br />
              item = 55
              <br />
              result = list[item]
              <br />
              speak("Output: " result)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: Output 
              </span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ Take Out End ------------------------------------*/}
          <h3>
            <span>Take out end</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>If you want to remove the last item of a list,</div>
            <div>then you need to call the takeOutEnd() function</div>
            <br />
            <div>
              The takeOutEnd() function only cares of the first parameter it
              receives, if it receives
            </div>
            <div>more parameters, then it is going to ignore them</div>
            <br />
            <div>
              The first parameter must be a list, and this function returns the
              value of the element that was removed
            </div>
            <br />
            <div>Example:</div>
            <CodeSimulator>
              list = [1 2 3 4 5]
              <br />
              speak("Item removed: " takeOutEnd(list) ", list is now: " list)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: Item removed: 5, list is now: 1,2,3,4 
              </span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ Take Out ------------------------------------*/}
          <h3>
            <span>Take out</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>If you want to remove an item of a list by index,</div>
            <div>then you need to call the takeOut() function</div>
            <br />
            <div>
              The takeOut() function only cares of the first 2 parameters it
              receives, if it receives
            </div>
            <div>more parameters, then it is going to ignore them</div>
            <br />
            <div>
              The first parameter must be a list, and the second one must be a
              number.
            </div>
            <div>
              The second parameter is the index of the element you want to
              remove
            </div>
            <div>
              This function returns the value of the element that was removed.
            </div>
            <br />
            <div>Example:</div>
            <CodeSimulator>
              list = [1 2 3 4 5]
              <br />
              speak("Item removed: " takeOut(list -2) ", list is now: " list)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: Item removed: 4, list is now: 1,2,3,5 
              </span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ Insert End ------------------------------------*/}
          <h3>
            <span>Insert End</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>If you want to insert an item to the end of a list,</div>
            <div>then you need to call the insertEnd() function</div>
            <br />
            <div>
              The insertEnd() function only cares of the first 2 parameters it
              receives, if it receives
            </div>
            <div>more parameters, then it is going to ignore them</div>
            <br />
            <div>
              The first parameter must be a list, and the second one can be
              anything.
            </div>
            <br />
            <div>
              The second parameter is the value of the element you want to
              insert.
            </div>
            <div>
              This function returns the index of the element that was inserted.
            </div>
            <br />
            <div>Example:</div>
            <CodeSimulator>
              list = [1 2 3]
              <br />
              insertion = insertEnd(list "Last item")
              <br />
              speak("Index where inserted: " insertion ", list is now: " list)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: Index where inserted: 4, list is now:
                1,2,3,Last item 
              </span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ Insert ------------------------------------*/}
          <h3>
            <span>Insert</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>If you want to insert an item by index in a list,</div>
            <div>then you need to call the insert() function</div>
            <br />
            <div>
              The insert() function only cares of the first 3 parameters it
              receives, if it receives
            </div>
            <div>more parameters, then it is going to ignore them</div>
            <br />
            <div>
              The first parameter must be a list, the second must be a number,
              and the third one
            </div>
            <div>can be anything.</div>
            <br />
            <div>
              The second parameter is the index of the list where you want to
              insert the element.
            </div>
            <div>
              The third parameter is the value of the element you want to
              insert.
            </div>
            <br/>
            <div>This function doesn't return anything.</div>
            <br />
            <div>Example:</div>
            <CodeSimulator>
              list = [1 2 3]
              <br />
              insert(list -2 "New item")
              <br />
              speak("list is now: " list)
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: list is now: 1,New item,2,3 
              </span>
            </CodeSimulator>
          </div>
        </div>
        <div className="containerConsole__documentationContainer__section__2">
          {/* ------------------------------------ Count ------------------------------------*/}
          <h3>
            <span>Count</span>
          </h3>
          <div className="containerConsole__documentationContainer__info">
            <div>If you want to know the length of a list</div>
            <div>then you need to call the count() function</div>
            <br />
            <div>Example:</div>
            <CodeSimulator>
              list = [1 2 3]
              <br />
              speak(count(list))
              <br />
              <span style={{ color: "#AAA" }}>
                /# Expected output: 3
              </span>
            </CodeSimulator>
            <br/>
            <div>
              it only cares about the first parameter, and if it is not a list,
            </div>
            <div>
              then it returns nothing
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};
export default ListsMethods;
