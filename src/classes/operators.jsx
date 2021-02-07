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
        <br></br>
      </div>

      <h2>2) Comparision Operators</h2>
      <h2>3) Arithmetic Operators</h2>
      <h2>4) Logical Operators</h2>
      <h2>5) Conditional (ternary) operator</h2>
      <h2>6) String Operators</h2>
      <h2>7) Unary Operators</h2>
      <h2>8) Array/Object spread operator </h2>
    </>
  );
};

export default Operators;
