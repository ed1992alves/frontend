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
        <Text.Purple>return</Text.Purple> {"{"} <br></br>
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
      <div className="info">
        <ListaPokemonWithPagination></ListaPokemonWithPagination>
      </div>
    </div>
  );
};

export default Redux;
