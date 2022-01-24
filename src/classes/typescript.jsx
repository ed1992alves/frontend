import React, { useState } from "react";
import "../styles/operators.less";
import * as Text from "../Utils/Text";

const Typescript = () => {
  return (
    <>
      <div>
        The TypeScript programming language is a superset of JavaScript that
        adds types to JavaScript using a set of tools called a type system.
      </div>
      <h2>Types</h2>
      <h3>Primitive Types</h3>
      <div>
        All “primitive”, or built-in data types in JavaScript are recognized by
        TypeScript.
      </div>
      <div class="examples">
        <Text.Green>"Hello, world!"</Text.Green>{" "}
        <Text.Grey>// string</Text.Grey> <br></br>
        <Text.Orange>42 </Text.Orange>
        <Text.Grey>// number</Text.Grey> <br></br>
        <Text.Blue>true </Text.Blue>
        <Text.Grey>// boolean</Text.Grey> <br></br>
        null <br></br>
        undefined
      </div>
      <h3>TypeScript Type Inference</h3>
      <div>
        Type inference assumes the expected type of the variable throughout a
        program based on the data type of the value initially assigned to it at
        declaration. Type inference will log a complaint if the variable is
        later reassigned to a different type.
      </div>
      <div class="examples">
        let first = <Text.Green>'Anders'</Text.Green>;<br></br>
        first = 1337;{" "}
        <Text.Grey>
          // Type 'number' is not assignable to type 'string'
        </Text.Grey>
      </div>
      <h3>Typescript any</h3>
      <div class="examples">
        let first; <br></br>
        first = <Text.Green>'Anders'</Text.Green>; <br></br>
        first = <Text.Orange>1337</Text.Orange>;
      </div>

      <h2>Complex Types</h2>
      <h3>TypeScript Type for One-dimensional Array</h3>
      <div>
        The type annotation for a one-dimensional array in TypeScript is similar
        to a primitive data type, except we add a [] after the type.
      </div>
      <div class="examples">
        let zipcodes: <Text.Purple>string</Text.Purple>[] = [
        <Text.Green>'03255'</Text.Green>, <Text.Green>'04562'</Text.Green>,
        <Text.Green>'08123'</Text.Green>, <Text.Green>'1234'</Text.Green>];
      </div>
      <h3>TypeScript Generic Type for One-Dimensional Array</h3>
      <div>
        The type for a one-dimensional array in TypeScript can be annotated with
        Array{"<T>"}, where T stands for the type.
      </div>
      <div class="examples">
        let zipcodes: <Text.Red>Array</Text.Red>
        <Text.Purple>{"<string>"}</Text.Purple> = [
        <Text.Green>'03255'</Text.Green>, <Text.Green>'04562'</Text.Green>,
        <Text.Green>'08123'</Text.Green>, <Text.Green>'1234'</Text.Green>];
      </div>
      <h3>TypeScript Tuple Type</h3>
      <div>
        An array that has a fixed size of similar or different element types
        arranged in a particular sequence is defined as a tuple in TypeScript.
      </div>
      <div class="examples">
        <Text.Grey>// This is an array </Text.Grey> <br></br>
        let header: <Text.Purple>string</Text.Purple>[] = [
        <Text.Green>'Name'</Text.Green>, <Text.Green>'Age'</Text.Green>,
        <Text.Green>'Smoking'</Text.Green>, <Text.Green>'Salary'</Text.Green>];{" "}
        <br></br>
        <p></p>
        <Text.Grey>// This is a tuple </Text.Grey>
        <br></br>
        let profile: [<Text.Purple>string</Text.Purple>,{" "}
        <Text.Purple>number</Text.Purple>, <Text.Purple>boolean</Text.Purple>,{" "}
        <Text.Purple>number</Text.Purple>] = [<Text.Green>'Kobe'</Text.Green>,
        <Text.Orange>39</Text.Orange>, <Text.Blue>true</Text.Blue>,{" "}
        <Text.Orange>15000</Text.Orange>];
      </div>
      <div>
        Although a tuple may have all elements of the same type and resembles an
        array, a tuple is still its own type. A tuple cannot expand, while an
        array can. Hence, assigning an array to a tuple that matches the same
        type and length will generate an error.
      </div>
      <div class="examples">
        <Text.Grey>// This is a tuple</Text.Grey> <br></br>
        let eventDate: [<Text.Purple>string</Text.Purple>,{" "}
        <Text.Purple>string</Text.Purple>] = [<Text.Green>'January'</Text.Green>
        , <Text.Green>'2</Text.Green>]; <p></p>
        <Text.Grey>// This is an array</Text.Grey> <br></br>
        let newDate:
        <Text.Purple>string</Text.Purple>[] = [
        <Text.Green>'January'</Text.Green>, <Text.Green>'2</Text.Green>];{" "}
        <br></br> eventDate = newDate;
        <p></p>
        <Text.Grey>
          /* Error: Type 'string[]' is not assignable to type '[string,
          string]'. <br></br>
          Target requires 2 element(s) but source may have fewer. */
        </Text.Grey>
      </div>
      <h3>TypeScript Array Type Inference</h3>
      <div>
        When an array variable is declared without an explicit type annotation,
        TypeScript automatically infers such a variable instance to be an array
        instead of a tuple.
      </div>
      <div class="examples">
        let mixed = [<Text.Green>'one'</Text.Green>,{" "}
        <Text.Orange>2</Text.Orange>, <Text.Orange>3</Text.Orange>,{" "}
        <Text.Green>'four'</Text.Green>];<br></br>
        mixed[4] = <Text.Orange>5</Text.Orange>; //
        <Text.Grey>no error because an array is expandable</Text.Grey>
      </div>
      <h3>TypeScript Enum Type</h3>
      <div>
        A programmer can define a set of possible values for a variable using
        TypeScript’s complex type called enum.
      </div>
      <div class="examples">
        <Text.Purple>enum MaritalStatus</Text.Purple> {"{"} <br></br>
        <Text.WarmBlue className="nr_idents1">Single</Text.WarmBlue>, <br></br>
        <Text.WarmBlue className="nr_idents1">Married</Text.WarmBlue>, <br></br>
        <Text.WarmBlue className="nr_idents1">Separated</Text.WarmBlue>,{" "}
        <br></br>
        <Text.WarmBlue className="nr_idents1">Divorced</Text.WarmBlue> <br></br>
        {"}"}; <p></p>
        <br></br>let employee: [<Text.Purple>string</Text.Purple>,{" "}
        <Text.Purple>MaritalStatus</Text.Purple>,{" "}
        <Text.Purple>number</Text.Purple>] = [ <br></br>
        <Text.Green className="nr_idents1">'Bob Jones'</Text.Green>, <br></br>
        <Text.Pink className="nr_idents1">MaritalStatus.Single</Text.Pink>,{" "}
        <br></br>
        <Text.Orange className="nr_idents1">39</Text.Orange> <br></br> ];
      </div>
      <h3>TypeScript Numeric and String Enum Types</h3>
      <div>
        TypeScript supports two types of enum: numeric enum and string enum.
        Members of a numeric enum have a corresponding numeric value assigned to
        them, while members of a string enum must have a corresponding string
        value assigned to them.
        <p></p>
        By default, TypeScript assigns a value of 0 to the first member of a
        numeric enum type and auto-increments the value of the rest of the
        members. However, you can override the default value for any member by
        assigning specific numeric values to some or all of the members.
      </div>
    </>
  );
};

export default Typescript;
