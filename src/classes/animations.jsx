import React, { useState } from "react";
import "../styles/animations.less";
import * as Text from "../Utils/Text";

const getSpeedText = speed =>
  speed === "cubic" ? "cubic-bezier(0.05, 1.81, 1, -1.05)" : speed;

const Animations = () => {
  const [speed, setSpeed] = useState("ease");
  const [nrRepetitions, setNrRepetitions] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState("ease");
  const [direction, setDirection] = useState("normal");
  return (
    <>
      <h2> Transition Property </h2>

      <div>
        {" "}
        If you just want a simple action on your site, a transition is the
        easiest way to go. Transitions are connected to a triggering action —
        most commonly, when the mouse hovers over an element. In that case, the
        :hover pseudo class is used to change the CSS property value, causing
        the element to react as desired.
      </div>

      <h3>Single Property </h3>

      <div className="examples with-example">
        <div className="content">
          <Text.Yellow>selector </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>transition: </Text.Blue>{" "}
          <Text.Orange>transform 2s;</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(0deg);</Text.Orange>
          <br></br> {"}"}
          <p></p>
          <Text.Yellow>selector:hover </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(360deg);</Text.Orange>
          <br></br> {"}"}
        </div>
        <div className="example loader"></div>
      </div>

      <h3>Multiple Property</h3>

      <div className="examples with-example">
        <div className="content">
          <Text.Yellow>selector </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>transition: </Text.Blue>{" "}
          <Text.Orange>transform 2s, border-top 2s;</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(0deg);</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>border-top: </Text.Blue>{" "}
          <Text.Orange>azul;</Text.Orange>
          <br></br>
          {"}"}
          <p></p>
          <Text.Yellow>selector:hover </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(360deg);</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>border-top: </Text.Blue>{" "}
          <Text.Orange>red;</Text.Orange>
          <br></br> {"}"}
        </div>
        <div className="example loader with-border"></div>
      </div>

      <h3>Speed Curve</h3>

      <div className="info">
        <p>
          <b
            id="ease"
            className={speed === "ease" ? "active" : null}
            onClick={() => setSpeed("ease")}
          >
            ease
          </b>{" "}
          - (default) slow start, then fast, then end slowly
        </p>
        <p>
          <b
            id="linear"
            className={speed === "linear" ? "active" : null}
            onClick={() => setSpeed("linear")}
          >
            linear
          </b>{" "}
          - same speed from start to end
        </p>
        <p>
          <b
            id="ease-in"
            className={speed === "ease-in" ? "active" : null}
            onClick={() => setSpeed("ease-in")}
          >
            ease-in
          </b>{" "}
          - slow start
        </p>
        <p>
          <b
            id="ease-out"
            className={speed === "ease-out" ? "active" : null}
            onClick={() => setSpeed("ease-out")}
          >
            ease-out
          </b>{" "}
          - slow end
        </p>
        <p>
          <b
            id="ease-in-out"
            className={speed === "ease-in-out" ? "active" : null}
            onClick={() => setSpeed("ease-in-out")}
          >
            ease-in-out
          </b>{" "}
          - slow start and end
        </p>
        <p>
          <b
            id="cubic"
            className={speed === "cubic" ? "active" : null}
            onClick={() => setSpeed("cubic")}
          >
            cubic-bezier(n,n,n,n)
          </b>{" "}
          - lets you define your own values in a cubic-bezier function
        </p>
      </div>
      <div className="examples with-example">
        <div className="content">
          <Text.Yellow>selector </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>transition: </Text.Blue>{" "}
          <Text.Orange>
            transform 3s {getSpeedText(speed)}, border-top 3s{" "}
            {getSpeedText(speed)};
          </Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(0deg);</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>border-top: </Text.Blue>{" "}
          <Text.Orange>azul;</Text.Orange>
          <br></br>
          {"}"}
          <p></p>
          <Text.Yellow>selector:hover </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(360deg);</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>border-top: </Text.Blue>{" "}
          <Text.Orange>red;</Text.Orange>
          <br></br> {"}"}
        </div>
        <div className={`example loader with-border ${speed}`}></div>
      </div>

      <h3>Delay</h3>

      <div className="examples with-example">
        <div className="content">
          <Text.Yellow>selector </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>transition: </Text.Blue>{" "}
          <Text.Orange>
            transform 3s ease 1s, border-top 3s ease 1s;
          </Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(0deg);</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>border-top: </Text.Blue>{" "}
          <Text.Orange>azul;</Text.Orange>
          <br></br>
          {"}"}
          <p></p>
          <Text.Yellow>selector:hover </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(360deg);</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={1}>border-top: </Text.Blue>{" "}
          <Text.Orange>red;</Text.Orange>
          <br></br> {"}"}
        </div>
        <div className={`example loader with-border delay`}></div>
      </div>
      <h3>Exercise: Input</h3>
      <div className="exercise">
        <input />
      </div>
      <h2> Animation Property </h2>
      <div>
        Animations are more complicated, but will also give you more flexibility
        — the more flexible, the more parts involved. With CSS animations, you
        can set different stages that alter the behavior of the element multiple
        times in its duration. This gives you more control over the property
        values in animations.
      </div>
      <h3> From To </h3>
      <div className="examples with-example">
        <div className="content">
          <Text.Yellow>@keyframes example </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Yellow nr_idents={1}>from</Text.Yellow>
          {" {"}
          <Text.Blue>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(0deg);</Text.Orange>
          {"}"}
          <br></br>
          <Text.Yellow nr_idents={1}>to</Text.Yellow>
          {" {"}
          <Text.Blue>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(360deg);</Text.Orange>
          {"}"}
          <br></br>
          {"}"}
          <p></p>
          <Text.Yellow>selector </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>animation: </Text.Blue>{" "}
          <Text.Orange>example 2s;</Text.Orange>
          <br></br>
          {"}"}
        </div>
        <div className={`example loader with-animation`}></div>
      </div>

      <h3> With Multiple Breakpoints </h3>
      <div className="examples with-example">
        <div className="content">
          <Text.Yellow>@keyframes example </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Yellow nr_idents={1}>0%</Text.Yellow>
          {" {"}
          <br></br>
          <Text.Blue nr_idents={2}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(0deg);</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={2}>border-top: </Text.Blue>{" "}
          <Text.Orange>16px solid blue;</Text.Orange>
          <br></br>
          <Text.Black nr_idents={1}>{"}"}</Text.Black>
          <br></br>
          <Text.Yellow nr_idents={1}>33%</Text.Yellow>
          {" {"}
          <Text.Blue>border-top: </Text.Blue>{" "}
          <Text.Orange>16px solid pink;</Text.Orange>
          {"}"}
          <br></br>
          <Text.Yellow nr_idents={1}>50%</Text.Yellow>
          {" {"}
          <Text.Blue>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(360deg);</Text.Orange>
          {"}"}
          <br></br>
          <Text.Yellow nr_idents={1}>66%</Text.Yellow>
          {" {"}
          <Text.Blue>border-top: </Text.Blue>{" "}
          <Text.Orange>16px solid orange;</Text.Orange>
          {"}"}
          <br></br>
          <Text.Yellow nr_idents={1}>100%</Text.Yellow>
          {" {"}
          <br></br>
          <Text.Blue nr_idents={2}>transform: </Text.Blue>{" "}
          <Text.Orange>rotate(0deg);</Text.Orange>
          <br></br>
          <Text.Blue nr_idents={2}>border-top: </Text.Blue>{" "}
          <Text.Orange>16px solid black;</Text.Orange>
          <br></br>
          <Text.Black nr_idents={1}>{"}"}</Text.Black>
          <br></br>
          {"}"}
          <p></p>
          <Text.Yellow>selector </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>animation: </Text.Blue>{" "}
          <Text.Orange>example 5s;</Text.Orange>
          <br></br>
          {"}"}
        </div>
        <div
          className={`example loader with-animation with-animation-breakpoints`}
        ></div>
      </div>
      <h3> Number of repetitions / Speed / Direction </h3>
      <div className="info flex-container">
        <div className="flex-column">
          <h4>Repetitions</h4>
          <br></br>
          <input
            type="radio"
            onClick={() => setNrRepetitions(1)}
            name="nr_repetitions"
          ></input>
          1<br></br>
          <input
            type="radio"
            onClick={() => setNrRepetitions(5)}
            name="nr_repetitions"
          ></input>
          5<br></br>
          <input
            type="radio"
            onClick={() => setNrRepetitions("infinite")}
            name="nr_repetitions"
          ></input>
          Infinite
        </div>
        <div className="flex-column">
          <h4>Speed</h4>
          <br></br>
          <input
            type="radio"
            onClick={() => setAnimationSpeed("ease")}
            name="animationSpeed"
          ></input>
          ease<br></br>
          <input
            type="radio"
            onClick={() => setAnimationSpeed("linear")}
            name="animationSpeed"
          ></input>
          linear<br></br>
          <input
            type="radio"
            onClick={() => setAnimationSpeed("ease-in")}
            name="animationSpeed"
          ></input>
          ease-in <br></br>
          <input
            type="radio"
            onClick={() => setAnimationSpeed("ease-out")}
            name="animationSpeed"
          ></input>
          ease-out <br></br>
          <input
            type="radio"
            onClick={() => setAnimationSpeed("ease-in-out")}
            name="animationSpeed"
          ></input>
          ease-in-out <br></br>
          <input
            type="radio"
            onClick={() => setAnimationSpeed("cubic-bezier")}
            name="animationSpeed"
          ></input>
          cubic-bezier
        </div>
        <div className="flex-column">
          <h4>Direction</h4>
          <br></br>
          <input
            type="radio"
            onClick={() => setDirection("normal")}
            name="direction"
          ></input>
          normal<br></br>
          <input
            type="radio"
            onClick={() => setDirection("reverse")}
            name="direction"
          ></input>
          reverse<br></br>
          <input
            type="radio"
            onClick={() => setDirection("alternate")}
            name="direction"
          ></input>
          alternate <br></br>
          <input
            type="radio"
            onClick={() => setDirection("alternate-reverse")}
            name="direction"
          ></input>
          alternate-reverse
        </div>
      </div>

      <div className="examples with-example">
        <div className="content">
          <Text.Yellow>div </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={2}>animation: </Text.Blue>{" "}
          <Text.Orange>
            example 2s {getSpeedText(animationSpeed)} 0s {nrRepetitions}{" "}
            {direction};
          </Text.Orange>
          <br></br>
          <Text.Black>{"}"}</Text.Black>
        </div>
        <div
          className={`example loader with-animation ${getSpeedText(
            animationSpeed
          )} nr_repetitions_${nrRepetitions} ${direction}`}
        ></div>
      </div>
      <h3>Exercise: The Square</h3>
      <div className="exercise">
        <div id="square"></div>
      </div>
    </>
  );
};

export default Animations;
