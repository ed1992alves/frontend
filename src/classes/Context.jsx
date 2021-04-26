import React, { useState } from "react";
import "../styles/main.less";
import "../styles/context.less";
import * as Text from "../Utils/Text";
import Navigation from "./navigation";

const Context = ({ nr }) => {
  return (
    <div id="context">
      <Navigation currentPage={nr}></Navigation>
      <div>
        Context provides a way to pass data through the component tree without
        having to pass props down manually at every level.
        <p></p>
        In a typical React application, data is passed top-down (parent to
        child) via props, but such usage can be cumbersome for certain types of
        props (e.g. locale preference, UI theme) that are required by many
        components within an application. Context provides a way to share values
        like these between components without having to explicitly pass a prop
        through every level of the tree.
      </div>
      <h2>API</h2>
      <h3>Create Context</h3>
      <div>
        Imagine I have some information I want to be available anywhere or
        everywhere throughout a React app.
        <p></p>
        I'll create Context, and call it <i>UserContext</i>. This will also give
        me 
        <i> UserContext.Provider</i> and <i>UserContext.Consumer</i>. What these
        two components do is straightforward:
        <ul>
          <li>
            {" "}
            <b>Provider</b> - The component that provides the value{" "}
          </li>
          <li>
            {" "}
            <b>Consumer</b> - A component that is consuming the value
          </li>
        </ul>
      </div>
      <div className="examples">
        <Text.Orange>const</Text.Orange> UserContext = React.
        <Text.Purple>createContext</Text.Purple>() <br></br>
        <Text.Orange>export const </Text.Orange>
        UserProvider = UserContext.Provider <br></br>
        <Text.Orange>export const </Text.Orange>UserConsumer =
        UserContext.Consumer <br></br>
        <Text.Orange>export default </Text.Orange> UserContext
      </div>
      <h3>Providing Context</h3>
      <div>
        The Provider component accepts a value prop to be passed to consuming
        components that are descendants of this Provider. One Provider can be
        connected to many consumers. Providers can be nested to override values
        deeper within the tree. <p></p>All consumers that are descendants of a
        Provider will re-render whenever the Provider’s value prop changes.{" "}
      </div>
      <div className="examples">
        <Text.Orange>import</Text.Orange> React <Text.Orange>from</Text.Orange>{" "}
        <Text.Green>'react'</Text.Green> <br></br>
        <Text.Orange>import</Text.Orange> Homepage{" "}
        <Text.Orange>from</Text.Orange> <Text.Green>'./Homepage'</Text.Green>{" "}
        <br></br>
        <Text.Orange>import</Text.Orange> {"{ UserProvider }"}{" "}
        <Text.Orange>from</Text.Orange> <Text.Green>'./UserContext'</Text.Green>{" "}
        <br></br>
        <p></p>
        <Text.Orange>function </Text.Orange>
        <Text.Purple>App</Text.Purple> {"() {"} <br></br>
        <Text.Orange nr_idents={1}>const</Text.Orange> user = {"{ "}name:
        <Text.Green>'Tania'</Text.Green>, loggedIn:{" "}
        <Text.Green>true</Text.Green> {"}"} <br></br>
        <p></p>
        <Text.Orange nr_idents={1}>return</Text.Orange> ( <br></br>
        <Text.Black nr_idents={2}></Text.Black>
        {"<"}
        <Text.Yellow>UserProvider</Text.Yellow> <Text.Pink>value</Text.Pink>=
        {"{"}
        <Text.Blue>user</Text.Blue>
        {"}>"} <br></br>
        <Text.Black nr_idents={3}></Text.Black>
        {"<"}
        <Text.Yellow>HomePage</Text.Yellow> {"/>"} <br></br>
        <Text.Black nr_idents={2}></Text.Black> {"<"}
        <Text.Yellow>UserProvider</Text.Yellow> {"/>"} <br></br>
        <Text.Black nr_idents={1}></Text.Black> ) <br></br>
        {"}"}
      </div>
      <div>
        Now any child, grandchild, great-grandchild, and so on will have access
        to user as a prop.{" "}
      </div>
      <h3> Consuming Context</h3>
      <div>
        The way you provide Context is the same for class and functional
        components, but consuming it is a little different for both.
      </div>
      <h4>Class component</h4>
      <div>
        The most common way to access Context from a class component is via the
        static <i>contextType</i>.
      </div>
      <div className="examples">
        <Text.Orange>import</Text.Orange> React, {"{Component}"}{" "}
        <Text.Orange>from</Text.Orange> <Text.Green>'react'</Text.Green>{" "}
        <br></br>
        <Text.Orange>import</Text.Orange> {"{ UserContext }"}{" "}
        <Text.Orange>from</Text.Orange> <Text.Green>'./UserContext'</Text.Green>{" "}
        <br></br>
        <p></p>
        <Text.Orange>
          class
        </Text.Orange> <Text.Yellow>HomePage</Text.Yellow>{" "}
        <Text.Orange>{"extends"}</Text.Orange>{" "}
        <Text.Yellow>{"Component"}</Text.Yellow> {"{"} <br></br>
        <Text.Orange nr_idents={1}>static</Text.Orange>{" "}
        {"contextType = UserContext"} <br></br>
        <p></p>
        <Text.Purple nr_idents={1}>{"render"}</Text.Purple>
        {"() {"} <br></br>
        <Text.Orange nr_idents={2}>const</Text.Orange> user ={" "}
        <Text.Orange>this</Text.Orange>.context <br></br>
        <p></p>
        <Text.Orange nr_idents={2}> </Text.Orange>console.
        <Text.Orange>log</Text.Orange>(user){" "}
        <Text.Grey>//{" { name: 'Tania', loggedIn: true }"}</Text.Grey>{" "}
        <br></br>
        <Text.Orange nr_idents={2}>return</Text.Orange> {"<"}
        <Text.Blue>div</Text.Blue>
        {">"}
        {"{user.name}"}
        {"<"}
        <Text.Blue>/div</Text.Blue>
        {">"} <br></br>
        <Text.Orange nr_idents={1}></Text.Orange> {"}"} <br></br>
        {"}"}
      </div>
      <div>
        {" "}
        The traditional way to retrieve Context values was by wrapping the child
        component in the <i>Consumer</i>. From there, you would be able to
        access the value prop as <i>props</i>. You may still see this, but it's
        more of a legacy way of accessing Context.
      </div>
      <div className="examples">
        <Text.Orange>import</Text.Orange> React , {"{Component}"}{" "}
        <Text.Orange>from</Text.Orange> <Text.Green>'react'</Text.Green>{" "}
        <br></br>
        <Text.Orange>import</Text.Orange> {" { UserConsumer }"}{" "}
        <Text.Orange>from</Text.Orange> <Text.Green>'./UserContext'</Text.Green>{" "}
        <br></br>
        <p></p>
        <Text.Orange>
          class
        </Text.Orange> <Text.Yellow>HomePage</Text.Yellow>{" "}
        <Text.Orange>{"extends"}</Text.Orange>{" "}
        <Text.Yellow>{"Component"}</Text.Yellow> {"{"} <br></br>
        <Text.Purple nr_idents={1}>{"render"}</Text.Purple>
        {"() {"} <br></br>
        <Text.Orange nr_idents={2}>return</Text.Orange>( <br></br>
        <Text.Orange nr_idents={3}> </Text.Orange> {"<"}
        <Text.Yellow>UserConsumer</Text.Yellow>
        {">"} <br></br>
        <Text.Orange nr_idents={4}> </Text.Orange>
        {"{(props) => {"} <br></br>
        <Text.Orange nr_idents={5}>return</Text.Orange> {"<"}
        <Text.Blue>div</Text.Blue>
        {">"}
        {"{props.name}"}
        {"<"}
        <Text.Blue>/div</Text.Blue>
        {">"} <br></br>
        <Text.Orange nr_idents={4}> </Text.Orange> {"}}"} <br></br>
        <Text.Orange nr_idents={3}> </Text.Orange>
        {"<"}
        <Text.Yellow>/UserConsumer</Text.Yellow>
        {">"} <br></br>
        <Text.Orange nr_idents={2}></Text.Orange> {")"} <br></br>
        <Text.Orange nr_idents={1}></Text.Orange> {"}"} <br></br>
        {"}"}
      </div>
      <h4>Functional component and Hooks</h4>
      <div>
        For functional components, you'll use <i>useContext</i>, such as in the
        example below. This is the equivalent of static contextType.
      </div>
      <div className="examples">
        {" "}
        <Text.Orange>import</Text.Orange> React, {"{useContext}"} 
        <Text.Orange> from</Text.Orange>{" "}
        <Text.Green>'react', </Text.Green> <br></br>
        <Text.Orange>import</Text.Orange> {" UserContext"}{" "}
        <Text.Orange>from</Text.Orange> <Text.Green>'./UserContext'</Text.Green>{" "}
        <br></br>
        <p></p>
        <Text.Orange>export const </Text.Orange>
        HomePage {"= () => {"} <br></br>
        <Text.Orange nr_idents={1}> const </Text.Orange> user ={" "}
        <Text.Purple>useContext</Text.Purple>(UserContext)<br></br>
        <Text.Orange nr_idents={1}>return</Text.Orange> {"<"}
        <Text.Blue>div</Text.Blue>
        {">"}
        {"{user.name}"}
        {"<"}
        <Text.Blue>/div</Text.Blue>
        {">"} <br></br>
        {"}"}
      </div>
      <h3>Updating Context</h3>
      <div>
        Updating context is not much different than updating regular state. We
        can create a wrapper class that contains the state of Context and the
        means to update it.
      </div>
      <div className="examples">
        <Text.Orange>import</Text.Orange> React , {"{Component}"}{" "}
        <Text.Orange>from</Text.Orange> <Text.Green>'react'</Text.Green>{" "}
        <br></br>
        <p></p>
        <Text.Orange>const</Text.Orange> UserContext = React.
        <Text.Purple>createContext()</Text.Purple> <br></br>
        <p></p>
        <Text.Orange>
          class
        </Text.Orange> <Text.Yellow>UserProvider</Text.Yellow>{" "}
        <Text.Orange>extends</Text.Orange> <Text.Yellow>Component</Text.Yellow>{" "}
        {"{"} <br></br>
        <Text.Grey nr_idents={1}>// Context state</Text.Grey> <br></br>
        <Text.Black nr_idents={1}></Text.Black>state = {"{"} <br></br>
        <Text.Black nr_idents={2}></Text.Black> user: {"{}"}, <br></br>
        <Text.Black nr_idents={1}></Text.Black>
        {"}"} <br></br>
        <p></p>
        <Text.Grey nr_idents={1}>// Method to update state</Text.Grey> <br></br>
        <Text.Purple nr_idents={1}>setUser</Text.Purple> {"= (user) => {"}{" "}
        <br></br>
        <Text.Yellow nr_idents={2}>this</Text.Yellow>.
        <Text.Purple>setState</Text.Purple>
        {"((prevState) => ({ user }))"} <br></br>
        <Text.Black nr_idents={1}></Text.Black> {"}"} <br></br> <p></p>
        <Text.Purple nr_idents={1}>{"render"}</Text.Purple>
        {"() {"} <br></br>
        <Text.Orange nr_idents={2}>const</Text.Orange> {"{ children }"} ={" "}
        <Text.Orange>this</Text.Orange>.props <br></br>
        <Text.Orange nr_idents={2}>const</Text.Orange> {"{ user }"} ={" "}
        <Text.Orange>this</Text.Orange>.state <br></br>
        <Text.Orange nr_idents={2}>const</Text.Orange> {"{ setUser }"} ={" "}
        <Text.Orange>this</Text.Orange>
        <br></br> <p></p>
        <Text.Orange nr_idents={2}>return</Text.Orange> ( <br></br>
        <Text.Orange nr_idents={3}> </Text.Orange>
        {"<"}
        <Text.Yellow>UserContext.Provider</Text.Yellow>
        <br></br>
        <Text.Pink nr_idents={4}>value</Text.Pink> {"= {{"} <br></br>
        <Text.Blue nr_idents={5}>user</Text.Blue>, <br></br>
        <Text.Blue nr_idents={5}>setUser</Text.Blue>, <br></br>
        <Text.Orange nr_idents={4}> </Text.Orange> {"}}"} <br></br>
        <Text.Orange nr_idents={3}> </Text.Orange> {">"} <br></br>
        <Text.Orange nr_idents={4}> </Text.Orange> {"{children}"} <br></br>
        <Text.Orange nr_idents={3}> </Text.Orange>
        {"</"}
        <Text.Yellow>UserContext.Provider</Text.Yellow> {">"}
        <br></br>
        <Text.Orange nr_idents={2}> </Text.Orange> ) <br></br>
        <Text.Orange nr_idents={1}> </Text.Orange> {"}"}
        <br></br>
        {"}"}
        <br></br>
        <p></p>
        <Text.Orange>export default </Text.Orange> UserContext <br></br>
        <Text.Orange>export </Text.Orange> {"{ UserProvider }"}
      </div>
    </div>
  );
};

export default Context;
