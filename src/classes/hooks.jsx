import React, { useState } from "react";
import "../styles/reactHooks.less";
import "../styles/main.less";
import * as Text from "../Utils/Text";
import { render } from "@testing-library/react";
import { Dropdown } from "../components/dropdown";
import { Avatar } from "../components/avatar";
import { TabExample } from "../components/tabExample";

const options = ["option1", "option2", "option3"];
let pokemonSelected;

const ReactHooks = () => {
  const [optionSelected, setOptionSelected] = useState(options[0]);
  return (
    <div id="reactHooks">
      {" "}
      <h2> React Hooks </h2>
      <div>
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class.
      </div>
      <h3> useState</h3>
      <div className="examples">
        <Text.Grey>
          // Declare a new state variable, which we'll call "count"
        </Text.Grey>
        <div>
          <Text.Purple>const </Text.Purple> [count, setCount] ={" "}
          <Text.Orange>useState</Text.Orange>
          (0);
        </div>
      </div>
      <div>
        <p></p>
        <b>What does calling useState do?</b>
        <p>
          It declares a “state variable”. Normally, variables “disappear” when
          the function exits but state variables are preserved by React.
        </p>

        <b>What do we pass to useState as an argument?</b>
        <p>The only argument to the useState() Hook is the initial state.</p>
        <b>What does useState return?</b>
        <p>
          {" "}
          It returns a pair of values: the current state and a function that
          updates it. This is why we write const [count, setCount] = useState().
        </p>
      </div>
      <h3> useEffect / useLayoutEffect </h3>
      <div className="examples ">
        <div>
          <Text.Orange>useEffect</Text.Orange>
          {"(() => {"} <br></br>
          <Text.Black nr_idents={1}></Text.Black>
          {"document.title = "}
          <Text.Green>`You clicked</Text.Green> {"${count}"}{" "}
          <Text.Green>times`</Text.Green>;"} <br></br>
          {"});"}
        </div>
      </div>
      <div>
        <p></p>
        By using this Hook, you tell React that your component needs to do
        something after render. React will remember the function you passed
        (we’ll refer to it as our “effect”), and call it later after performing
        the DOM updates. In this effect, we set the document title, but we could
        also perform data fetching or call some other imperative API.
        <p></p>
        <b>What does calling useEffect do?</b>
        <p>
          By using this Hook, you tell React that your component needs to do
          something after render.
        </p>
        <b>What do we pass to useEffect as an argument?</b>
        <p>
          Placing useEffect inside the component lets us access any state
          variables (or any props) right from the effect.
        </p>
        <b>Does useEffect run after every render?</b>
        <p>
          {" "}
          Yes! By default, it runs both after the first render and after every
          update.
        </p>
      </div>
      <div>
        <i>useEffect</i> runs asynchronously and after a render is painted to
        the screen.
        <ol>
          {" "}
          So that looks like:
          <li>
            You cause a render somehow (change state, or the parent re-renders){" "}
          </li>
          <li>React renders your component (calls it)</li>
          <li>The screen is visually updated</li>
          <li>THEN useEffect runs</li>
        </ol>
      </div>
      <div>
        <i>useLayoutEffect</i>, on the other hand, runs synchronously after a
        render but before the screen is updated. That goes:
        <ol>
          <li>
            You cause a render somehow (change state, or the parent re-renders)
          </li>
          <li>React renders your component (calls it)</li>
          <li>useLayoutEffect runs, and React waits for it to finish.</li>
          <li>The screen is visually updated</li>
        </ol>
      </div>
      <div>
        {" "}
        <b>Optimizing Performance by Skipping Effects</b>
        <p></p>
        In some cases, cleaning up or applying the effect after every render
        might create a performance problem.
        <p></p>
        This requirement is common enough that it is built into the useEffect
        Hook API. You can tell React to skip applying an effect if certain
        values haven’t changed between re-renders. To do so, pass an array as an
        optional second argument to useEffect:
      </div>
      <div className="examples ">
        <div>
          <Text.Orange>useEffect</Text.Orange>
          {"(() => {"} <br></br>
          <Text.Black nr_idents={1}></Text.Black>
          {"document.title = "}
          <Text.Green>`You clicked</Text.Green> {"${count}"}{" "}
          <Text.Green>times`</Text.Green>;"} <br></br>
          {"}, [count]);"}{" "}
          <Text.Grey>// Only re-run the effect if count changes</Text.Grey>
        </div>
      </div>
      <div>
        In the example above, we pass [count] as the second argument. What does
        this mean? If the count is 5, and then our component re-renders with
        count still equal to 5, React will compare [5] from the previous render
        and [5] from the next render. Because all items in the array are the
        same (5 === 5), React would skip the effect. That’s our optimization.
      </div>
      <h3> useRef</h3>
      <div className="examples">
        <div>
          <Text.Purple>const</Text.Purple> refContainer ={" "}
          <Text.Orange>useRef</Text.Orange>
          (initialState)
        </div>
      </div>
      <div>
        useRef returns a mutable ref object whose .current property is
        initialized to the passed argument (initialValue). The returned object
        will persist for the full lifetime of the component.
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple>
        <Text.Orange> TextInputWithFocusButton </Text.Orange> = () =>
        {" {"} <br></br>
        <Text.Purple nr_idents={1}>const</Text.Purple> inputEl ={" "}
        <Text.Orange>useRef</Text.Orange>
        (null);
        <br></br>
        <Text.Purple nr_idents={1}>const</Text.Purple>{" "}
        <Text.Orange>onButtonClick</Text.Orange> {"= () => {"}
        <br></br>
        <Text.Black nr_idents={2}> </Text.Black>
        inputEl.current.<Text.Orange>focus</Text.Orange>();>
        <br></br>
        <Text.Black nr_idents={1}>{"};"}</Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>
          <Text.Purple>return</Text.Purple>(
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={2}>{"<>"}</Text.Black>
        <br></br>
        <Text.Black nr_idents={3}>
          {"<"}
          <Text.Green>input</Text.Green> <Text.Purple>ref</Text.Purple>={"{"}
          <Text.Green>inputEl</Text.Green>
          {"}"} <Text.Purple>type</Text.Purple>=<Text.Blue>"text"</Text.Blue>
          {"/>"}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={3}>
          {"<"}
          <Text.Green>button</Text.Green> <Text.Purple>onClick</Text.Purple>=
          {"{"}
          <Text.Orange>onButtonClick</Text.Orange>
          {"}"}
          {">"} Focus the input {"</"}
          <Text.Green>button</Text.Green>
          {">"}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={2}>{"</>"}</Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>);</Text.Black>
        <br></br>
        {"}"}
      </div>
      <div>
        If you pass a ref object to React with {"<div ref={myRef} />"}, React
        will set its .current property to the corresponding DOM node whenever
        that node changes.
      </div>
      <div className="info center">
        <div>
          Option selected: <Text.Orange>{optionSelected}</Text.Orange>{" "}
        </div>
        <Dropdown
          title="pokemon list"
          name="pokemon"
          items={options}
          selected={optionSelected}
          clickOutside={true}
          callback={item => {
            setOptionSelected(item);
          }}
        ></Dropdown>
      </div>
      <div className="info center">
        <TabExample></TabExample>
      </div>
      <h3> useCallback</h3>
      <div className="examples">
        <Text.Purple>const</Text.Purple> memoizedCallback ={" "}
        <Text.Orange>useCallback</Text.Orange>( <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        {"() => {"} <br></br>
        <Text.Orange className="nr_idents2">doSomething</Text.Orange>(a, b);{" "}
        <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        {"},"}
        <br></br>
        <Text.Black className="nr_idents1"></Text.Black> [a, b], <br></br>
        );
      </div>
      <div>
        Returns a memoized callback.<p></p>
        Pass an inline callback and an array of dependencies. useCallback will
        return a memoized version of the callback that only changes if one of
        the dependencies has changed to prevent unnecessary renders.
        <p></p>
        useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
      </div>
      <h3> useMemo </h3>
      <div className="examples">
        <Text.Purple>const</Text.Purple> memoizedValue ={" "}
        <Text.Orange>useMemo</Text.Orange>(() => computeExpensiveValue(a, b),
        [a, b]);
      </div>
      <div>
        Returns a memoized value.<p></p>
        Pass a “create” function and an array of dependencies. useMemo will only
        recompute the memoized value when one of the dependencies has changed.
        This optimization helps to avoid expensive calculations on every render.
        <p></p>
        Remember that the function passed to useMemo runs during rendering.
      </div>
      <h3> useReducer</h3>
      <div className="examples">
        <Text.Purple>const</Text.Purple> [state, dispatch] ={" "}
        <Text.Orange>useReducer</Text.Orange>
        (reducer, initialState)
      </div>
      <div>
        An alternative to useState. Accepts a reducer of type (state, action) =>
        newState, and returns the current state paired with a dispatch method
        <p></p>
        useReducer is usually preferable to useState when you have complex state
        logic that involves multiple sub-values or when the next state depends
        on the previous one.
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> initialState = {"{count: "}
        <Text.Blue>0</Text.Blue>
        {"}"};<br></br>
        <p></p>
        <Text.Purple>function</Text.Purple> <Text.Orange>reducer</Text.Orange>
        (state, action) {"{"}
        <br></br>
        <Text.Purple nr_idents={1}>switch</Text.Purple> (action.type) {"{"}
        <br></br>
        <Text.Purple nr_idents={2}>case</Text.Purple>{" "}
        <Text.Blue>'increment'</Text.Blue>:<br></br>
        <Text.Purple nr_idents={3}>return</Text.Purple>{" "}
        {"{count: state.count + 1};"}
        <br></br>
        <Text.Purple nr_idents={2}>case</Text.Purple>{" "}
        <Text.Blue>'decrement'</Text.Blue>:<br></br>
        <Text.Purple nr_idents={3}>return</Text.Purple>{" "}
        {"{count: state.count - 1};"}
        <br></br>
        <Text.Purple nr_idents={2}>default:</Text.Purple>
        <br></br>
        <Text.Purple nr_idents={3}>throw new</Text.Purple>{" "}
        <Text.Orange>Error</Text.Orange>();
        <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black>
        <br></br>
        {"}"}
        <p></p>
        <Text.Purple>function</Text.Purple> <Text.Orange>Counter</Text.Orange>(){" "}
        {"{"}
        <br></br>
        <Text.Purple nr_idents={1}>const</Text.Purple> [state, dispatch] ={" "}
        <Text.Orange>useReducer</Text.Orange>(reducer, initialState);
        <br></br>
        <Text.Purple nr_idents={1}>return</Text.Purple> (<br></br>
        <Text.Black nr_idents={2}>{"<>"}</Text.Black>
        <br></br>
        <Text.Black nr_idents={3}>Count: {"{state.count}"}</Text.Black>
        <br></br>
        <Text.Black nr_idents={3}>
          {"<"}
          <Text.Green>button</Text.Green> <Text.Purple>onClick</Text.Purple>=
          {"{ () =>"} <Text.Orange>dispatch</Text.Orange>
          {"({"} <Text.Green>type</Text.Green>
          {": "} <Text.Blue>'decrement'</Text.Blue> {" })} "}
          {"/>"} - {"</"}
          <Text.Green>button</Text.Green>
          {">"}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={3}>
          {" "}
          {"<"}
          <Text.Green>button</Text.Green> <Text.Purple>onClick</Text.Purple>=
          {"{ () =>"} <Text.Orange>dispatch</Text.Orange>
          {"({"} <Text.Green>type</Text.Green>
          {": "} <Text.Blue>'increment'</Text.Blue> {" })} "}
          {"/>"} + {"</"}
          <Text.Green>button</Text.Green>
          {">"}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={2}>{"</>"}</Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>)</Text.Black>
        <br></br>
        {"}"}
      </div>
      <div className="info center">
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default ReactHooks;
