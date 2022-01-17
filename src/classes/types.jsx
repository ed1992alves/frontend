import React, { useState } from "react";
import "../styles/operators.less";
import * as Text from "../Utils/Text";

const Types = () => {
  return (
    <>
      <h2>Types (?)</h2>
      <div>
        Some people say JS shouldn't claim to have "types," and they should
        instead be called "tags" or perhaps "subtypes". <p></p>
        Bah! We're going to use this rough definition:{" "}
        <b>
          a type is an intrinsic, built-in set of characteristics that uniquely
          identifies the behavior of a particular value and distinguishes it
          from other values, both to the engine and to the developer.
        </b>{" "}
        <p></p>
        In other words, if both the engine and the developer treat value 42 (the
        number) differently than they treat value "42" (the string), then those
        two values have different types -- number and string, respectively. When
        you use 42, you are intending to do something numeric, like math. But
        when you use "42", you are intending to do something string'ish, like
        outputting to the page, etc. These two values have different types.
        <p></p>
        That's by no means a perfect definition. But it's good enough for this
        discussion. And it's consistent with how JS describes itself.
      </div>
      <h2>Built-in Types</h2>
      <div>
        JavaScript defines seven built-in types:
        <ul>
          <li>null </li>
          <li>undefined</li>
          <li>boolean</li>
          <li>number</li>
          <li>string</li>
          <li>object</li>
          <li>symbol -- added in ES6!</li>
        </ul>
        <b>All of these types except object are called "primitives".</b>
      </div>
      <div>
        The typeof operator inspects the type of the given value, and always
        returns one of seven string values -- surprisingly, there's not an exact
        1-to-1 match with the seven built-in types we just listed.
      </div>
      <div className="examples">
        <Text.Orange>typeof</Text.Orange> <Text.Blue> undefined </Text.Blue> ==={" "}
        <Text.Green>"undefined"</Text.Green>; <Text.Grey>// true </Text.Grey>{" "}
        <br></br>
        <Text.Orange>typeof</Text.Orange> <Text.Yellow> true </Text.Yellow> ==={" "}
        <Text.Green>"boolean"</Text.Green>; <Text.Grey>// true </Text.Grey>{" "}
        <br></br>
        <Text.Orange>typeof</Text.Orange> <Text.Red> 42 </Text.Red> ==={" "}
        <Text.Green>"number"</Text.Green>; <Text.Grey>// true </Text.Grey>{" "}
        <br></br>
        <Text.Orange>typeof</Text.Orange> <Text.Green> "42" </Text.Green> ==={" "}
        <Text.Green>"string"</Text.Green>; <Text.Grey>// true </Text.Grey>{" "}
        <br></br>
        <Text.Orange>typeof</Text.Orange>{" "}
        <Text.Purple> {"{ life: 42 }"} </Text.Purple> ==={" "}
        <Text.Green>"object"</Text.Green>; <Text.Grey>// true </Text.Grey>{" "}
        <br></br>
        <Text.Orange>typeof</Text.Orange> <Text.Pink> {"Symbol()"} </Text.Pink>{" "}
        === <Text.Green>"symbol"</Text.Green>; <Text.Grey>// true </Text.Grey>{" "}
        <br></br>
      </div>
      <div>
        As you may have noticed, I excluded null from the above listing. It's
        special -- special in the sense that it's buggy when combined with the
        typeof operator.{" "}
      </div>
      <h2>Primitive types vs objects</h2>
      <div>
        Everything that is not a primitive type is an object.
        <p></p>
        Functions are objects, too. We can set properties and method on
        functions. typeof will return 'function' but the Function constructor
        derives from the Object constructor.
        <p></p>
        The big differences between primitive types and objects are
        <ul>
          <li>
            primitive types are immutable, objects only have an immutable
            reference, but their value can change over time{" "}
          </li>
          <li>
            primitive types are passed by value. Objects are passed by reference{" "}
          </li>
          <li>
            primitive types are copied by value. Objects are copied by reference{" "}
          </li>
          <li>
            primitive types are compared by value. Objects are compared by
            reference
          </li>
        </ul>
      </div>
      <div className="examples">
        <Text.Purple>let</Text.Purple> name = <Text.Green>'Flavio'</Text.Green>{" "}
        <br></br>
        <Text.Purple>let</Text.Purple> secondName = name <br></br>
        name = <Text.Green>'Roger'</Text.Green>
        <Text.Grey>// secondName = 'Flavio'</Text.Grey> <br></br>
        <Text.Purple>let</Text.Purple> car =
        {` {
  color:`}{" "}
        <Text.Green>"yellow"</Text.Green>' {`}`} <br></br>
        <Text.Purple>let</Text.Purple> anotherCar = car <br></br>
        car.color = <Text.Green>'blue'</Text.Green>{" "}
        <Text.Grey>// anotherCar.color = 'blue'</Text.Grey> <br></br>
      </div>

      <h2>Values as Types</h2>
      <div>
        {" "}
        In JavaScript, variables don't have types -- <b>values have types</b>.
        Variables can hold any value, at any time. <p></p>
        Another way to think about JS types is that JS doesn't have "type
        enforcement," in that the engine doesn't insist that a variable always
        holds values of the same initial type that it starts out with. A
        variable can, in one assignment statement, hold a string, and in the
        next hold a number, and so on.
      </div>
      <div className="examples">
        <Text.Purple>var</Text.Purple> a = <Text.Red>42</Text.Red>; <br></br>
        <Text.Orange>typeof</Text.Orange> a; <Text.Grey>// "number"</Text.Grey>{" "}
        <br></br>a = <Text.Yellow>true</Text.Yellow>; <br></br>
        <Text.Orange>typeof</Text.Orange> a; <Text.Grey>// "boolean"</Text.Grey>
      </div>
      <h2>undefined vs "undeclared" vs null</h2>

      <div>
        An <b>"undefined" </b>variable is one that <b>has been declared</b> in
        the accessible scope, but at the moment has no other value in it. By
        contrast, an "undeclared" variable is one that has not been formally
        declared in the accessible scope. <p></p>Instead, undefined{" "}
        <b>null is an assignment value</b>. It can be assigned to a variable as
        a representation of no value
      </div>
      <div className="examples">
        <Text.Purple>var</Text.Purple> a;
        <p></p>
        a; <Text.Grey>// undefined</Text.Grey>
        <br></br>
        b; <Text.Grey>// ReferenceError: b is not defined</Text.Grey>
        <p></p>
        <Text.Purple>var</Text.Purple> b = <Text.Blue>null</Text.Blue>;{" "}
        <br></br>
        <p></p>
        a; <Text.Grey>// undefined</Text.Grey>
        <br></br>
        b; <Text.Grey>// null</Text.Grey>
      </div>
    </>
  );
};

export default Types;
