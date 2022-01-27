import React, { useState } from "react";
import "../styles/css.less";
import * as Text from "../Utils/Text";
import prototype from "../styles/images/prototype.svg";
import prototype2 from "../styles/images/prototype2.svg";

String.prototype.sheldonize = function() {
  return `knock knock ${this} ... knock knock ${this} ... knock knock ${this}`;
};

Array.prototype.sumNumbersOrStrings = function() {
  const type = typeof this[0];

  const wrongType = this.find(element => typeof element != type);
  if (wrongType) return "All elements should be Numbers or Strings";
  const reducer = (previous, actual) =>
    type === "string" ? previous + " " + actual : previous + actual;
  return this.reduce(reducer);
};

const Prototype = () => {
  return (
    <>
      <div>
        As you know, you can create an object in JavaScript using an object
        constructor function. For example,
      </div>
      <div className="examples">
        <Text.Grey>// constructor function</Text.Grey> <br></br>
        <Text.Purple>function</Text.Purple>
        <Text.Blue> Person</Text.Blue> () {"{"}
        <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.name ={" "}
        <Text.Green>"John"</Text.Green>, <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.age ={" "}
        <Text.Orange>23</Text.Orange> <br></br>} <p></p>
        <Text.Grey>// creating objects </Text.Grey> <br></br>
        <Text.Purple>const</Text.Purple> person1 ={" "}
        <Text.Purple>new</Text.Purple> Person(); <br></br>
        <Text.Purple>const</Text.Purple> person2 ={" "}
        <Text.Purple>new</Text.Purple> Person();
      </div>
      <div>
        In the above example, function Person() is an object constructor
        function. We have created two objects person1 and person2 from it.
      </div>
      <div>
        In JavaScript, every function and object has a property named prototype
        by default. For example,
      </div>
      <div className="examples">
        <Text.Grey>// constructor function</Text.Grey> <br></br>
        <Text.Purple>function</Text.Purple>
        <Text.Blue> Person</Text.Blue> () {"{"}
        <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.name ={" "}
        <Text.Green>"John"</Text.Green>, <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.age ={" "}
        <Text.Orange>23</Text.Orange> <br></br>} <p></p>
        <Text.Purple>const</Text.Purple> person1 ={" "}
        <Text.Purple>new</Text.Purple> Person(); <p></p>
        <Text.Grey>// checking the prototype value</Text.Grey> <br></br>
        console.log(Person.prototype);
        <Text.Grey>
          {" "}
          // {"{"} ... {"}"}
        </Text.Grey>
      </div>
      <div>
        In the above example, we are trying to access the prototype property of
        a Person constructor function. <p></p>
        Since the prototype property has no value at the moment, it shows an
        empty object {"{ ... }"}.
      </div>
      <div>
        In JavaScript, a prototype can be used to add properties and methods to
        a constructor function. And objects inherit properties and methods from
        a prototype. For example,
      </div>
      <div className="examples">
        <Text.Grey>// constructor function</Text.Grey> <br></br>
        <Text.Purple>function</Text.Purple>
        <Text.Blue> Person</Text.Blue> () {"{"}
        <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.name ={" "}
        <Text.Green>"John"</Text.Green>, <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.age ={" "}
        <Text.Orange>23</Text.Orange> <br></br>} <p></p>
        <Text.Grey>// creating objects </Text.Grey> <br></br>
        <Text.Purple>const</Text.Purple> person1 ={" "}
        <Text.Purple>new</Text.Purple> Person(); <br></br>
        <Text.Purple>const</Text.Purple> person2 ={" "}
        <Text.Purple>new</Text.Purple> Person(); <p></p>
        <Text.Grey> // adding property to constructor function</Text.Grey>{" "}
        <br></br>
        Person.prototype.gender = <Text.Green>'male'</Text.Green>; <p></p>
        <Text.Grey>// prototype value of Person</Text.Grey> <br></br>
        console.log(Person.prototype);{" "}
        <Text.Grey>{'{ gender: "male" }'}</Text.Grey> <p></p>
        <Text.Grey>// inheriting the property from prototype</Text.Grey>{" "}
        <br></br>
        console.log(person1.gender); <Text.Grey>//male</Text.Grey>
        <br></br>
        console.log(person2.gender); <Text.Grey> //male</Text.Grey>
      </div>
      <div>
        In the above program, we have added a new property gender to the Person
        constructor function.<p></p>
        Then object person1 and person2 inherits the property gender from the
        prototype property of Person constructor function.
      </div>
      <div>
        Every object which is created using literal syntax or constructor syntax
        with the new keyword, includes __proto__ property that points to
        prototype object of a function that created this object
      </div>
      <figure>
        <img className="w100" src={prototype}></img>
      </figure>
      <div className="examples">
        <Text.Grey>// constructor function</Text.Grey> <br></br>
        <Text.Purple>function</Text.Purple>
        <Text.Blue> Person</Text.Blue> () {"{"}
        <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.name ={" "}
        <Text.Green>"John"</Text.Green>, <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.age ={" "}
        <Text.Orange>23</Text.Orange> <br></br>} <p></p>
        <Text.Grey>// creating objects </Text.Grey> <br></br>
        <Text.Purple>const</Text.Purple> person = <Text.Purple>new</Text.Purple>{" "}
        Person(); <p></p>
        console.log(Person.prototype); <Text.Grey>// object</Text.Grey>{" "}
        <br></br>
        console.log(person.prototype); <Text.Grey>// undefined</Text.Grey>{" "}
        <br></br>
        console.log(person.__proto__);<Text.Grey>// object</Text.Grey> <p></p>
        console.log(<Text.Purple>typeof</Text.Purple> Person.prototype);{" "}
        <Text.Grey>// object</Text.Grey> <br></br>
        console.log(<Text.Purple>typeof</Text.Purple> person.__proto__);{" "}
        <Text.Grey>// object</Text.Grey> <p></p>
        console.log(Person.prototype === person.__proto__);{" "}
        <Text.Grey>// true</Text.Grey>
      </div>
      <div>
        As you can see in the above example, Function's prototype property can
        be accessed using {"<function-name>"}.prototype. However, an object
        (instance) does not expose prototype property, instead you can access it
        using __proto__.
      </div>
      <h3>Object's Prototype</h3>
      <div>The prototype object includes following properties and methods.</div>
      <table>
        <thead>
          {" "}
          <tr>
            <th>Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>constructor</td>
            <td>Returns a function that created instance.</td>
          </tr>
          <tr>
            <td>__proto__</td>
            <td>
              This is invisible property of an object. It returns prototype
              object of a function to which it links to.
            </td>
          </tr>
        </tbody>
        <thead>
          {" "}
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hasOwnProperty()</td>
            <td>
              Returns a boolean indicating whether an object contains the
              specified property as a direct property of that object and not
              inherited through the prototype chain.
            </td>
          </tr>
          <tr>
            <td>isPrototypeOf()</td>
            <td>
              Returns a boolean indication whether the specified object is in
              the prototype chain of the object this method is called upon.
            </td>
          </tr>

          <tr>
            <td>toString()</td>
            <td>Returns string.</td>
          </tr>

          <tr>
            <td>valueOf()</td>
            <td>Returns the primitive value of the specified object.</td>
          </tr>
        </tbody>
      </table>
      <h3>Changing Prototype</h3>
      <div>
        Each object's prototype is linked to function's prototype object. If you
        change function's prototype then only new objects will be linked to
        changed prototype. All other existing objects will still link to old
        prototype of function.
      </div>
      <div className="examples">
        <div className="examples">
          <Text.Purple>function</Text.Purple>
          <Text.Blue> Person</Text.Blue> () {"{"}
          <br></br>
          <Text.Purple className="nr_idents1">this</Text.Purple>.name ={" "}
          <Text.Green>"John"</Text.Green>, <br></br>
          <Text.Purple className="nr_idents1">this</Text.Purple>.age ={" "}
          <Text.Orange>23</Text.Orange> <br></br>} <p></p>
          Person.prototype.gender = <Text.Green>'male'</Text.Green>;<p></p>
          <Text.Purple>const</Text.Purple> person1 ={" "}
          <Text.Purple>new</Text.Purple> Person(); <br></br>
          console.log(person1.gender) <Text.Grey>//male</Text.Grey> <br></br>
          <Text.Purple>const</Text.Purple> person2 ={" "}
          <Text.Purple>new</Text.Purple> Person(); <br></br>
          console.log(person1.gender) <Text.Grey>//male </Text.Grey> <p></p>
          Person.prototype = {"{ "}gender : <Text.Green>'M'</Text.Green> {"} "};
          <p></p>
          <Text.Purple>const</Text.Purple> person3 ={" "}
          <Text.Purple>new</Text.Purple> Person(); <p></p>
          console.log(person1.gender) <Text.Grey>//male</Text.Grey> <br></br>
          console.log(person2.gender) <Text.Grey>//male</Text.Grey> <br></br>
          console.log(person3.gender) <Text.Grey>//M</Text.Grey> <br></br>
        </div>
      </div>
      <h3>Use of prototype</h3>
      <div>
        The prototype object is being used by JavaScript engine in two things,
        <ol>
          <li> to find properties and methods of an object </li>
          <li>to implement inheritance in JavaScript. </li>
        </ol>
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple>
        <Text.Blue> Person</Text.Blue> () {"{"}
        <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.name ={" "}
        <Text.Green>"John"</Text.Green>, <br></br>
        <Text.Purple className="nr_idents1">this</Text.Purple>.age ={" "}
        <Text.Orange>23</Text.Orange> <br></br>} <p></p>
        Student.prototype.sayHi = <Text.Purple>function</Text.Purple>(){"{"}{" "}
        <br></br>
        <Text.Black className="nr_idents1">
          alert(<Text.Green>"Hi"</Text.Green>);
        </Text.Black>{" "}
        <br></br>
        {"}"}; <p></p> <Text.Purple>var</Text.Purple> person ={" "}
        <Text.Purple>new</Text.Purple> Person(); <br></br>
        person.toString();
      </div>
      <div>
        In the above example, toString() method is not defined in Student, so
        how and from where it finds toString()? Here, prototype comes into
        picture.
        <p></p>First of all, JavaScript engine checks whether toString() method
        is attached to studObj? If it does not find there then it uses studObj's
        __proto__ link which points to the prototype object of Student function.
        If it still cannot find it there then it goes up in the heirarchy and
        check prototype object of Object function because all the objects are
        derived from Object in JavaScript, and look for toString() method. Thus,
        it finds toString() method in the prototype object of Object function
        and so we can call studObj.toString().
      </div>
      <figure>
        <img className="w100" src={prototype2}></img>
      </figure>
      <div className="info">
        Create a function called sheldonize like the following example:
        "batatas".sheldonize(){" "}
        <Text.Grey>// {"batatas".sheldonize()}</Text.Grey>
      </div>

      <div className="info">
        Create a function called sumNumbersOrStrings like the following example:{" "}
        <br></br> [1,2,3,4,5].sumNumbersOrStrings(){" "}
        <Text.Grey>//{[1, 2, 3, 4, 5].sumNumbersOrStrings()}</Text.Grey>{" "}
        <br></br>
        ["Luke","I'm", "your", "uncleeeee", "!"].sumNumbersOrStrings(){" "}
        <Text.Grey>
          //{["Luke", " I'm", "your", "uncleeeee", "!"].sumNumbersOrStrings()}
        </Text.Grey>
        <br></br>
        [1,"I'm", "your", "uncleeeee", "!"].sumNumbersOrStrings(){" "}
        <Text.Grey>
          //{[1, " I'm", "your", "uncleeeee", "!"].sumNumbersOrStrings()}
        </Text.Grey>
      </div>
    </>
  );
};

export default Prototype;
