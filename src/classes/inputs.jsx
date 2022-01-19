import React, { useState } from "react";
import * as Text from "../Utils/Text";
import "../styles/inputs.less";

const inputs = () => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [hobbies, setHobbies] = useState(null);

  const defaultHobbies = ["music", "cinema", "dance"];

  const beforeSubmit = event => {
    let userHobbies = "";
    event.preventDefault();
    document.getElementById("data").classList.remove("hidden");
    setName(document.querySelector('input[name="name"]').value);
    setAge(document.querySelector('input[name="age"]').value);
    setPassword(document.querySelector('input[name="password"]').value);
    setEmail(document.querySelector('input[name="email"]').value);
    setSex(document.querySelector('input[name="sexo"]').value);

    defaultHobbies.forEach(hobbie => {
      userHobbies = document.getElementById(hobbie).checked
        ? `${userHobbies} / ${hobbie}`
        : userHobbies;
    });
    userHobbies = userHobbies.slice(3);
    setHobbies(userHobbies);
  };
  const updateTextInput = () =>
    (document.getElementById("userAge").innerHTML = document.getElementById(
      "age"
    ).value);

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
      <h2>The {"<label>"} Element</h2>
      <div>
        The {"<label>"}tag defines a label for many form elements. <p></p>The{" "}
        {"<label>"} element is useful for screen-reader users, because the
        screen-reader will read out loud the label when the user focus on the
        input element. The {"<label>"} element also help users who have
        difficulty clicking on very small regions (such as radio buttons or
        checkboxes) - because when the user clicks the text within the{" "}
        {"<label>"} element, it toggles the radio button/checkbox.
        <p></p>The for attribute of the {"<label>"} tag should be equal to the
        id attribute of the {"<input>"} element to bind them together.
      </div>

      <h2>The {"<input>"} Element</h2>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>checkbox</td>
            <td>
              A check box allowing single values to be selected/deselected.
            </td>
            <td>
              <input type="checkbox"></input>
            </td>
          </tr>
          <tr>
            <td>color</td>
            <td>
              A control for specifying a color; opening a color picker when
              active in supporting browsers.
            </td>
            <td>
              <input type="color" defaultValue="#45AABB"></input>
            </td>
          </tr>
          <tr>
            <td>date</td>
            <td>
              A control for entering a date (year, month, and day, with no
              time).
            </td>
            <td>
              <input type="date"></input>
            </td>
          </tr>
          <tr>
            <td>email</td>
            <td>
              A field for editing an email address. Looks like a text input, but
              has validation parameters
            </td>
            <td>
              <input type="email"></input>
            </td>
          </tr>
          <tr>
            <td>file</td>
            <td>
              A control that lets the user select a file. Use the accept
              attribute to define the types of files that the control can
              select.
            </td>
            <td>
              <input type="file"></input>
            </td>
          </tr>
          <tr>
            <td>number</td>
            <td>A control for entering a number.</td>
            <td>
              <input type="number"></input>
            </td>
          </tr>
          <tr>
            <td>password</td>
            <td>A single-line text field whose value is obscured.</td>
            <td>
              <input type="password"></input>
            </td>
          </tr>
          <tr>
            <td>radio</td>
            <td>
              A radio button, allowing a single value to be selected out of
              multiple choices with the same name value.
            </td>
            <td>
              <input type="radio"></input>
            </td>
          </tr>
          <tr>
            <td>range</td>
            <td>
              A control for entering a number whose exact value is not
              important.
            </td>
            <td>
              <input type="range"></input>
            </td>
          </tr>
          <tr>
            <td>submit</td>
            <td>A button that submits the form.</td>
            <td>
              <input type="submit"></input>
            </td>
          </tr>
          <tr>
            <td>text</td>
            <td>The default value. A single-line text field.</td>
            <td>
              <input type="text"></input>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Attributes</h3>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>accept</td>
            <td>file</td>
            <td>Hint for expected file type in file upload controls</td>
          </tr>
          <tr>
            <td>checked</td>
            <td>radio, checkbox</td>
            <td>Whether the command or control is checked</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>all</td>
            <td>Whether the form control is disabled</td>
          </tr>
          <tr>
            <td>max</td>
            <td>numeric</td>
            <td>Maximum value</td>
          </tr>
          <tr>
            <td>maxlength</td>
            <td>password, text</td>
            <td>Maximum length (number of characters) of value</td>
          </tr>
          <tr>
            <td>min</td>
            <td>numeric</td>
            <td>Minimum value</td>
          </tr>
          <tr>
            <td>minlength</td>
            <td>password, text</td>
            <td>Minimum length (number of characters) of value</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>email, file</td>
            <td>Boolean. Whether to allow multiple values</td>
          </tr>
          <tr>
            <td>pattern</td>
            <td>password, text</td>
            <td>Pattern the value must match to be valid</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>password, text</td>
            <td>
              Text that appears in the form control when it has no value set
            </td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>all</td>
            <td>Boolean. The value is not editable</td>
          </tr>
          <tr>
            <td>required</td>
            <td>all</td>
            <td>
              Boolean. A value is required or must be check for the form to be
              submittable
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>email, password,text</td>
            <td>Size of the control</td>
          </tr>
          <tr>
            <td>value</td>
            <td>all</td>
            <td>The initial value of the control.</td>
          </tr>
        </tbody>
      </table>
      <div className="examples exampleForm">
        <form onSubmit={beforeSubmit}>
          <div className="row">
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" required></input>
          </div>
          <div className="row">
            <label htmlFor="tel">Cell Phone:</label>
            <input
              name="tel"
              type="tel"
              pattern="^(\+351)?\s?9[2|6|1][0-9]{7}"
              placeholder="+351"
              required
            ></input>
          </div>
          <div className="row">
            <label htmlFor="sexo">Sexo:</label>
            <input
              id="feminino"
              name="sexo"
              value="Feminino"
              type="radio"
              required
            ></input>
            <label htmlFor="feminino">Feminino</label>
            <input
              id="masculino"
              name="sexo"
              value="Masculino"
              type="radio"
            ></input>
            <label htmlFor="masculino">Masculino</label>
          </div>
          <div className="row">
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" required></input>
          </div>
          <div className="row">
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Minimum eight characters, at least one letter and one number:"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              name="password"
              type="password"
              required
            ></input>
          </div>
          <div className="row">
            <div id="hobbies">Hobbies:</div>
            <section>
              <div className="checkboxOverride">
                <input id="music" name="music" type="checkbox"></input>
                <label htmlFor="music">Music</label>
              </div>{" "}
              <div className="checkboxOverride">
                <input
                  id="cinema"
                  name="cinema"
                  type="checkbox"
                  defaultChecked
                ></input>
                <label htmlFor="cinema">Cinema</label>
              </div>
              <div className="checkboxOverride">
                <input id="dance" name="dance" type="checkbox"></input>
                <label htmlFor="dance">Dance</label>
              </div>
              <div className="checkboxOverride">
                <input
                  id="photography"
                  name="photography"
                  type="checkbox"
                  disabled
                ></input>
                <label htmlFor="photography">Photography</label>
              </div>
            </section>
          </div>
          <div className="row">
            <label htmlFor="age">Age:</label>
            <div id="userAge">30</div>
            <input
              id="age"
              name="age"
              type="range"
              min="18"
              defaultValue="30"
              max="99"
              onChange={updateTextInput}
            ></input>
          </div>
          <div className="row">
            <input
              onClick={() =>
                document.getElementById("data").classList.add("hidden")
              }
              type="submit"
            ></input>
          </div>
        </form>
        <div id="data" className="hidden ">
          Name: {name} <br></br>Age: {age} <br></br>Sex: {sex} <br></br>Email:{" "}
          {email} <br></br>
          Password: {password} <br></br>Hobbies: {hobbies} <br></br>
        </div>
      </div>
    </>
  );
};

export default inputs;
