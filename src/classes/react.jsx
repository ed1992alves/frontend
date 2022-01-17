import React, { useState } from "react";
import "../styles/react.less";
import "../styles/main.less";
import * as Text from "../Utils/Text";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

const Tick = props => (
  <>
    <h3>{props.title}</h3>
    <h4>It is {props.date}.</h4>
  </>
);

const ReactClass = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  setInterval(() => setDate(new Date().toLocaleTimeString()), 1000);
  return (
    <div id="react">
      <h2> What is React? </h2>
      <div>
        React is a declarative, efficient, and flexible JavaScript library for
        building user interfaces. It lets you compose complex UIs from small and
        isolated pieces of code called “components”.
      </div>

      <h2>React.Element</h2>
      <div>
        It is a simple object that describes a DOM node and its attributes or
        properties. It is an immutable description object and you can not apply
        any methods on it.
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
      <div className="examples">
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
      <div className="examples">
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
      <div className="examples">
        <Text.Purple>const</Text.Purple> name ={" "}
        <Text.Green>'Josh Perez'</Text.Green>; <br></br>
        <Text.Purple>const</Text.Purple> element ={" "}
        <Text.Pink>{"<h1>"}</Text.Pink>
        Hello, {"{name}"}
        <Text.Pink>{"</h1>"}</Text.Pink>; <p></p>
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
        JavaScript function, formatName(user), into an {"<h1>"} element
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple> <Text.Blue>formatName</Text.Blue>
        (user) {"{"} <br></br>
        <Text.Purple nr_idents={1}>return</Text.Purple> user.firstName +{" "}
        <Text.Green>' '</Text.Green> + user.lastName; <br></br>
        {"}"}
        <p></p>
        <Text.Purple>const</Text.Purple> user = {"{"} <br></br>
        <Text.Black nr_idents={1}>firstName</Text.Black>: 'Harper', <br></br>
        <Text.Black nr_idents={1}>lastName</Text.Black>: 'Perez'
        {"}"}; <p></p>
        <Text.Purple>const</Text.Purple> element = ( <br></br>
        <Text.Pink nr_idents={1}>{"<h1>"}</Text.Pink>
        <br></br>
        <Text.Black nr_idents={2}></Text.Black>Hello, {"{"}
        <Text.Blue>formatName</Text.Blue>(user){"}"}! <br></br>
        <Text.Pink nr_idents={1}>{"</h1>"}</Text.Pink> <br></br>
        ); <p></p>
        ReactDOM.<Text.Blue>render</Text.Blue>( <br></br>
        <Text.Black nr_idents={1}></Text.Black>element, <br></br>
        <Text.Black nr_idents={1}></Text.Black>document.
        <Text.Blue>getElementById</Text.Blue>(<Text.Green>'root'</Text.Green>){" "}
        <br></br>
        );
      </div>
      <h3>JSX is an expression too</h3>
      <div>
        After compilation, JSX expressions become regular JavaScript function
        calls and evaluate to JavaScript objects.
        <p></p>
        This means that you can use JSX inside of if statements and for loops,
        assign it to variables, accept it as arguments, and return it from
        functions:
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple> <Text.Blue>getGreeting</Text.Blue>
        (user) {"{"} <br></br>
        <Text.Purple nr_idents={1}>if</Text.Purple> (user) {"{"} <br></br>
        <Text.Purple nr_idents={2}>return</Text.Purple>{" "}
        <Text.Pink>{"<h1>"}</Text.Pink>Hello, {"{"}{" "}
        <Text.Blue>formatName</Text.Blue>(user)
        <Text.Black nr_idents={1}> {"}"}</Text.Black>!{" "}
        <Text.Pink>{"</h1>"}</Text.Pink> <br></br>
        <Text.Black nr_idents={1}> {"}"}</Text.Black>! <br></br>
        <Text.Purple>return</Text.Purple> <Text.Pink>{"<h1>"}</Text.Pink>Hello,
        Stranger.<Text.Pink>{"</h1>"}</Text.Pink>; <br></br>}
      </div>
      <h3>Specifying Attributes with JSX</h3>
      <div>You may use quotes to specify string literals as attributes:</div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> element = {"<"}
        <Text.Pink>div</Text.Pink> <Text.Purple>tabIndex</Text.Purple>=
        <Text.Green>"0"</Text.Green>
        {">"} {"</"} <Text.Pink>div</Text.Pink>
        {">"};
      </div>
      <div>
        You may also use curly braces to embed a JavaScript expression in an
        attribute:
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> element = {"<"}
        <Text.Pink>img</Text.Pink> <Text.Purple>src</Text.Purple>={"{"}
        <Text.Pink>user.avatarUrl</Text.Pink>
        {"}"}
        {">"} {"</"} <Text.Pink>img</Text.Pink>
        {">"};
      </div>
      <h3>Specifying Children with JSX</h3>
      <div>
        {"If a tag is empty, you may close it immediately with />, like XML:"}
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> element = {"<"}
        <Text.Pink>img</Text.Pink> <Text.Purple>src</Text.Purple>={"{"}
        <Text.Pink>user.avatarUrl</Text.Pink>
        {"}"}
        {"/>"}
      </div>
      <div>JSX tags may contain children:</div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> element = ( <br></br>
        <Text.Pink nr_idents={1}>{"<div>"}</Text.Pink> <br></br>
        <Text.Pink nr_idents={2}>{"<h1>"} </Text.Pink>Hello!
        <Text.Pink>{"</h1>"}</Text.Pink>
        <br></br>
        <Text.Pink nr_idents={2}>{"<h2>"} </Text.Pink> Good to see you here.{" "}
        <Text.Pink>{"</h1>"} </Text.Pink> <br></br>
        <Text.Pink nr_idents={1}>{"<div>"}</Text.Pink> <br></br>
        );
      </div>
      <h2>Rendering Elements</h2>
      <div>Let’s say there is a {"<div>"} somewhere in your HTML file:</div>
      <div className="examples">
        {"<"}
        <Text.Pink>div</Text.Pink> <Text.Purple>id</Text.Purple>=
        <Text.Green>"root"</Text.Green>
        {">"}
        {"<"}/<Text.Pink>div</Text.Pink>
        {">"}
      </div>
      <div>
        We call this a “root” DOM node because everything inside it will be
        managed by React DOM. <p></p>
        Applications built with just React usually have a single root DOM node.
        <p></p>
        To render a React element into a root DOM node, pass both to
        ReactDOM.render():
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> element ={" "}
        <Text.Pink>{"<h1>"}</Text.Pink>Hello, world{" "}
        <Text.Pink>{"</h1>"}</Text.Pink>;<br></br>
        ReactDOM.
        <Text.Blue>render</Text.Blue>(element, document.
        <Text.Blue>getElementById</Text.Blue>(<Text.Green>'root'</Text.Green>));
      </div>
      <h3>Updating the Rendered Element</h3>
      <div>
        React elements are immutable. Once you create an element, you can’t
        change its children or attributes. An element is like a single frame in
        a movie: it represents the UI at a certain point in time.
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple> <Text.Blue>tick</Text.Blue>() {"{"}{" "}
        <br></br>
        <Text.Purple nr_idents={1}>const</Text.Purple> {"element = ("} <br></br>
        <Text.Pink nr_idents={2}>{"<div>"}</Text.Pink> <br></br>
        <Text.Pink nr_idents={3}>{"<h1>"}</Text.Pink> Hello, world!{" "}
        <Text.Pink>{"</h1>"}</Text.Pink> <br></br>
        <Text.Pink nr_idents={3}>{"<h2>"}</Text.Pink>It is {"{"}{" "}
        <Text.Purple>{"new"}</Text.Purple> <Text.Yellow>{"Date"}</Text.Yellow>
        ().toLocaleTimeString(){"}"}.<Text.Pink>{"</h2>"}</Text.Pink> <br></br>
        <Text.Pink nr_idents={2}>{"</div>"}</Text.Pink> <br></br>{" "}
        <Text.Black nr_idents={1}></Text.Black>
        ); <br></br> <Text.Black nr_idents={1}></Text.Black> ReactDOM.
        <Text.Blue>render</Text.Blue>(element, document.
        <Text.Blue>getElementById</Text.Blue>(<Text.Green>'root'</Text.Green>));{" "}
        <br></br> {"}"}
        <br></br> setInterval(tick, 1000);
      </div>
      <div className="info date">
        <Tick title={"Hello"} date={date}></Tick>
      </div>
      <div>
        React DOM compares the element and its children to the previous one, and
        only applies the DOM updates necessary to bring the DOM to the desired
        state.
        <p></p>
        You can verify by inspecting the last example with the browser tools:
      </div>
      <h2>Components and Props</h2>
      <h3>Function and Class Components</h3>
      <div>
        The simplest way to define a component is to write a JavaScript
        function:
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple> <Text.Blue>Welcome</Text.Blue>
        (props) {"{"} <br></br>
        <Text.Purple nr_idents={1}>return</Text.Purple>{" "}
        <Text.Pink>{"<h1>"}</Text.Pink>Hello, {"{"}props.name{"}"}
        <Text.Pink>{"</h1>"}</Text.Pink>;<br></br> }
      </div>
      <div>
        This function is a valid React component because it accepts a single
        “props” (which stands for properties) object argument with data and
        returns a React element. We call such components “function components”
        because they are literally JavaScript functions.
        <p></p>
        You can also use an ES6 class to define a component:
      </div>
      <div className="examples">
        <Text.Purple>class</Text.Purple> <Text.Orange>Welcome></Text.Orange>{" "}
        <Text.Purple>extends</Text.Purple>
        <Text.Orange>React.Component</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>render</Text.Blue>() {"{"} <br></br>
        <Text.Purple nr_idents={2}>return</Text.Purple>{" "}
        <Text.Pink>{"<h1>"}</Text.Pink>Hello, {"{"}
        <Text.Purple>this</Text.Purple>.props.name{"}"}
        <Text.Pink>{"</h1>"}</Text.Pink>;<br></br>
        <Text.Black nr_idents={1}></Text.Black>
        {"}"}
        <br></br>
        {"}"}
      </div>
      <div>
        The above two components are equivalent from React’s point of view.
      </div>
      <h3>Rendering a Component</h3>
      <div>
        Previously, we only encountered React elements that represent DOM tags:
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> element = {"<"}
        <Text.Pink>div</Text.Pink> {"/>"};
      </div>
      <div>However, elements can also represent user-defined components:</div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> element = {"<"}
        <Text.Orange>Welcome</Text.Orange> <Text.Purple>name</Text.Purple>=
        <Text.Green>"Sara"</Text.Green> {"/>"};
      </div>
      <div>
        When React sees an element representing a user-defined component, it
        passes JSX attributes and children to this component as a single object.
        We call this object “props”.
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple> <Text.Blue>Welcome</Text.Blue>
        (props) {"{"} <br></br>
        <Text.Purple nr_idents={1}>return</Text.Purple>
        <Text.Pink>{" <h1>"}</Text.Pink>
        {"Hello, {props.name}"}
        <Text.Pink>{"</h1>"}</Text.Pink>; <br></br>
        {"}"} <p></p>
        <Text.Purple>const</Text.Purple> element = {"<"}
        <Text.Orange>Welcome</Text.Orange> <Text.Purple>name</Text.Purple>=
        <Text.Green>"Sara"</Text.Green>
        {"/>"};<br></br> ReactDOM.
        <Text.Blue>render</Text.Blue>( <br></br>
        <Text.Black nr_idents={1}></Text.Black>element, <br></br>
        <Text.Black nr_idents={1}></Text.Black>document.
        <Text.Blue>getElementById</Text.Blue>(<Text.Green>'root'</Text.Green>){" "}
        <br></br>
        );
      </div>
      <div className="reactExample">
        Let’s recap what happens in this example:
        <ul>
          <li>
            {
              'We call ReactDOM.render() with the <Welcome name="Sara" /> element.'
            }
          </li>
          <li>
            {
              'React calls the Welcome component with {name: "Sara"} as the props.'
            }
          </li>
          <li>
            {
              "Our Welcome component returns a <h1>Hello, Sara</h1> element as the result."
            }
          </li>
          <li>
            {
              "React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>."
            }
          </li>
        </ul>
      </div>
      <div>
        <b>Always start component names with a capital letter.</b> React treats
        components starting with lowercase letters as DOM tags. For example,
        <Text.Orange> {"<div />"}</Text.Orange> represents an HTML div tag, but
        <Text.Orange> {"<Welcome />"}</Text.Orange> represents a component and
        requires Welcome to be in scope.
      </div>
      <h3>Composing Components</h3>
      <div>
        Components can refer to other components in their output. This lets us
        use the same component abstraction for any level of detail. A button, a
        form, a dialog, a screen: in React apps, all those are commonly
        expressed as components.
        <p></p>
        For example, we can create an App component that renders Welcome many
        times:
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple> <Text.Orange>Welcome</Text.Orange>
        (props) {"{"}
        <br></br>
        <Text.Purple nr_idents={1}>return</Text.Purple>{" "}
        <Text.Pink>{"<h1>"}</Text.Pink>Hello, {"{"}props.name{"}"}
        <Text.Pink>{"</h1>"}</Text.Pink>; <br></br>
        {"}"}
        <p></p>
        <Text.Purple>function</Text.Purple> App() {"{"} <br></br>
        <Text.Purple nr_idents={1}>return</Text.Purple> ( <br></br>
        <Text.Pink nr_idents={2}>{"<div>"}</Text.Pink> <br></br>
        <Text.Black nr_idents={3}></Text.Black>
        {"<"}
        <Text.Orange>Welcome</Text.Orange> <Text.Purple>name</Text.Purple>=
        <Text.Green>"Sara"</Text.Green> {"/>"} <br></br>
        <Text.Black nr_idents={3}></Text.Black>
        {"<"}
        <Text.Orange>Welcome</Text.Orange> <Text.Purple>name</Text.Purple>=
        <Text.Green>"Cahal"</Text.Green> {"/>"} <br></br>
        <Text.Black nr_idents={3}></Text.Black>
        {"<"}
        <Text.Orange>Welcome</Text.Orange> <Text.Purple>name</Text.Purple>=
        <Text.Green>"Edite"</Text.Green> {"/>"} <br></br>
        <Text.Pink nr_idents={2}>{"</div>"}</Text.Pink> <br></br>
        <Text.Black nr_idents={1}></Text.Black>); <br></br>
        {"}"} <p></p>
        ReactDOM.<Text.Blue>render</Text.Blue>( <br></br>
        <Text.Black nr_idents={1}></Text.Black>
        {"<"}
        <Text.Orange>App</Text.Orange> {"/>"} , <br></br>
        <Text.Black nr_idents={1}></Text.Black>document.
        <Text.Blue>getElementById</Text.Blue>(<Text.Green>'root'</Text.Green>){" "}
        <br></br>
        ); <br></br>
      </div>
      <div>
        Typically, new React apps have a single App component at the very top
      </div>
    </div>
  );
};

export default ReactClass;
