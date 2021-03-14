import React, { useState } from "react";
import "../styles/react.less";
import * as Text from "../Utils/Text";
import Navigation from "./navigation";

const ReactClass = ({ nr }) => {
  return (
    <div id="react">
      <Navigation currentPage={nr}></Navigation>
      <h2> What is React? </h2>
      <div>
        React is a declarative, efficient, and flexible JavaScript library for
        building user interfaces. It lets you compose complex UIs from small and
        isolated pieces of code called “components”.
      </div>

      <h2>React.Element</h2>
      <div>
        It is a simple object that describes a DOM node and its attributes or
        properties you can say. It is an immutable description object and you
        can not apply any methods on it.
      </div>
      <div className="examples">
        <Text.Blue> &lt;h1&gt;</Text.Blue> Hello, world{" "}
        <Text.Blue> &lt;/h1&gt;</Text.Blue>
        <br></br>
        <br></br>
        React.<Text.Purple>createElement</Text.Purple>( type, [props],
        [...children] )
      </div>
      <h2>React.Fragment</h2>
      <div>
        The React.Fragment component lets you return multiple elements in a
        render() method without creating an additional DOM element
      </div>
      <div className="examples">
        <Text.Green>&lt;React.Fragment &gt;</Text.Green>
        <br></br>
        <Text.Blue>&nbsp; &nbsp;&lt;ChildA /&gt;</Text.Blue>
        <br></br>
        <Text.Orange>&nbsp; &nbsp;&lt;ChildB /&gt;</Text.Orange>
        <br></br>
        <Text.Pink>&nbsp; &nbsp;&lt;ChildC /&gt;</Text.Pink>
        <br></br>
        <Text.Green>&lt;/React.Fragment &gt;</Text.Green>
      </div>

      <h2>React.Component</h2>
      <div>
        {" "}
        It is a function or class that accepts an input and returns a React
        element.{" "}
      </div>
      <div className="examples">
        <Text.Yellow>Class: </Text.Yellow>
        <p></p>
        <Text.Purple>class</Text.Purple> <Text.Orange>Welcome</Text.Orange>{" "}
        <Text.Purple>extends</Text.Purple>{" "}
        <Text.Orange>React.Component</Text.Orange>
        {"{"}
        <br></br>
        <Text.Blue nr_idents={1}>render</Text.Blue>() {"{}"}
        <br></br>
        {"}"}
        <br></br>
        <br></br>
        <p></p>
        <Text.Yellow>Function: </Text.Yellow> <br></br>
        <p></p>
        <Text.Purple>const</Text.Purple>
        <Text.Orange> Greeting</Text.Orange> = {"() => {}"}
      </div>
      <div> We’ll start with React.Component subclasses:</div>
      <div class="examples">
        <Text.Purple>class</Text.Purple> <Text.Orange>ShoppingList</Text.Orange>{" "}
        <Text.Purple>extends</Text.Purple>{" "}
        <Text.Orange>React.Component</Text.Orange> {"{"}
        <br></br>
        <Text.Blue nr_idents={1}>render</Text.Blue>
        {"() {"} <br></br>
        <Text.Purple nr_idents={2}>return</Text.Purple>
        {"("} <br></br>
        <Text.Pink nr_idents={3}>{"<div"}</Text.Pink>{" "}
        <Text.Purple>className</Text.Purple>=
        <Text.Green>"shopping-list"</Text.Green>
        <Text.Pink>{">"}</Text.Pink>
        <br></br>
        <Text.Pink nr_idents={4}>{"<h1>"}</Text.Pink> Shopping List for {"{"}
        <Text.Purple>this</Text.Purple>.props.name{"}"}
        <Text.Pink>{"</h1>"}</Text.Pink>
        <br></br>
        <Text.Pink nr_idents={4}>{"<ul>"} </Text.Pink>
        <br></br>
        <Text.Pink nr_idents={5}>{"<li>"}</Text.Pink>Instagram
        <Text.Pink>{"</li>"}</Text.Pink> <br></br>
        <Text.Pink nr_idents={5}>{"<li>"}</Text.Pink>Whatsapp
        <Text.Pink>{"</li>"}</Text.Pink> <br></br>
        <Text.Pink nr_idents={5}>{"<li>"}</Text.Pink>Oculus
        <Text.Pink>{"</li>"}</Text.Pink> <br></br>
        <Text.Pink nr_idents={4}>{"</ul>"} </Text.Pink> <br></br>
        <Text.Pink nr_idents={3}>{"</div>"} </Text.Pink>
        <br></br>
        <Text.Black nr_idents={2}>{");"}</Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black>
        <br></br>
        <Text.Black>{"}"}</Text.Black>
        <br></br>
        <Text.Grey>
          {'// Example usage: <ShoppingList name="Mark" />'}
        </Text.Grey>
      </div>
      <div>
        Here, ShoppingList is a <b>React component class</b>. A component takes
        in parameters, called <b>props</b> (short for “properties”), and returns
        a hierarchy of views to display via the <b>render</b> method. <p></p>The
        render method returns a description of what you want to see on the
        screen. React takes the description and displays the result. In
        particular, render returns a React element, which is a lightweight
        description of what to render. Most React developers use a special
        syntax called “JSX” which makes these structures easier to write. The{" "}
        {"<div />"} syntax is transformed at build time to
        React.createElement('div'). The example above is equivalent to:
      </div>
      <div class="examples">
        <Text.Purple>return</Text.Purple> React.
        <Text.Blue>createElement</Text.Blue>(<Text.Green>'div'</Text.Green>,{" "}
        {"{className:"} <Text.Green>'shopping-list'</Text.Green>
        {"}"}, <br></br>
        <Text.Black nr_idents={1}>React.</Text.Black>
        <Text.Blue>createElement</Text.Blue>('h1',{" "}
        <Text.Grey>/* ... h1 children ... */</Text.Grey>),
        <br></br>
        <Text.Black nr_idents={1}>React.</Text.Black>
        <Text.Blue>createElement</Text.Blue>('ul',{" "}
        <Text.Grey>/* ... ul children ... */</Text.Grey>) <br></br>);
      </div>
      <div>
        {
          "JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program"
        }
        .<p></p>
        {
          "The ShoppingList component above only renders built-in DOM components like <div /> and <li />. But you can compose and render custom React components too. For example, we can now refer to the whole shopping list by writing <ShoppingList />. Each React component is encapsulated and can operate independently. This allows you to build complex UIs from simple components."
        }
      </div>
      <h2>JSX</h2>
      <h3>Why using JSX?</h3>
      <div>
        React embraces the fact that rendering logic is inherently coupled with
        other UI logic: how events are handled, how the state changes over time,
        and how the data is prepared for display.
        <p></p>
        Instead of artificially separating technologies by putting markup and
        logic in separate files, React separates concerns with loosely coupled
        units called “components” that contain both.
        <p></p>
        React doesn’t require using JSX, but most people find it helpful as a
        visual aid when working with UI inside the JavaScript code. It also
        allows React to show more useful error and warning messages.
      </div>
      <h3>Embedding Expressions in JSX</h3>
      <div>
        In the example below, we declare a variable called name and then use it
        inside JSX by wrapping it in curly braces:
      </div>
      <div class="examples">
        <Text.Purple>const</Text.Purple> name ={" "}
        <Text.Green>'Josh Perez'</Text.Green>; <br></br>
        <Text.Purple>const</Text.Purple> element = <Text.Red>{"<h1>"}</Text.Red>
        Hello, {"{name}"}
        <Text.Red>{"</h1>"}</Text.Red>; <p></p>
        ReactDOM.
        <Text.Blue>render</Text.Blue>(<br></br>
        <Text.Black nr_idents={1}></Text.Black>element, <br></br>
        <Text.Black nr_idents={1}></Text.Black>document.
        <Text.Blue>getElementById</Text.Blue>(<Text.Green>'root'</Text.Green>){" "}
        <br></br>);
      </div>
      <div>
        You can put any valid JavaScript expression inside the curly braces in
        JSX. <p></p>In the example below, we embed the result of calling a
        JavaScript function, formatName(user), into an {"<h1>"} element.
      </div>
    </div>
  );
};

export default ReactClass;
