import React, { useState } from "react";
import * as Text from "../Utils/Text";
import "../styles/dom.less";

const inputs = () => {
  return (
    <>
      <h2>The {"<form>"} Element</h2>
      <div>
        The {"<form>"} element is a container for different types of input
        elements, such as: text fields, checkboxes, radio buttons, submit
        buttons, etc.
      </div>
      <div className="examples">
        <Text.Orange>
          {"<"}form{">"} <br></br>
        </Text.Orange>
        <Text.Black className="nr_idents1"></Text.Black>
        <Text.Orange>{"<"}label</Text.Orange> <Text.Red>for</Text.Red>
        ="fname"<Text.Orange>></Text.Orange>First name:
        <Text.Orange>
          {"</"}label{">"} {"<"}br{">"}
        </Text.Orange>
        <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        <Text.Orange>{"<"}input</Text.Orange> <Text.Red>type</Text.Red>="text"{" "}
        <Text.Red>id</Text.Red>
        ="fname" <Text.Red>name</Text.Red>="fname"
        <Text.Orange>
          {">"} {"<"}br{">"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        <Text.Orange>{"<"}label</Text.Orange> <Text.Red>for</Text.Red>
        ="lname">Last name:{" "}
        <Text.Orange>
          {"</"}label{">"} {"<"}br{">"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        <Text.Orange>{"<"}input </Text.Orange>
        <Text.Red>type</Text.Red>="text" <Text.Red>id</Text.Red>="lname"
        <Text.Red>name</Text.Red>="lname"<Text.Orange>{">"}</Text.Orange>{" "}
        <br></br>
        <Text.Orange>
          {"</"}form{">"}
        </Text.Orange>
      </div>
    </>
  );
};

export default inputs;
