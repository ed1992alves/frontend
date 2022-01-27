import React, { useState } from "react";
import "../styles/css.less";
import * as Text from "../Utils/Text";

Array.prototype.iterate = function() {
  this.forEach(element => console.log(element));
};

Array.prototype.removeElement = function(removeEl) {
  return this.filter(element => element != removeEl);
};

Array.prototype.concatElement = function(element) {
  return [element].concat(this);
};

Array.prototype.filterArray = function(elements) {
  if (elements.isArray)
    return this.filter(element => !elements.some(el => el === element));
  return this.filter(element => elements !== element);
};

Array.prototype.countLetters = function(numberOfLetters) {
  return this.reduce(
    (old, current) => (current.length >= numberOfLetters ? ++old : old),
    0
  );
};

Array.prototype.namePosition = function(name) {
  return this.indexOf(name);
};

Array.prototype.toLowerCase = function() {
  return this.map(element => element.toLowerCase());
};

Array.prototype.encrypt = function() {
  return this.map(element =>
    element
      .replaceAll("a", 1)
      .replaceAll("e", 2)
      .replaceAll("i", 3)
      .replaceAll("o", 4)
      .replaceAll("u", 5)
  ).join();
};

Array.prototype.biggestElement = function() {
  return this.reduce(
    (biggest, element) => (element.length > biggest.length ? element : biggest),
    ""
  );
};

