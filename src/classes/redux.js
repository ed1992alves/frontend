import React, { useState } from "react";
import "../styles/main.less";
import "../styles/redux.less";
import * as Text from "../Utils/Text";
import Navigation from "./navigation";
import { ListaPokemonWithPagination } from "../components/listaPokemonWithPagination";

const Redux = ({ nr }) => {
  return (
    <div id="redux">
      {" "}
      <Navigation currentPage={nr}></Navigation>
      <h2>Actions</h2>
      <div>
        Actions are payloads of information that send data from your application
        to your store. They are the only source of information for the store.
        You send them to the store using store.dispatch().
      </div>
      <div className="examples">
        <Text.Black>{"{"}</Text.Black> <br></br>
        <Text.Black nr_idents={1}>
          type: <Text.Purple>ADD_TODO</Text.Purple>,
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>
          {" "}
          text: <Text.Green>'Build my first Redux app'</Text.Green>
        </Text.Black>{" "}
        <br></br>
        <Text.Black>{"}"}</Text.Black>
      </div>
      <div>
        Types should typically be defined as string constants. Once your app is
        large enough, you may want to move them into a separate module.
      </div>
      <h3>Action Creators</h3>
      <div>
        Action creators are exactly that—functions that create actions.{" "}
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple> <Text.Orange>addTodo</Text.Orange>{" "}
        (text) {"{"} <br></br>
        <Text.Black nr_idents={1}> return {"{"}</Text.Black> <br></br>
        <Text.Black nr_idents={2}>
          type: <Text.Purple>ADD_TODO</Text.Purple>, <br></br>
        </Text.Black>
        <Text.Black nr_idents={2}>text</Text.Black> <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black> <br></br>
        <Text.Black>{"}"}</Text.Black>
      </div>
      <div>This makes them portable and easy to test.</div>
      <h2>Dispatch</h2>
      <div>
        Dispatches an action. This is the only way to trigger a state change.
      </div>
      <div className="examples">
        <Text.Yellow>dispatch</Text.Yellow>(<Text.Yellow>addTodo</Text.Yellow>
        (text))
      </div>
      <h2>Reducer</h2>
      <div>
        Reducers specify how the application's state changes in response to
        actions sent to the store. Remember that actions only describe what
        happened, but don't describe how the application's state changes.
        <p></p>
        The reducer is a pure function that takes the previous state and an
        action, and returns the next state. Things you should never do inside a
        reducer:
        <ul>
          <li>Mutate its arguments;</li>
          <li>Perform side effects like API calls and routing transitions;</li>
          <li>Call non-pure functions, e.g. Date.now() or Math.random().</li>
        </ul>
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple> <Text.Yellow>todoApp</Text.Yellow>
        (state = initialState, action) {"{"} <br></br>
        <Text.Black nr_idents={1}>
          <Text.Purple>switch</Text.Purple> (action.type) {"{"}
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={2}>
          <Text.Purple> case </Text.Purple>{" "}
          <Text.Yellow>SET_VISIBILITY_FILTER</Text.Yellow>:
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={3}>
          <Text.Purple>return</Text.Purple> {"{"}{" "}
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={4}> ...state, </Text.Black> <br></br>
        <Text.Black nr_idents={4}>
          {" "}
          visibilityFilter: action.filter{" "}
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={3}>{"}"}) </Text.Black> <br></br>
        <Text.Black nr_idents={2}>
          <Text.Purple>default:</Text.Purple>
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={3}>
          {" "}
          <Text.Purple>return</Text.Purple> state
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={2}>{"}"} </Text.Black> <br></br>
        <Text.Black nr_idents={1}>{"}"} </Text.Black> <br></br>
      </div>
      <h2>Store</h2>
      <div>
        The Store is the object that brings them together. The store has the
        following responsibilities:
        <ul>
          <li>Holds application state;</li>
          <li>Allows access to state via getState();</li>
          <li>Allows state to be updated via dispatch(action);</li>
          <li>Registers listeners via subscribe(listener);</li>
        </ul>
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> store ={" "}
        <Text.Yellow>createStore</Text.Yellow>(todoApp, window.
        <Text.Purple>STATE_FROM_SERVER</Text.Purple>)
      </div>
      <div>
        {" "}
        You may optionally specify the initial state as the second argument to
        createStore()
      </div>
      <h2>Usage with React</h2>
      <h3>Provider</h3>
      <div>
        The {"<Provider /> "}makes the Redux store available to any nested
        components that have been wrapped in the connect() function. Since any
        React component in a React Redux app can be connected, most applications
        will render a {"<Provider>"} at the top level, with the entire app’s
        component tree inside of it.
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> store = createStore()
        <p></p>
        <Text.Black>
          ReactDOM.<Text.Yellow>render</Text.Yellow>(
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>
          {"<Provider store={"}
          <Text.Green>store</Text.Green>
          {"}>"}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={2}>{"<App />"}</Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>{"</Provider>,"}</Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>
          <Text.Green>document</Text.Green>.getElementById(
          <Text.Green>'root'</Text.Green>)
        </Text.Black>
        <br></br>)
      </div>
      <h3>Connect</h3>
      <div>
        The connect() function connects a React component to a Redux store.{" "}
        <p></p> It provides its connected component with the pieces of the data
        it needs from the store, and the functions it can use to dispatch
        actions to the store.
      </div>
      <div className="examples">
        <Text.Purple>function</Text.Purple> <Text.Orange>connect</Text.Orange>
        (mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
      </div>
      <div>
        The mapStateToProps and mapDispatchToProps deals with your Redux store’s
        state and dispatch, respectively.
      </div>
      <p></p>
      <h4>mapStateToProps</h4>
      <div>
        If a mapStateToProps function is specified, the new wrapper component
        will subscribe to Redux store updates. This means that any time the
        store is updated, mapStateToProps will be called.
        <p></p>
        <b>Parameters</b>
        <ul>
          <li>state</li>
          <li>ownProps</li>
        </ul>
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> mapStateToProps = state => ({"{"}{" "}
        todos: state.todos {"}"})
      </div>
      <p></p>
      <h4>mapDispatchToProps</h4>
      <div>
        <b>Parameters</b>
        <ul>
          {" "}
          <li>dispatch</li>
          <li>ownProps</li>
        </ul>
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> mapDispatchToProps = dispatch => {"{"}{" "}
        <br></br>
        <Text.Purple nr_idents={1}>return</Text.Purple> {"{"} <br></br>
        <Text.Black nr_idents={2}>
          increment: () => dispatch({"{"} type:{" "}
          <Text.Green>'INCREMENT'</Text.Green> {"}"})
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black>
        <br></br>
        <Text.Black>{"}"}</Text.Black>
      </div>
      <h2>Selectors</h2>
      <div>
        A “selector” is simply a function that accepts Redux state as an
        argument and returns data that is derived from that state.{" "}
      </div>
      <div className="examples">
        <Text.Black>
          selectUserIds = state => state.users.map(user => user.id);
        </Text.Black>
      </div>
      <h3>Reselect</h3>
      <div>Simple “selector” library for Redux </div>
      <ul>
        <li>
          Selectors can compute derived data, allowing Redux to store the
          minimal possible state.
        </li>
        <li>
          Selectors are efficient. A selector is not recomputed unless one of
          its arguments changes.
        </li>
        <li>
          Selectors are composable. They can be used as input to other
          selectors.
        </li>
      </ul>
      <div class="examples">
        <Text.Red>import</Text.Red> {"{ createSelector }"}{" "}
        <Text.Red>from </Text.Red> 'reselect' <br></br>
        <p></p>
        <Text.Red>const</Text.Red> <Text.Purple>shopItemsSelector</Text.Purple>{" "}
        = state => state.shop.items <br></br>
        <Text.Red>const</Text.Red> <Text.Purple>taxPercentSelector</Text.Purple>{" "}
        = state => state.shop.taxPercent <br></br> <p></p>
        <Text.Red>const</Text.Red> <Text.Orange>subtotalSelector</Text.Orange> =
        <Text.Purple> createSelector</Text.Purple>( <br></br>
        <Text.Orange nr_idents={1}>shopItemsSelector</Text.Orange>, <br></br>
        <Text.Black nr_idents={1}></Text.Black>items => items.
        <Text.Purple>reduce</Text.Purple>((subtotal, item) => subtotal +
        item.value, <Text.Green>0</Text.Green>) <br></br>)<p></p>
        <Text.Red>const</Text.Red> <Text.Orange>taxSelector</Text.Orange> =
        <Text.Purple> createSelector</Text.Purple>( <br></br>
        <Text.Orange nr_idents={1}>subtotalSelector</Text.Orange>, <br></br>
        <Text.Orange nr_idents={1}>taxPercentSelector</Text.Orange>, <br></br>
        <Text.Black nr_idents={1}></Text.Black> (subtotal, taxPercent) =>
        subtotal * (taxPercent /<Text.Green>100</Text.Green>) <br></br>)<p></p>
        <Text.Red>const</Text.Red> <Text.Orange>totalSelector</Text.Orange> =
        <Text.Purple> createSelector</Text.Purple>( <br></br>
        <Text.Orange nr_idents={1}>subtotalSelector</Text.Orange>, <br></br>
        <Text.Orange nr_idents={1}>taxSelector</Text.Orange>, <br></br>
        <Text.Black nr_idents={1}></Text.Black> (subtotal, tax) =>{" "}
        {"({ total: subtotal + tax })"} <br></br>)<p></p>
        <Text.Red>const</Text.Red> exampleState = {"{"}
        <br></br>
        <Text.Blue nr_idents={1}>shop</Text.Blue>: {"{"} <br></br>
        <Text.Blue nr_idents={2}>taxPercent</Text.Blue>: 8, <br></br>
        <Text.Blue nr_idents={2}>items</Text.Blue>: [ <br></br>
        <Text.Black nr_idents={3}></Text.Black>
        {"{"} <Text.Blue>name</Text.Blue>: <Text.Green>'apple'</Text.Green>,{" "}
        <Text.Blue>value</Text.Blue>: <Text.Green>1.20 </Text.Green> {"}"},{" "}
        <br></br>
        <Text.Black nr_idents={3}></Text.Black>
        {"{"} <Text.Blue>name</Text.Blue>: <Text.Green>'orange'</Text.Green>,{" "}
        <Text.Blue>value</Text.Blue>: <Text.Green>0.95 </Text.Green> {"}"},{" "}
        <br></br>
        <Text.Black nr_idents={2}></Text.Black>] <br></br>
        <Text.Black nr_idents={1}></Text.Black>} <br></br> }<p></p>
        console.<Text.Purple>log</Text.Purple>(
        <Text.Purple>subtotalSelector</Text.Purple>(exampleState)){" "}
        <Text.Grey>// 2.15</Text.Grey> <br></br>
        console.<Text.Purple>log</Text.Purple>(
        <Text.Purple>taxSelector</Text.Purple>(exampleState)){" "}
        <Text.Grey>// 0.172</Text.Grey> <br></br>
        console.<Text.Purple>log</Text.Purple>(
        <Text.Purple>totalSelector</Text.Purple>(exampleState)){" "}
        <Text.Grey>{"// { total: 2.322 }"}</Text.Grey>
      </div>
      <h2>React-Redux Hooks</h2>
      <div>
        React Redux now offers a set of hook APIs as an alternative to the
        existing connect() Higher Order Component. These APIs allow you to
        subscribe to the Redux store and dispatch actions, without having to
        wrap your components in connect()
      </div>
      <h3>useSelector()</h3>
      <div>
        Allows you to extract data from the Redux store state, using a selector
        function.
      </div>
      <div className="examples">
        <Text.Purple>const</Text.Purple> result: any = useSelector(selector:{" "}
        <Text.Green>Function</Text.Green>)
      </div>
      <div>
        The selector is approximately equivalent to the mapStateToProps. The
        selector will be called with the entire Redux store state as its only
        argument. The selector will be run whenever the function component
        renders. useSelector() will also subscribe to the Redux store, and run
        your selector whenever an action is dispatched.
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> React from{" "}
        <Text.Green>'react'</Text.Green>
        <br></br>
        <Text.Purple>import</Text.Purple> {"{ useSelector }"} from{" "}
        <Text.Green>'react-redux'</Text.Green>
        <br></br>
        <Text.Purple> export const</Text.Purple> CounterComponent = () => {"{"}{" "}
        <br></br>
        <Text.Black nr_idents={1}>
          const counter = <Text.Orange>useSelector</Text.Orange>(state =>
          state.counter){" "}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>return {"<div>{counter}</div>"}</Text.Black>
        <br></br>
        <Text.Black>{"}"}</Text.Black>
      </div>
      <h3>useDispatch()</h3>
      <div className="examples">
        <Text.Purple>const</Text.Purple> dispatch = useDispatch()
      </div>
      <div>
        This hook returns a reference to the dispatch function from the Redux
        store. You may use it to dispatch actions as needed.
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> React from{" "}
        <Text.Green>'react'</Text.Green>
        <br></br>
        <Text.Purple>import</Text.Purple> {"{ useDispatch }"} from{" "}
        <Text.Green>'react-redux'</Text.Green>
        <br></br>
        <Text.Purple>export const</Text.Purple> CounterComponent ={" "}
        {"({ value }) => {"} <br></br>
        <Text.Black nr_idents={1}>
          <Text.Purple>const</Text.Purple> dispatch ={" "}
          <Text.Orange>useDispatch</Text.Orange>()
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>
          {"return <"}
          <Text.Purple>button</Text.Purple>
          {" onClick={() => "}
          <Text.Orange>dispatch</Text.Orange>
          {"({ type: 'increment-counter' })}>Increment<"}
          <Text.Purple>/button></Text.Purple>
        </Text.Black>
        <br></br>
        {"}"}
      </div>
      <h2>Redux-thunk</h2>
      <div>
        Redux Thunk middleware allows you to write action creators that return a
        function instead of an action. The thunk can be used to delay the
        dispatch of an action, or to dispatch only if a certain condition is
        met. The inner function receives the store methods dispatch and getState
        as parameters.
        <p>
          An action creator that returns a function to perform asynchronous
          dispatch:
        </p>
      </div>
      <div className="examples">
        <Text.Red>const</Text.Red> <Text.Blue>INCREMENT_COUNTER</Text.Blue> ={" "}
        <Text.Green>'INCREMENT_COUNTER'</Text.Green>; <br></br>
        <p></p>
        <Text.Red>function </Text.Red>
        <Text.Purple>increment</Text.Purple>() {"{"}
        <br></br>
        <Text.Red nr_idents={1}>return </Text.Red> {"{"} <br></br>
        <Text.Orange nr_idents={2}>type</Text.Orange>:{" "}
        <Text.Blue>INCREMENT_COUNTER</Text.Blue>, <br></br>
        <Text.Black nr_idents={1}>{"};"}</Text.Black> <br></br>
        {"}"} <br></br>
        <p></p>
        <Text.Red>function </Text.Red>
        <Text.Purple>incrementAsync</Text.Purple>() {"{"}
        <br></br>
        <Text.Red nr_idents={1}>return </Text.Red> {"(dispatch) => {"} <br></br>
        <Text.Purple nr_idents={2}>setTimeout</Text.Purple>
        {"(() => {"} <br></br>
        <Text.Black nr_idents={3}>dispatch</Text.Black>(
        <Text.Purple>increment</Text.Purple>
        {"());"} <br></br>
        <Text.Black nr_idents={2}></Text.Black>
        {"}, "} <Text.Green>1000</Text.Green> {');"}'}
        <br></br>
        <Text.Black nr_idents={1}></Text.Black>
        {"}"} <br></br>
        {"}"} <br></br>
      </div>
      <div>
        An action creator that returns a function to perform conditional
        dispatch:
      </div>
      <div class="examples">
        {" "}
        <Text.Red>function </Text.Red>
        <Text.Purple>incrementIfOdd</Text.Purple>() {"{"}
        <br></br>
        <Text.Red nr_idents={1}>return </Text.Red> {"(dispatch, getState) => {"}{" "}
        <br></br>
        <Text.Red nr_idents={2}>const</Text.Red> {"{counter} = getState();"}{" "}
        <br></br>
        <Text.Red nr_idents={2}>{"if"}</Text.Red> {"(counter %"}{" "}
        <Text.Green>2</Text.Green> {"==="} <Text.Green>0</Text.Green> {")"}{" "}
        <br></br>
        <Text.Red nr_idents={3}>return</Text.Red>; <br></br>
        <Text.Black nr_idents={2}>{"}"}</Text.Black> <br></br>
        <Text.Black nr_idents={2}>dispatch</Text.Black>(
        <Text.Purple>increment</Text.Purple>
        {"());"} <br></br>
        <Text.Black nr_idents={1}></Text.Black>
        {"}"} <br></br>
        {"}"} <br></br>
      </div>
      <h3>What’s a thunk?!</h3>
      <div>
        A thunk is a function that wraps an expression to delay its evaluation.
      </div>
      <div class="examples">
        <Text.Red>let</Text.Red> x = <Text.Blue>1</Text.Blue> +{" "}
        <Text.Blue>2</Text.Blue> ; <br></br>
        <Text.Red>let</Text.Red> <Text.Purple>foo</Text.Purple> = () =>{" "}
        <Text.Blue>1</Text.Blue> + <Text.Blue>2</Text.Blue> ; <br></br>
      </div>
      <h3>Installation</h3>
      <div className="examples">
        <Text.Red>const</Text.Red> store ={" "}
        <Text.Purple>createStore</Text.Purple>(rootReducer,
        <Text.Purple>applyMiddleware</Text.Purple>(thunk));
      </div>
      <div className="info">
        <ListaPokemonWithPagination></ListaPokemonWithPagination>
      </div>
    </div>
  );
};

export default Redux;
