import React, { useState } from "react";
import "../styles/html.less";
import * as Text from "../Utils/Text";
import Navigation from "./navigation";
import { PokemonCard } from "../exercises/pokemon";

const FetchApi = ({ nr }) => {
  return (
    <>
      <Navigation currentPage={nr}></Navigation>
      <h2>Fetch API</h2>
      <div>
        The Fetch API provides a JavaScript interface for accessing and
        manipulating parts of the HTTP pipeline, such as requests and responses.
        It also provides a global fetch() method that provides an easy, logical
        way to fetch resources asynchronously across the network.
      </div>
      <div className="examples">
        <Text.Orange>fetch</Text.Orange>(
        <Text.Green>'http://example.com/movies.json'</Text.Green>)<br></br>
        <Text.Black className="nr_idents1">
          .<Text.Orange>then</Text.Orange>.((response) => {"{"}
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents2">
          return response.<Text.Orange>json</Text.Orange>();
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents1">{"}"})</Text.Black> <br></br>
      </div>

      <div>
        The fetch() method can optionally accept a second parameter, an init
        object that allows you to control a number of different settings:
      </div>
      <div className="examples">
        <Text.Grey>// Default options are marked with *</Text.Grey> <br></br>
        <Text.Blue>await</Text.Blue> <Text.Orange>fetch</Text.Orange>( url,{" "}
        {"{"} <br></br>
        <Text.Black className="nr_idents1">
          method: <Text.Green>'POST'</Text.Green>,{" "}
          <Text.Grey>// *GET, POST, PUT, DELETE, etc.</Text.Grey>
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">
          mode: <Text.Green>'cors'</Text.Green>,{" "}
          <Text.Grey>// no-cors, *cors, same-origin </Text.Grey>
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents1">
          cache: <Text.Green>'no-cache'</Text.Green>,{" "}
          <Text.Grey>// *default, no-cache, reload, force-cache</Text.Grey>
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents1">
          credentials: <Text.Green>'same-origin'</Text.Green>,{" "}
          <Text.Grey>// include, *same-origin, omit</Text.Grey>
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents1">headers: {"{}"},</Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">
          redirect: <Text.Green>'follow'</Text.Green>,{" "}
          <Text.Grey>// manual, *follow, error</Text.Grey>
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents1">
          referrerPolicy: <Text.Green>'no-referrer'</Text.Green>,
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents1">
          body: JSON.<Text.Orange>stringify</Text.Orange>(data) // body data
          type must match "Content-Type" header
        </Text.Black>{" "}
        <br></br>
        {"}"});
      </div>
      <div>
        It returns a Promise that resolves to the Response to that request,
        whether it is successful or not.
        <p></p>A Promise is an object representing the eventual completion or
        failure of an asynchronous operation.
      </div>

      <h2>Promise.prototype.then()</h2>
      <div>
        The then() method returns a Promise. It takes up to two arguments:
        callback functions for the success and failure cases of the Promise.
      </div>
      <div class="examples">
        <Text.Black>
          <Text.Blue>var</Text.Blue> p1 = <Text.Blue>new</Text.Blue>{" "}
          <Text.Orange>Promise</Text.Orange>
          ((resolve, reject) => {"{"}
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">
          <Text.Orange>resolve</Text.Orange>(<Text.Green>'Success!'</Text.Green>
          );
        </Text.Black>{" "}
        <br></br>
        <Text.Black>{"}"});</Text.Black>
        <br></br>
        <p></p>
        <Text.Black>
          p1.<Text.Orange>then</Text.Orange>(value => {"{"}
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">
          console.<Text.Orange>log</Text.Orange>(value);{" "}
          <Text.Grey>// Success!</Text.Grey>
        </Text.Black>
        <br></br>
        <Text.Black>{"} , reason => {"}</Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">
          console.<Text.Orange>error</Text.Orange>(reason);{" "}
          <Text.Grey>// Error!</Text.Grey>
        </Text.Black>{" "}
        <br></br>
        <Text.Black>{"}"});</Text.Black>
      </div>
      <div>
        <b>Chaining:</b> Since the then method return a Promise that allows to
        chain
      </div>

      <div class="examples">
        <Text.Black>
          <Text.Blue>var</Text.Blue> p2 = <Text.Blue>new</Text.Blue>{" "}
          <Text.Orange>Promise</Text.Orange>
          ((resolve, reject) => {"{"}
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents1">
          <Text.Orange>resolve</Text.Orange>(<Text.Purple>1</Text.Purple>);
        </Text.Black>{" "}
        <br></br>
        <Text.Black>{"}"});</Text.Black>
        <p></p>
        <Text.Black>
          p2.<Text.Orange>then</Text.Orange>(<Text.Blue>function</Text.Blue>
          (value) {"{"}
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents1 hover">
          console.<Text.Orange>log</Text.Orange>(value);{" "}
        </Text.Black>
        <Text.Grey>//1</Text.Grey>
        <br></br>
        <Text.Black className="nr_idents1">
          <Text.Blue>return</Text.Blue> value + <Text.Purple>1</Text.Purple>;
        </Text.Black>
        <br></br>
        <Text.Black>
          {"}"}.<Text.Orange>then</Text.Orange>(<Text.Blue>function</Text.Blue>
          (value){"{"}{" "}
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents1 hover">
          console.<Text.Orange>log</Text.Orange>(value){" "}
        </Text.Black>
        <Text.Grey>//2</Text.Grey>
        <br></br>
        <Text.Black>{"}"});</Text.Black>
      </div>
      <h2>Promise.all()</h2>
      <div>
        The Promise.all() method returns a single Promise that fulfills when all
        of the promises passed as an iterable have been fulfilled or when the
        iterable contains no promises or when the iterable contains promises
        that have been fulfilled and non-promises that have been returned.
      </div>
      <div class="examples">
        <Text.Black>
          <Text.Blue>const</Text.Blue> promise1 = Promise.
          <Text.Orange>resolve</Text.Orange>(<Text.Purple>3</Text.Purple>);
        </Text.Black>{" "}
        <br></br>
        <Text.Black>
          <Text.Blue>const</Text.Blue> promise2 = <Text.Purple>42</Text.Purple>;
        </Text.Black>
        <br></br>
        <Text.Black>
          <Text.Blue>const</Text.Blue> promise3 = <Text.Blue>new</Text.Blue>{" "}
          <Text.Orange>Promise</Text.Orange>(<Text.Blue>function</Text.Blue>
          (resolve, reject) {"{"}
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">
          <Text.Orange>setTimeout</Text.Orange>(resolve, 100,{" "}
          <Text.Green>'foo'</Text.Green>);
        </Text.Black>
        <br></br>
        <Text.Black>{"}"});</Text.Black>
        <p></p>
        <Text.Black>
          Promise.<Text.Orange>all</Text.Orange>([promise1, promise2,
          promise3]).
          <Text.Orange>then</Text.Orange>(<Text.Blue>function</Text.Blue>
          (values) {"{"}
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">
          console.<Text.Orange>log</Text.Orange>(values);{" "}
          <Text.Grey>// expected output: Array [3, 42, "foo"]</Text.Grey>
        </Text.Black>{" "}
        <br></br>
        <Text.Black>{"}"});</Text.Black>
      </div>

      <h2>Fetch with Hooks</h2>
      <div class="examples">
        <Text.Black>
          <Text.Blue>const</Text.Blue> [hasError, setErrors] ={" "}
          <Text.Orange>useState</Text.Orange>(<Text.Green>false</Text.Green>);
        </Text.Black>{" "}
        <br></br>
        <Text.Black>
          <Text.Blue>const</Text.Blue> [planets, setPlanets] ={" "}
          <Text.Orange>useState</Text.Orange>({"{}"});
        </Text.Black>
        <p></p>
        <Text.Black>
          <Text.Blue>async function</Text.Blue>{" "}
          <Text.Orange>fetchData</Text.Orange>() {"{"}
        </Text.Black>{" "}
        <br></br>
        <Text.Black>
          {" "}
          <Text.Blue>const</Text.Blue> res = <Text.Blue>await</Text.Blue>{" "}
          <Text.Orange>fetch</Text.Orange>(
          <Text.Green>"https://swapi.co/api/planets/4/"</Text.Green>);
        </Text.Black>{" "}
        <br></br>
        <Text.Black>res</Text.Black> <br></br>
        <Text.Black className="nr_idents1">
          .<Text.Orange>json</Text.Orange>()
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">
          .<Text.Orange>then</Text.Orange>(res =>{" "}
          <Text.Orange>setPlanets</Text.Orange>(res))
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">
          .<Text.Orange>catch</Text.Orange>(err =>{" "}
          <Text.Orange>setErrors</Text.Orange>(err));
          <Text.Grey> //Promise.prototype.catch()</Text.Grey>
        </Text.Black>
        <br></br>
        <Text.Black>{"}"}</Text.Black>
        <p></p>
        <Text.Black>
          <Text.Orange>useEffect</Text.Orange>(() => {"{"}
        </Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents1">
          <Text.Orange>fetchData</Text.Orange>();
        </Text.Black>{" "}
        <br></br>
        <Text.Black>{"}"});</Text.Black>
      </div>
      <div class="info center">
        <PokemonCard></PokemonCard>
      </div>
    </>
  );
};

export default FetchApi;
