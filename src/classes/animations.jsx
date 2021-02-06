import React, { useState } from "react";
import "../styles/animations.less";
import * as Text from "../Utils/Text";
import Navigation from "./navigation";

const Animations = ({ nr }) => {
  const [speed, setSpeed] = useState("ease");
  return (
    <>
      <Navigation currentPage={nr}></Navigation>

      <h2> Transition Property </h2>

      <h3>Single Property </h3>

      <div class="examples with-example">
        <div class="content">
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
        <div class="example loader"></div>
      </div>

      <h3>Multiple Property</h3>

      <div class="examples with-example">
        <div class="content">
          <Text.Yellow>selector </Text.Yellow>
          {"{"}
          <br></br>
          <Text.Blue nr_idents={1}>transition: </Text.Blue>{" "}
          <Text.Orange>transform 2s border-top 2s;</Text.Orange>
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
        <div class="example loader with-border"></div>
      </div>

      <h3>Speed Curve</h3>

      <div class="info">
        <p>
          <b id="ease" class="active">
            ease
          </b>{" "}
          - (default) slow start, then fast, then end slowly
        </p>
        <p>
          <b id="linear">linear</b> - same speed from start to end
        </p>
        <p>
          <b id="ease-in">ease-in</b> - slow start
        </p>
        <p>
          <b id="ease-out">ease-out</b> - slow end
        </p>
        <p>
          <b id="ease-in-out">ease-in-out</b> - slow start and end
        </p>
        <p>
          <b id="cubic">cubic-bezier(n,n,n,n)</b> - lets you define your own
          values in a cubic-bezier function
        </p>
      </div>
      <div class="loader with-border"></div>
    </>
  );
};

export default Animations;