const Natives = () => {
  return (
    <>
      <div>
        JavaScript has several built-in or native objects. These objects are
        accessible anywhere in your program and will work the same way in any
        browser running in any operating system.
      </div>
      <h3>Number Methods</h3>
      <table className="units">
        <thead>
          {" "}
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>toExponential()</td>
            <td>
              Forces a number to display in exponential notation, even if the
              number is in the range in which JavaScript normally uses standard
              notation.
            </td>
          </tr>
          <tr>
            <td>toFixed()</td>
            <td>
              Formats a number with a specific number of digits to the right of
              the decimal.
            </td>
          </tr>
          <tr>
            <td>toPrecision()</td>
            <td>
              Defines how many total digits (including digits to the left and
              right of the decimal) to display of a number.
            </td>
          </tr>
          <tr>
            <td> toString()</td>
            <td>Returns the string representation of the number's value</td>
          </tr>
          <tr>
            <td>valueOf()</td>
            <td> Returns the number's value.</td>
          </tr>
        </tbody>
      </table>
      <h3>Boolean Methods</h3>
      <table className="units">
        <thead>
          {" "}
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> toString()</td>
            <td>Returns the string representation of the number's value</td>
          </tr>
          <tr>
            <td>valueOf()</td>
            <td> Returns the number's value.</td>
          </tr>
        </tbody>
      </table>
      <h3>String Methods</h3>
      <table className="units">
        <thead>
          {" "}
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>charCodeAt()</td>
            <td>
              Returns a number indicating the Unicode value of the character at
              the given index.
            </td>
          </tr>
          <tr>
            <td>concat()</td>
            <td>Combines the text of two strings and returns a new string.</td>
          </tr>
          <tr>
            <td>indexOf()</td>
            <td>
              Returns the index within the calling String object of the first
              occurrence of the specified value, or -1 if not found.
            </td>
          </tr>
          <tr>
            <td>lastIndexOf()</td>
            <td>
              Returns the index within the calling String object of the last
              occurrence of the specified value, or -1 if not found.
            </td>
          </tr>
          <tr>
            <td>length()</td>
            <td>Returns the length of the string.</td>
          </tr>
          <tr>
            <td>match()</td>
            <td>Used to match a regular expression against a string.</td>
          </tr>
          <tr>
            <td>replace()</td>
            <td>
              Used to find a match between a regular expression and a string,
              and to replace the matched substring with a new substring.
            </td>
          </tr>
          <tr>
            <td>search()</td>
            <td>
              Executes the search for a match between a regular expression and a
              specified string.
            </td>
          </tr>
          <tr>
            <td>slice()</td>
            <td>Extracts a section of a string and returns a new string.</td>
          </tr>
          <tr>
            <td>split()</td>
            <td>
              Splits a String object into an array of strings by separating the
              string into substrings.
            </td>
          </tr>
          <tr>
            <td>toLowerCase()</td>
            <td>Returns the calling string value converted to lower case.</td>
          </tr>
          <tr>
            <td>toUpperCase()</td>
            <td>Returns the calling string value converted to uppercase.</td>
          </tr>
          <tr>
            <td>valueOf()</td>
            <td> Returns the number's value.</td>
          </tr>
        </tbody>
      </table>
      <h3>Array Methods</h3>
      <table className="units">
        <thead>
          {" "}
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> concat()</td>
            <td>
              Returns a new array comprised of this array joined with other
              array(s) and/or value(s).
            </td>
          </tr>
          <tr>
            <td>every()</td>
            <td>
              Returns true if every element in this array satisfies the provided
              testing function.
            </td>
          </tr>
          <tr>
            <td>filter()</td>
            <td>
              Creates a new array with all of the elements of this array for
              which the provided filtering function returns true.
            </td>
          </tr>
          <tr>
            <td>find()</td>
            <td>
              Returns the value of the first element in the provided array that
              satisfies the provided testing function.
            </td>
          </tr>
          <tr>
            <td>forEach()</td>
            <td>Calls a function for each element in the array.</td>
          </tr>
          <tr>
            <td>indexOf()</td>
            <td>
              Returns the first (least) index of an element within the array
              equal to the specified value, or -1 if none is found.
            </td>
          </tr>
          <tr>
            <td>join()</td>
            <td>Joins all elements of an array into a string.</td>
          </tr>
          <tr>
            <td>map()</td>
            <td>
              Creates a new array with the results of calling a provided
              function on every element in this array.
            </td>
          </tr>
          <tr>
            <td>pop()</td>
            <td>
              Removes the last element from an array and returns that element.
            </td>
          </tr>
          <tr>
            <td>push()</td>
            <td>
              Adds one or more elements to the end of an array and returns the
              new length of the array.
            </td>
          </tr>
          <tr>
            <td>reduce()</td>
            <td>
              Apply a function simultaneously against two values of the array
              (from left-to-right) as to reduce it to a single value.
            </td>
          </tr>
          <tr>
            <td>reverse()</td>
            <td>
              Reverses the order of the elements of an array -- the first
              becomes the last, and the last becomes the first.
            </td>
          </tr>
          <tr>
            <td> slice()</td>
            <td>Extracts a section of an array and returns a new array.</td>
          </tr>
          <tr>
            <td> some()</td>
            <td>
              Returns true if at least one element in this array satisfies the
              provided testing function.
            </td>
          </tr>
          <tr>
            <td> sort()</td>
            <td>Sorts the elements of an array.</td>
          </tr>
          <tr>
            <td> splice()</td>
            <td>Adds and/or removes elements from an array.</td>
          </tr>
          <tr>
            <td> toString()</td>
            <td>Returns a string representing the array and its elements.</td>
          </tr>
        </tbody>
      </table>
      <div className="examples">
        <Text.Orange className="exampleTitle">
          <b>forEach()</b>
        </Text.Orange>{" "}
        <p></p>
        let sum = <Text.Orange>0</Text.Orange>; <br></br>
        console.log([<Text.Orange>1</Text.Orange>,<Text.Orange>2</Text.Orange>,
        <Text.Orange>3</Text.Orange>,<Text.Orange>4</Text.Orange>,
        <Text.Orange>5</Text.Orange>].forEach(elem => sum += elem))
        <Text.Grey> //undefined </Text.Grey>
        console.log(sum) <Text.Grey>//15</Text.Grey>
      </div>
      <div className="examples">
        <Text.Orange className="exampleTitle">
          <b>map()</b>
        </Text.Orange>{" "}
        <p></p>
        console.log([<Text.Orange>1</Text.Orange>,<Text.Orange>2</Text.Orange>,
        <Text.Orange>3</Text.Orange>,<Text.Orange>4</Text.Orange>,
        <Text.Orange>5</Text.Orange>].map(elem => elem*
        <Text.Orange>5</Text.Orange>))
        <Text.Grey> //[5, 10, 15, 20, 25] </Text.Grey>
      </div>
      <div className="examples">
        <Text.Orange className="exampleTitle">
          <b>filter()</b>
        </Text.Orange>{" "}
        <p></p>
        console.log([<Text.Orange>1</Text.Orange>,<Text.Orange>2</Text.Orange>,
        <Text.Orange>3</Text.Orange>,<Text.Orange>4</Text.Orange>,
        <Text.Orange>5</Text.Orange>].filter(elem => elem%
        <Text.Orange>2</Text.Orange>))
        <Text.Grey> //[1, 3, 5] </Text.Grey>
      </div>
      <div className="examples">
        <Text.Orange className="exampleTitle">
          <b>find()</b>
        </Text.Orange>{" "}
        <p></p>
        console.log([<Text.Orange>1</Text.Orange>,<Text.Orange>2</Text.Orange>,
        <Text.Orange>3</Text.Orange>,<Text.Orange>4</Text.Orange>,
        <Text.Orange>5</Text.Orange>].find(elem => elem %{" "}
        <Text.Orange>3</Text.Orange> == <Text.Orange>0</Text.Orange>))
        <Text.Grey> //3 </Text.Grey>
      </div>
      <div className="examples">
        <Text.Orange className="exampleTitle">
          <b>some()</b>
        </Text.Orange>{" "}
        <p></p>
        console.log([<Text.Orange>1</Text.Orange>,<Text.Orange>2</Text.Orange>,
        <Text.Orange>3</Text.Orange>,<Text.Orange>4</Text.Orange>,
        <Text.Orange>5</Text.Orange>].some(elem => elem %{" "}
        <Text.Orange>3</Text.Orange> == <Text.Orange>0</Text.Orange>))
        <Text.Grey> //true </Text.Grey>
      </div>
      <div className="examples">
        <Text.Orange className="exampleTitle">
          <b>reduce()</b>
        </Text.Orange>{" "}
        <p></p>
        const reduce = (acc, elem) => acc += elem % <Text.Orange>
          2
        </Text.Orange>{" "}
        == <Text.Orange>0</Text.Orange> <br></br>
        console.log([<Text.Orange>1</Text.Orange>,<Text.Orange>2</Text.Orange>,
        <Text.Orange>3</Text.Orange>,<Text.Orange>4</Text.Orange>,
        <Text.Orange>5</Text.Orange>].reduce(reducer,{" "}
        <Text.Orange>0</Text.Orange>))<Text.Grey> //2 </Text.Grey>
      </div>
      <div className="examples">
        <Text.Black className="exampleTitle">
          let people = [<Text.Green>"Greg"</Text.Green>,{" "}
          <Text.Green>"Mary"</Text.Green>, <Text.Green>"Rodolph"</Text.Green>,{" "}
          <Text.Green>"Devon"</Text.Green>,<Text.Green>"James"</Text.Green>];
        </Text.Black>
        <p></p>
        <ul>
          <li>
            Using a loop, iterate through this array and console.log all names.
          </li>{" "}
          <li>Write a function to remove one element from the array.</li>
          <li> Write a function to add a name to the front of the array.</li>
          <li>
            {" "}
            Write a function to make a copy of the array. This function can
            receive a list of elements that should not appear on the new array .
          </li>
          <li>
            Write a function that gives you indexOf where some name is located
            (if the name is not present should return -1).{" "}
          </li>
          <li>
            Write a function to count how many names have at least X letters
          </li>
          <li>Write a function to lowercase all names</li>
          <li>
            Write a function that returns a string with all the elements,
            however a should be replace by 1, e by 2, i by 3, o by 4 and u by 5
          </li>
          <li>Write a function to return the biggest name on the array.</li>
        </ul>
      </div>
      <h3>Autoboxing</h3>
      <div>
        Let's start with the question of "What are primitive types, and how are
        they defined?".
        <p></p>
        Primitive types don't have methods or properties on them.
      </div>
      <div className="examples">
        const name = <Text.Green>"Doggo"</Text.Green>
        <br></br> const age = <Text.Orange>7</Text.Orange>
        <p></p> console.log(<Text.Purple>typeof</Text.Purple> name){" "}
        <Text.Grey>// string</Text.Grey> <br></br>
        console.log(<Text.Purple>typeof</Text.Purple> age){" "}
        <Text.Grey>// number</Text.Grey> <p></p>
        console.log(name.length) <Text.Grey>// 5</Text.Grey> <br></br>
        console.log(age.toString()) <Text.Grey>// "7"</Text.Grey>
      </div>
      <div>
        Why does this work and not throw an error?
        <p></p>It looks like both of the primitive types are actually objects!
        But they're not!{" "}
        <b>They just behave like objects because of autoboxing.</b>
        <p></p>
        Whenever we try to access a method or property on a primitive, that
        primitive is <b>wrapped into an object.</b> That's called autoboxing.
        Autoboxing will connect the primitive to the related built-in prototype
        object. In our case that's String.prototype and Number.prototype. This
        gives us access to the prototype methods and properties.
      </div>
      <div className="examples" id="comparision">
        <p className="true v100"> "teste" == String("teste")</p>
        <p className="true v100"> "teste" === String("teste")</p>
        <p className="true v100"> String("teste") == new String("teste")</p>
        <p className="false v100"> String("teste") === new String("teste")</p>
        <p className="false v100">
          {" "}
          new String("teste") == new String("teste")
        </p>
        <p className="false v100">
          {" "}
          new String("teste") === new String("teste")
        </p>
        <p className="false v100"> String('hello') instanceof String *</p>
        <p className="false v100"> new String('hello') instanceof String *</p>
      </div>
      <div>
        <i>
          * The instanceof operator tests to see if the prototype property of a
          constructor appears anywhere in the prototype chain of an object.
        </i>
      </div>{" "}
    </>
  );
};

export default Natives;
