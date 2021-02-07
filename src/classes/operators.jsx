import React, { useState } from "react";
import "../styles/operators.less";
import * as Text from "../Utils/Text";
import Navigation from "./navigation";

const Operators = ({ nr }) => {
  return (
    <>
      <Navigation currentPage={nr}></Navigation>
      <h2>1) Assignment Operators</h2>
      <div className="info">
        <h4>Default (with equal)</h4>
        <br></br>x = y<br></br>x += y (Addition assignment operator)
        <p></p>
        <h4>
          <a href="#destructuring">Destructuring</a>
        </h4>
        <br></br>
        var [one, two, three] = foo;
      </div>
      <h3 id="destructuring">Destructuring</h3>
      <div className="examples">
        <Text.Orange>[a, b, ...rest] </Text.Orange> =
        <Text.Blue> [10, 20, 30, 40, 50]</Text.Blue>;<br></br>
        <Text.Black>
          console.log(<Text.Orange>a</Text.Orange>);{" "}
        </Text.Black>{" "}
        <Text.Grey>// 10</Text.Grey>
        <br></br>
        <Text.Black>
          console.log(<Text.Orange>b</Text.Orange>);{" "}
        </Text.Black>{" "}
        <Text.Grey>// 20</Text.Grey>
        <br></br>
        <Text.Black>
          console.log(<Text.Orange>rest</Text.Orange>);{" "}
        </Text.Black>{" "}
        <Text.Grey>// [30,40,50]</Text.Grey>
        <p></p>(<Text.Orange>{"{a, b, ...rest}"}</Text.Orange> =
        <Text.Green> {"  {a: 10, b: 20, c: 30, d: 40}"}</Text.Green>);
        <Text.Black>
          console.log(<Text.Orange>a</Text.Orange>);{" "}
        </Text.Black>{" "}
        <Text.Grey>// 10</Text.Grey>
        <br></br>
        <Text.Black>
          console.log(<Text.Orange>b</Text.Orange>);{" "}
        </Text.Black>{" "}
        <Text.Grey>// 20</Text.Grey>
        <br></br>
        <Text.Black>
          console.log(<Text.Orange>rest</Text.Orange>);{" "}
        </Text.Black>{" "}
        <Text.Grey>// {"{c: 30, d: 40}"}</Text.Grey>
        <br></br>
      </div>
      <h2>2) Comparision Operators</h2>
      <div className="info">
        <h4>1. equal (==)</h4>
        <ul>
          <li>
            <b>String == Number </b> (String is converter to Number)
          </li>
          <li>
            <b>anything == Boolean</b> (Boolean is converted to Number , false
            to 0 and true to 1)
          </li>
          <li>
            <b>undefined == null</b> (True)
          </li>{" "}
          <li>
            <b>objects == non-objects</b> (convert the objects to the
            primitives)
          </li>
        </ul>
        <div className="examples" id="comparision">
          <p class="false">"0" == null</p>
          <p class="false">"0" == undefined</p>
          <p class="true">"0" == false</p>
          <p class="false">"0" == NaN</p>
          <p class="true">"0" == 0</p>
          <p class="false">"0" == ""</p>
          <br></br>
          <p class="false">false == null</p>
          <p class="false">false == undefined</p>
          <p class="true">false == 0</p>
          <p class="true">false == ""</p>
          <p class="true">false == []</p>
          <p class="false">false == {"{}"}</p>
          <br></br>
          <p class="false">"" == null</p>
          <p class="false">"" == undefined</p>
          <p class="false">"" == NaN</p>
          <p class="true">"" == 0</p>
          <p class="true">"" == []</p>
          <p class="false">"" == {"{}"}</p>
          <br></br>
          <p class="false">0 == null</p>
          <p class="false">0 == undefined</p>
          <p class="true">0 == []</p>
          <p class="false">0 == {"{}"}</p>
        </div>
        <h4>2. not equal (!=)</h4>
        <p></p>
        <h4>3. strict equal (===)</h4>
        <p></p>
        <h4>4. greater/ less than (>)</h4>
      </div>
      <h2>3) Arithmetic Operators</h2>
      <div class="info">
        {" "}
        <h4>Standard:</h4>
        <div>
          1 / 2; <br></br>10 % 2; <br></br>5 + 2;
        </div>
        <p></p> <h4>Increment:</h4>
        <div>x++</div>
      </div>
      <h2>4) Logical Operators</h2>
      <div class="info">
        <h4>1. AND</h4>
        <div class="examples" id="and">
          <p>
            var a1 = <div class="operator">true && true </div>{" "}
            <div class="comment"> true</div>
          </p>
          <p>
            var a2 =<div class="operator"> true && false</div>{" "}
            <div class="comment"> false</div>
          </p>
          <p>
            var a3 = <div class="operator">false && true</div>{" "}
            <div class="comment"> false</div>
          </p>
          <p>
            var a4 = <div class="operator">false && (3 == 4)</div>{" "}
            <div class="comment"> false</div>
          </p>
          <p>
            var a5 = <div class="operator">'Cat' && 'Dog'</div>{" "}
            <div class="comment"> 'Dog'</div>
          </p>
          <p>
            var a6 = <div class="operator">false && 'Cat'</div>{" "}
            <div class="comment"> false</div>
          </p>
          <p>
            {" "}
            var a7 = <div class="operator">'Cat' && false </div>{" "}
            <div class="comment"> false</div>
          </p>
          <p>
            var a8 = <div class="operator">[] && 'hey'</div>{" "}
            <div class="comment"> 'hey'</div>{" "}
          </p>
          <p>
            var a9 = <div class="operator">{"{}"} && 'hey'</div>{" "}
            <div class="comment"> 'hey'</div>
          </p>
        </div>
        <p></p>
        <h4>2. OR</h4>
        <div class="examples" id="or">
          <p>
            var a1 = <div class="operator">true || true </div>{" "}
            <div class="comment"> true</div>
          </p>
          <p>
            var a2 =<div class="operator"> true || false</div>{" "}
            <div class="comment"> true</div>
          </p>
          <p>
            var a3 = <div class="operator">false || true</div>{" "}
            <div class="comment"> true</div>
          </p>
          <p>
            var a4 = <div class="operator">false || (3 == 4)</div>{" "}
            <div class="comment"> false</div>
          </p>
          <p>
            var a5 = <div class="operator">'Cat' || 'Dog'</div>{" "}
            <div class="comment"> 'Cat'</div>
          </p>
          <p>
            var a6 = <div class="operator">false || 'Cat'</div>{" "}
            <div class="comment"> 'Cat'</div>
          </p>
          <p>
            {" "}
            var a7 = <div class="operator">'Cat' || false </div>{" "}
            <div class="comment"> 'Cat'</div>
          </p>
          <p>
            var a8 = <div class="operator">[] || 'hey'</div>{" "}
            <div class="comment"> []</div>{" "}
          </p>
          <p>
            var a9 = <div class="operator">{"{}"} || 'hey'</div>{" "}
            <div class="comment"> {"{}"}</div>
          </p>
        </div>
        <p></p>
        <h4>3. NOT</h4>
        <div class="examples" id="not">
          <p>
            {" "}
            var n1 = <div class="operator">!true</div>
            <div class="comment"> false</div>{" "}
          </p>
          <p>
            var n2 = <div class="operator">!false</div>
            <div class="comment"> true</div>
          </p>
          <p>
            var n3 = <div class="operator">!'Cat'</div>
            <div class="comment"> false</div>
          </p>
        </div>
      </div>
      <h2>5) Conditional (ternary) operator</h2>
      <div class="info">condition ? val1 : val2</div>
      <div class="exercise">
        Multiplying a given number by eight if it is an even number and by nine
        otherwise.
      </div>
      <h2>6) String Operators</h2>
      <div class="info">
        <h4>1. Concatenation:</h4>
        <br></br> 'my ' + 'string'
        <p></p>
        <h4>2. Template literals:</h4>
        <br></br> {"`My name is ${name}`"}
      </div>
      <h2>7) Unary Operators</h2>
      <div class="info">
        <h4>Unary plus (+) </h4> <br></br> Tries to convert the operand into a
        number <p></p>
        <h4>Logical Not (!) </h4> <br></br> Converts to boolean value then
        negates it <p></p>
        <h4>Increment (++) </h4> Adds one to its operand <p></p>
        <h4>Decrement (--) </h4> Decrements by one from its operand <p></p>
        <h4>typeof</h4> Returns a string which is the type of the operand
      </div>
      <h2>8) Array/Object spread operator </h2>
      <div class="info">
        {" "}
        Spread syntax can be used when all elements from an object or array need
        to be included in a list of some kind.{" "}
      </div>
      <div class="examples">
        <Text.Purple>let</Text.Purple> numberStore ={" "}
        <Text.Blue>[0, 1, 2]</Text.Blue>; <br></br>
        <Text.Purple>let</Text.Purple> newNumber = <Text.Yellow>12</Text.Yellow>
        ; <br></br> numberStore = [...numberStore, newNumber];{" "}
        <Text.Grey>// [0, 1, 2, 12]</Text.Grey>
      </div>
    </>
  );
};

export default Operators;
