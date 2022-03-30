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
      <h3>Installation</h3>
      <div>
        You will need a copy of Node.js as an environment to run the package.
        Then you use a dependency manager like npm, yarn :{" "}
      </div>
      <div className="info">
        <ul>
          <ol>
            Install:
            <b>(npm|yarn) install typescript --save-dev</b>
          </ol>
          <ol>
            Execute:
            <b>(npm|yarn) tsc</b>
          </ol>
        </ul>
      </div>
      <h3>Playground</h3>
      <div className="info">
        <a target="_blank" href="https://www.typescriptlang.org/play">
          Typescript Playground
        </a>
      </div>
      <h2>Types</h2>
      <h3>Primitive Types</h3>
      <div>
        All “primitive”, or built-in data types in JavaScript are recognized by
        TypeScript.
      </div>
      <div className="examples">
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
      <div className="examples">
        let first = <Text.Green>'Anders'</Text.Green>;<br></br>
        first = 1337;{" "}
        <Text.Grey>
          // Type 'number' is not assignable to type 'string'
        </Text.Grey>
      </div>
      <h3>Typescript any</h3>
      <div className="examples">
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
      <div className="examples">
        let zipcodes: <Text.Purple>string</Text.Purple>[] = [
        <Text.Green>'03255'</Text.Green>, <Text.Green>'04562'</Text.Green>,
        <Text.Green>'08123'</Text.Green>, <Text.Green>'1234'</Text.Green>];
      </div>
      <h3>TypeScript Generic Type for One-Dimensional Array</h3>
      <div>
        The type for a one-dimensional array in TypeScript can be annotated with
        Array{"<T>"}, where T stands for the type.
      </div>
      <div className="examples">
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
      <div className="examples">
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
      <div className="examples">
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
      <div className="examples">
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
      <div className="examples">
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
      <div className="examples">
        <Text.Grey>// This is a numeric enum type</Text.Grey> <br></br>
        <Text.Purple>enum ClassGrade</Text.Purple> {"{"}
        <br></br>
        <Text.WarmBlue className="nr_idents1">Freshman</Text.WarmBlue> ={" "}
        <Text.Orange>9</Text.Orange>, <br></br>
        <Text.WarmBlue className="nr_idents1">Sophomore</Text.WarmBlue>,
        <br></br> <Text.WarmBlue className="nr_idents1">Junior</Text.WarmBlue>,{" "}
        <br></br>
        <Text.WarmBlue className="nr_idents1">Senior</Text.WarmBlue> <br></br>
        {"}"};<p></p>
        <Text.Grey>// This is a string enum type</Text.Grey> <br></br>
        <Text.Purple>enum ClassName </Text.Purple>
        {"{"} <br></br>
        <Text.WarmBlue className="nr_idents1">Freshman</Text.WarmBlue> =
        <Text.Green>"FRESHMAN"</Text.Green>,<br></br>{" "}
        <Text.WarmBlue className="nr_idents1">Sophomore</Text.WarmBlue> =
        <Text.Green>"SOPHOMORE"</Text.Green>,<br></br>{" "}
        <Text.WarmBlue className="nr_idents1">Junior</Text.WarmBlue> ={" "}
        <Text.Green>"JUNIOR"</Text.Green>,<br></br>
        <Text.WarmBlue className="nr_idents1">Senior</Text.WarmBlue> ={" "}
        <Text.Green>"SENIOR"</Text.Green> <br></br>
        {"}"}
        <p></p>
        const studentClass: <Text.Purple>ClassName</Text.Purple> ={" "}
        <Text.Pink>ClassName</Text.Pink>.Junior; <br></br>
        const studentGrade: <Text.Purple>ClassGrade</Text.Purple> ={" "}
        <Text.Pink>ClassGrade</Text.Pink>.Junior; <br></br>
        console.log(`I am a ${"{"}
        studentClass
        {"}"} in ${"{"}studentGrade{"}"}th grade.`);
        <br></br>
        <Text.Grey>// Prints "I am a JUNIOR in 11th grade."</Text.Grey>
      </div>
      <h3>TypeScript Object Type</h3>
      <div>
        A JavaScript object literal consists of property-value pairs. To
        type-annotate an object literal, use the TypeScript object type and
        specify what properties must be provided and their accompanying value
        types.
      </div>
      <div className="examples">
        <Text.Grey>// Define an object type for car</Text.Grey> <br></br>
        let car: {"{"}make: <Text.Purple>string</Text.Purple>, model:{" "}
        <Text.Purple>string</Text.Purple>, year:{" "}
        <Text.Purple>number</Text.Purple>
        {"}"};
      </div>
      <h3>TypeScript Type Alias</h3>
      <div>
        Instead of redeclaring the same complex object type everywhere it is
        used, TypeScript provides a simple way to reuse this object type. By
        creating an alias with the type keyword, you can assign a data type to
        it. To create a type alias, follow this syntax: type MyString = string;
      </div>
      <div className="examples">
        <Text.Grey>// This is a type alias</Text.Grey> <br></br>
        <Text.Purple>type Student</Text.Purple> = {"{"}
        <br></br>
        <Text.Black className="nr_idents1"></Text.Black>name:{" "}
        <Text.Purple>string</Text.Purple>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>age:{" "}
        <Text.Purple>number</Text.Purple>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>courses:{" "}
        <Text.Purple>string[]</Text.Purple> <br></br>
        {"}"}; <p></p>
        let boris: <Text.Purple>Student</Text.Purple> = {"{"}name:{" "}
        <Text.Green>'Boris'</Text.Green>, age: <Text.Orange>35</Text.Orange>,
        courses: [<Text.Green>'JavaScript'</Text.Green>,{" "}
        <Text.Green>'Typescript'</Text.Green>]{"}"};
      </div>
      <h3>TypeScript Multiple Alias References</h3>
      <div>
        You can create multiple type aliases that define the same data type, and
        use the aliases as assignments to variables.
      </div>
      <div className="examples">
        <Text.Grey>
          // This is also a type alias with the same type as Student
        </Text.Grey>{" "}
        <br></br>
        <Text.Purple>type Employee </Text.Purple>= {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>name:{" "}
        <Text.Purple>string</Text.Purple>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>age:{" "}
        <Text.Purple>number</Text.Purple>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>courses:{" "}
        <Text.Purple>string[]</Text.Purple> <br></br>
        {"}"}
        <p></p>
        let studentBoris: <Text.Purple>Student</Text.Purple> = {"{"}name:
        <Text.Green>'Boris'</Text.Green>, age: <Text.Orange>35</Text.Orange>,
        courses: [<Text.Green>'JavaScript'</Text.Green>,{" "}
        <Text.Green>'Typescript'</Text.Green>]{"}"};<br></br> let employeeBoris:{" "}
        <Text.Purple>Employee</Text.Purple> = studentBoris;
        <Text.Grey>// No error</Text.Grey>
        <br></br>
        console.log(studentBoris === employeeBoris);{" "}
        <Text.Grey>// Prints true</Text.Grey>
      </div>
      <h3>TypeScript Function Type Alias</h3>
      <div>
        In JavaScript, a function can be assigned to a variable. In TypeScript,
        a function type alias can be used to annotate a variable.
      </div>
      <div className="examples">
        <Text.Grey>// This is a function type alias</Text.Grey> <br></br>
        <Text.Purple>type NumberArrayToNumber</Text.Purple> = (numberArray:{" "}
        <Text.Purple>number[]</Text.Purple>) =>{" "}
        <Text.Purple>number</Text.Purple>;
      </div>
      <h3>TypeScript Generic Type Alias</h3>
      <div>
        In addition to the generic Array type, Array{"<T>"}, custom user-defined
        generic types are also supported by TypeScript. To define a generic type
        alias, use the type keyword followed by the alias name and angle
        brackets {"<...>"} containing a symbol for the generic type and assign
        it a custom definition. The symbol can be any alphanumeric character or
        string.
      </div>
      <div className="examples">
        <Text.Grey>// This is a generic type alias</Text.Grey> <br></br>
        <Text.Purple>{"type Collection<G>"}</Text.Purple> = {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>name:{" "}
        <Text.Purple>string</Text.Purple>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>quantity:{" "}
        <Text.Purple>number</Text.Purple>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>content:
        <Text.Purple>G[]</Text.Purple> <br></br>
        {"}"};<p></p>
        let bookCollection: <Text.Purple>
          {"Collection<string>"}
        </Text.Purple> = {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>name:{" "}
        <Text.Green>'Nursery Books'</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>quantity:{" "}
        <Text.Orange>3</Text.Orange>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>content: [
        <Text.Green>'Goodnight Moon'</Text.Green>,{" "}
        <Text.Green>'Humpty Dumpty'</Text.Green>,{" "}
        <Text.Green>'Green Eggs & Ham'</Text.Green>] <br></br>
        {"}"};<p></p>
        let primeNumberCollection:{" "}
        <Text.Purple>{"Collection<number>"}</Text.Purple> = {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>name:{" "}
        <Text.Green>'First 5 Prime Numbers'</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>quantity:{" "}
        <Text.Orange>5</Text.Orange>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>content: [
        <Text.Orange>2</Text.Orange>, <Text.Orange>3</Text.Orange>,{" "}
        <Text.Orange>5</Text.Orange>, <Text.Orange>7</Text.Orange>,
        <Text.Orange>11</Text.Orange>] <br></br>
        {"}"};
      </div>
      <h2>Union Types</h2>
      <div>
        TypeScript lets you create a union type that is a composite of selected
        types separated by a vertical bar, |.
      </div>
      <div className="examples">
        let myBoolean: <Text.Purple>string</Text.Purple> |{" "}
        <Text.Purple>boolean</Text.Purple>; <br></br>myBoolean ={" "}
        <Text.Green>'TRUE'</Text.Green>; <Text.Grey>// string type</Text.Grey>{" "}
        <br></br>myBoolean = <Text.Blue>false</Text.Blue>;{" "}
        <Text.Grey>// boolean type</Text.Grey>
      </div>
      <h3>TypeScript Union of Literal Types</h3>
      <div>
        Literal types combine nicely with union types, and type aliases. You can
        use these features together to get enum-like behavior with strings.
      </div>
      <div className="examples">
        <Text.Purple>type Easing</Text.Purple> ={" "}
        <Text.Green>"ease-in" </Text.Green>|{" "}
        <Text.Green>"ease-out" </Text.Green> |{" "}
        <Text.Green>"ease-in-out" </Text.Green>;
      </div>
      <h3>Typescript Union Types</h3>
      <div>
        Union types create a new type that lets us create objects that have some
        or all of the properties of each type that created the union type. Union
        types are created by joining multiples types with the pipe | symbol.
      </div>
      <div className="examples">
        <Text.Purple>type Animal</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>kind:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"} <p></p>
        <Text.Purple>type Person</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>firstName:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>lastName:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>age:{" "}
        <Text.Purple>number</Text.Purple>; <br></br>
        {"}"} <p></p>
        <Text.Purple>type Employee</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>employeeCode:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"} <p></p>
        <Text.Grey>//employee1 is from Person type </Text.Grey> <br></br>
        let employee1:<Text.Purple>
          {" "}
          Animal | Person | Employee{" "}
        </Text.Purple> = {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>kind:{" "}
        <Text.Green>'human'</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>firstName:{" "}
        <Text.Green>'Jane'</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>lastName:{" "}
        <Text.Green>'Smith'</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>age:{" "}
        <Text.Orange>20</Text.Orange> <br></br>
        {"}"}
        <p></p>
        <Text.Grey>//employee2 is from Employee type </Text.Grey> <br></br>
        let employee2:<Text.Purple>
          {" "}
          Animal | Person | Employee{" "}
        </Text.Purple> = {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>employeeCode:{" "}
        <Text.Green>'J1233123'</Text.Green>, <br></br>
        {"}"}
        <p></p>
        <Text.Grey>
          //Error:{" "}
          {
            "Property 'lastName' is missing in type '{ firstName: string; age: number; }' but required in type 'Person'."
          }
        </Text.Grey>
        <br></br>
        let employee3:<Text.Purple>
          {" "}
          Animal | Person | Employee{" "}
        </Text.Purple> = {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>firstName:{" "}
        <Text.Green>'Jane'</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>age:{" "}
        <Text.Orange>20</Text.Orange> <br></br>
        {"}"}
        <p></p>
        <Text.Black className="hover">
          console.log(employee.kind);
        </Text.Black>{" "}
        <Text.Grey>//Property 'kind' does not exist on type 'Person'</Text.Grey>{" "}
        <br></br>
        <Text.Black className="hover">
          console.log(employee.employeeCode);
        </Text.Black>{" "}
        <Text.Grey>//J123312</Text.Grey>
      </div>
      <div>
        The code above has an employee object of the Animal | Person | Employee
        type which means that it can have some of the properties of the Animal,
        Person, or Employee interfaces. Not all of them have to be included,
      </div>
      <h3>Typescript Intersection Types</h3>
      <div>
        An intersection type lets us combine multiple types into one. The
        structure of an object that has an intersection type has to have both
        the structure of all the types that form the intersection types. It’s
        denoted by an & sign. All members of all the types are required in the
        object of an intersection type.
      </div>
      <div className="examples">
        <Text.Purple>type Animal</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>kind:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"} <p></p>
        <Text.Purple>type Person</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>firstName:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>lastName:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>age:{" "}
        <Text.Purple>number</Text.Purple>; <br></br>
        {"}"} <p></p>
        <Text.Purple>type Employee</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>employeeCode:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"} <p></p>
        let employee:<Text.Purple>
          {" "}
          Animal & Person & Employee{" "}
        </Text.Purple> = {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>kind:{" "}
        <Text.Green>'human'</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>firstName:{" "}
        <Text.Green>'Jane'</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>lastName:{" "}
        <Text.Green>'Smith'</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>age:{" "}
        <Text.Orange>20</Text.Orange>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>employeeCode:{" "}
        <Text.Green>'J10050'</Text.Green>, <br></br>
        {"}"}
      </div>

      <div></div>
      <h2>Type Narrowing</h2>
      <div>
        Since a variable of a union type can assume one of several different
        types, you can help TypeScript infer the correct variable type using
        type narrowing. To narrow a variable to a specific type, implement a
        type guard. Use the typeof operator with the variable name and compare
        it with the type you expect for the variable.
      </div>
      <div className="examples">
        <Text.Grey>
          // A type guard implemented with the typeof operator
        </Text.Grey>{" "}
        <br></br>
        if (<Text.Purple>typeof</Text.Purple> age ==={" "}
        <Text.Green>'number'</Text.Green>) {""} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>age.toFixed(); <br></br>
        {"}"}
      </div>
      <h2>Advanced Object Types</h2>
      <h3>TypeScript Interface Type</h3>
      <div>
        In TypeScript, type aliases can define composite types such as objects
        and unions as well as primitive types such as numbers and strings;
        interface, however, can only define objects. Interface is useful in
        typing objects written for object-oriented programs.
      </div>
      <div className="examples">
        <Text.Grey>// Type alias can define a union type</Text.Grey> <br></br>
        <Text.Purple>type ISBN</Text.Purple> = <Text.Purple>number</Text.Purple>{" "}
        | <Text.Purple>string</Text.Purple>; <p></p>
        <Text.Grey>// Type alias can define an object type</Text.Grey> <br></br>
        <Text.Purple>type PublicationT </Text.Purple>= {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>isbn:{" "}
        <Text.Purple>ISBN</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>author:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>publisher:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"}
        <p></p>
        <Text.Grey>// Interface can only define an object type</Text.Grey>{" "}
        <br></br>
        <Text.Purple>interface PublicationI </Text.Purple>
        {"{"}
        <br></br>
        <Text.Black className="nr_idents1"></Text.Black>isbn:{" "}
        <Text.Purple>ISBN</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>author:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>publisher:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"}
      </div>
      <h3>TypeScript Interface for Classes</h3>
      <div>
        To apply a TypeScript interface to a class, add the implements keyword
        after the class name followed by the interface name. TypeScript will
        check and ensure that the object actually implements all the properties
        and methods defined inside the interface.
      </div>
      <div className="examples">
        <Text.Purple>interface Shape</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>area:{" "}
        <Text.Purple>number</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>computeArea:{" "}
        <Text.Purple>() => number</Text.Purple>; <br></br>
        {"}"} <br></br>
        <p></p>
        const PI: <Text.Purple>number</Text.Purple> = 22/7 ; <p></p>
        <Text.Grey>
          // Circle class implements the Shape interface
        </Text.Grey>{" "}
        <br></br>
        class Circle <Text.Purple>implements Shape </Text.Purple>
        {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>radius:{" "}
        <Text.Purple>number</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>area:{" "}
        <Text.Purple>number</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>constructor(radius:
        <Text.Purple> number</Text.Purple>) {"{...}"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>computeArea = ():{" "}
        <Text.Purple>number</Text.Purple>
        => {"{"} <br></br>
        <Text.Black className="nr_idents2"></Text.Black>return PI * this.radius
        * this.radius; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        {"}"} <br></br>
        {"}"}
      </div>
      <h3>TypeScript Nesting</h3>
      <div>
        Since interfaces are composable, TypeScript allows you to nest
        interfaces within an interface. This also happens with types.
      </div>
      <div className="examples">
        <Text.Purple>interface Date</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>month:{" "}
        <Text.Purple>number</Text.Purple>; <br></br>{" "}
        <Text.Black className="nr_idents1"></Text.Black>day:{" "}
        <Text.Purple>number</Text.Purple>;<br></br>{" "}
        <Text.Black className="nr_idents1"></Text.Black>year:{" "}
        <Text.Purple>number</Text.Purple> <br></br>
        {"}"}
        <p></p>
        <Text.Purple>interface Passport</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>id:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>{" "}
        <Text.Black className="nr_idents1"></Text.Black>name:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>{" "}
        <Text.Black className="nr_idents1"></Text.Black>citizenship:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>{" "}
        <Text.Black className="nr_idents1"></Text.Black>expiration:{" "}
        <Text.Purple>Date</Text.Purple>;<br></br>
        {"}"}
      </div>
      <h3>TypeScript Interface Inheritance</h3>
      <div>
        Like JavaScript classes, an interface can inherit properties and methods
        from another interface using the extends keyword.
      </div>
      <div className="examples">
        <Text.Purple>interface Brand</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>brand:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"} <p></p>
        <Text.Grey>// Model inherits property from Brand</Text.Grey> <br></br>
        <Text.Purple>interface Model extends Brand</Text.Purple>
        {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>model:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"}
      </div>
      <h3>TypeScript Interface/Type Index Signature</h3>
      <div>
        Property names of an object are assumed to be strings, but they can also
        be numbers. If you don’t know in advance the types of these property
        names, TypeScript allows you to use an index signature to specify the
        type for the property name inside an object.{" "}
      </div>
      <div className="examples">
        <Text.Purple>interface Code</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>[
        <Text.Red>code</Text.Red>: <Text.Purple>number</Text.Purple>]:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"} <br></br>
        const codeToStates: <Text.Purple>Code</Text.Purple> = {"{"}
        <Text.Orange>603</Text.Orange>: <Text.Green>'NH'</Text.Green>,{" "}
        <Text.Orange>617</Text.Orange>: <Text.Green>'MA'</Text.Green>
        {"}"} ; <p></p>
        <Text.Purple>interface ReverseCode</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>[
        <Text.Red>code</Text.Red>: <Text.Purple>string</Text.Purple>]:{" "}
        <Text.Purple>number</Text.Purple>;<br></br>
        {"}"} <br></br>
        const stateToCodes: <Text.Purple>ReverseCode</Text.Purple> = {"{"}
        <Text.Green>'NH'</Text.Green>:<Text.Orange>603</Text.Orange>,{" "}
        <Text.Green>'MA'</Text.Green>: <Text.Orange>617</Text.Orange>
        {"}"} ;
      </div>
      <h3>TypeScript Interface/Type Optional Properties</h3>
      <div>
        TypeScript allows you to specify optional properties inside. This is
        useful in situations where not all object properties have values
        assigned to them.{" "}
      </div>
      <div className="examples">
        <Text.Purple>interface Profile</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>name:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>age:{" "}
        <Text.Purple>number</Text.Purple>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>hobbies
        <Text.Red>?</Text.Red>: <Text.Purple>string</Text.Purple>; <br></br>
        {"}"} <p></p>
        <Text.Grey>
          // The property, hobbies, is optional, but name and age are required.
        </Text.Grey>{" "}
        <br></br>
        const teacher: <Text.Purple>Profile</Text.Purple> = {"{"}name:{" "}
        <Text.Green>'Tom Sawyer'</Text.Green>, age:{" "}
        <Text.Orange>18</Text.Orange>
        {"}"};
      </div>
      <h3>Interface Vs Type</h3>
      <div>
        Interfaces are basically a way to describe data shapes, for example, an
        object. <br></br>Type is a definition of a type of data, for example, a
        union, primitive, intersection, tuple, or any other type.
        <p></p>
        <b>Declaration merging:</b> One thing that’s possible to do with
        interfaces but are not with types is declaration merging. Declaration
        merging happens when the TypeScript compiler merges two or more
        interfaces that share the same name into only one declaration.
      </div>
      <div className="examples">
        <Text.Purple>interface Song</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>artistName:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        }; <p></p>
        <Text.Purple>interface Song</Text.Purple> {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>songName:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        }; <p></p>
        const song: <Text.Purple>Song</Text.Purple> = {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>artistName:{" "}
        <Text.Green>"Freddie"</Text.Green>, <br></br>
        <Text.Black className="nr_idents1"></Text.Black>songName:{" "}
        <Text.Green>"The Chain"</Text.Green> <br></br>
        {"}"}; <br></br>
      </div>
      <div>
        <b>Extends and implements:</b>In TypeScript, we can easily extend and
        implement interfaces. This is not possible with types though. Interfaces
        in TypeScript can extend classes, this is a very awesome concept that
        helps a lot in a more object-oriented way of programming. We can also
        create classes implementing interfaces.
      </div>
      <div className="examples">
        class Car {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>printCar = () => {"{"}{" "}
        <br></br>
        <Text.Black className="nr_idents2"></Text.Black>console.log("this is my
        car") <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        {"}"} <br></br>
        {"}"};<p></p>
        <Text.Purple>interface NewCar</Text.Purple> extends Car {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>name:{" "}
        <Text.Purple>string</Text.Purple>; <br></br>
        {"}"}; <p></p>
        class NewestCar <Text.Purple>implements NewCar</Text.Purple> {"{"}{" "}
        <br></br>
        <Text.Black className="nr_idents1"></Text.Black>name:{" "}
        <Text.Green>"Car"</Text.Green>; <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        constructor(engine:<Text.Purple>string</Text.Purple>) {"{"} <br></br>
        <Text.Black className="nr_idents2"></Text.Black>this.name = name{" "}
        <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        {"}"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>printCar = () => {"{"}{" "}
        <br></br>
        <Text.Black className="nr_idents2"></Text.Black>console.log("this is my
        car") <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        {"}"} <br></br>
        {"}"};
      </div>
      <h3>string vs String </h3>
      <div>
        <b>String</b> is the JavaScript String type, which you could use to
        create new strings.
        <p></p>
        <b>string</b> is the TypeScript string type, which you can use to type
        variables, parameters and return values.
      </div>
      <div className="examples">
        var s1: <Text.Purple>String</Text.Purple> = new String(
        <Text.Green>"Avoid newing things where possible"</Text.Green>);{" "}
        <br></br>
        var s2: <Text.Purple>string</Text.Purple> ={" "}
        <Text.Green>"A string, in TypeScript of type 'string'"</Text.Green>;
      </div>
    </>
  );
};

export default Typescript;
