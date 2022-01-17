import React, { useState, useEffect } from "react";
import "../styles/css.less";
import * as Text from "../Utils/Text";
import vader from "../styles/images/darth_vader.png";
import leia from "../styles/images/leia.png";
import chewbacca from "../styles/images/chewbacca.png";
import c3po from "../styles/images/c3po.png";
import bounty from "../styles/images/bounty_hunter.png";

const Css = () => {
  const [boxSizing, setBoxSizing] = useState("content");
  const [display, setDisplay] = useState("block");
  const [flexDirection, setFlexDirection] = useState("row");
  const [wrap, setWrap] = useState("nowrap");
  const [justifyContent, setJustifyContent] = useState("justifyContent");
  const [alignItems, setAlignItems] = useState("alignItems");
  const [order, setOrder] = useState("1");
  const [flexGrow, setFlexGrow] = useState("");
  const [alignSelf, setAlignSelf] = useState("auto");
  const [position, setPosition] = useState("static");
  const [top, setTop] = useState(false);
  const [left, setLeft] = useState(false);

  return (
    <>
      <h2>Box Model </h2>
      <div>
        {" "}
        The CSS box model is essentially a box that wraps around every HTML
        element. It consists of: margins, borders, padding, and the actual
        content. The image below illustrates the box model:
      </div>
      <div className="examples">
        <Text.Orange>width: </Text.Orange>
        <Text.Blue>300px;</Text.Blue>
        <br></br>
        <Text.Orange>border: </Text.Orange>
        <Text.Blue>15px solid green;</Text.Blue>
        <br></br>
        <Text.Orange>padding: </Text.Orange>
        <Text.Blue>50px;</Text.Blue>
        <br></br>
        <Text.Orange>margin: </Text.Orange>
        <Text.Blue>20px;</Text.Blue>
        <br></br>
      </div>

      <div id="boxModel">
        <div id="margin" className="square">
          {" "}
          MARGIN{" "}
        </div>
        <div id="border" className="square">
          {" "}
          BORDER{" "}
        </div>
        <div id="padding" className="square">
          {" "}
          PADDING{" "}
        </div>
        <div id="content" className="square">
          CONTENT{" "}
        </div>
      </div>

      <h3>Box Sizing Property</h3>
      <div>
        <ul>
          <li>
            <b>content-box</b> gives you the default CSS box-sizing behavior. If
            you set an element's width to 100 pixels, then the element's content
            box will be 100 pixels wide, and the width of any border or padding
            will be added to the final rendered width, making the element wider
            than 100px.{" "}
          </li>
          <li>
            <b>border-box</b> tells the browser to account for any border and
            padding in the values you specify for an element's width and height.
            If you set an element's width to 100 pixels, that 100 pixels will
            include any border or padding you added, and the content box will
            shrink to absorb that extra width. This typically makes it much
            easier to size elements.
          </li>
        </ul>
        <div className="examples">
          <input
            type="radio"
            onClick={() => setBoxSizing("content")}
            name="box-sizing"
            value="content"
          ></input>
          <Text.Orange>box-sizing: </Text.Orange>
          <Text.Blue>content-box;</Text.Blue>
          <br></br>
          <input
            type="radio"
            onClick={() => setBoxSizing("border")}
            name="box-sizing"
            value="border"
          ></input>
          <Text.Orange>box-sizing: </Text.Orange>
          <Text.Blue>border-box</Text.Blue>
          <br></br>
          <Text.Orange>border: </Text.Orange>
          <Text.Blue>solid #5B6DCD 10px;</Text.Blue>
          <br></br>
          <Text.Orange>padding: </Text.Orange>
          <Text.Blue>5px;</Text.Blue>
          <br></br>
          <Text.Orange>width: </Text.Orange>
          <Text.Blue>100%;</Text.Blue>
          <br></br>
        </div>

        <div id="father">
          {" "}
          PARENT CONTAINER
          <div className={`son ${boxSizing}`}> CHILD CONTAINER</div>
        </div>
      </div>

      <h2>Display Property</h2>

      <h3>Block vs Inline </h3>

      <div>
        <b>Block: </b>Takes up the full width available, with a new line before
        and after (display:block;)
        <br></br> <b>HTML: div, p </b>
        <p></p>
        <b>Inline: </b>Takes up only as much width as it needs, and does not
        force new lines (display:inline;)
        <br></br> <b>HTML: span, img </b>
        <p></p>
        <b>Inline-Block: </b>It’s formatted just like the inline element, but
        you can set width and height values.
      </div>

      <div className="examples">
        <input
          type="radio"
          onClick={() => setDisplay("box")}
          name="display"
        ></input>
        <Text.Orange>display: </Text.Orange>
        <Text.Blue>block;</Text.Blue>
        <br></br>
        <input
          type="radio"
          onClick={() => setDisplay("inline")}
          name="display"
        ></input>
        <Text.Orange>display: </Text.Orange>
        <Text.Blue>inline;</Text.Blue>
        <br></br>
        <input
          type="radio"
          onClick={() => setDisplay("inlineblock")}
          name="display"
        ></input>
        <Text.Orange>display: </Text.Orange>
        <Text.Blue>inline-block;</Text.Blue>
        <br></br>
      </div>

      <div id="father_display">
        <div id="vader" className={display}>
          <img src={vader} />{" "}
        </div>
        <div id="leia" className={display}>
          {" "}
          <img src={leia} />
        </div>
        <div id="chewbacca" className={display}>
          {" "}
          <img src={chewbacca} />
        </div>
      </div>

      <h3>Flex</h3>

      <div>
        <h4> Properties from the parent </h4>
        <p></p>
        <b>flex-direction: </b> This establishes the main-axis, thus defining
        the direction flex items are placed in the flex container.
        <br></br>
        <div className="examples">
          <input
            type="radio"
            onClick={() => setFlexDirection("row")}
            name="display"
          ></input>
          <Text.Green>row </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setFlexDirection("column")}
            name="display"
          ></input>
          <Text.Green>colum </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setFlexDirection("row-reverse")}
            name="display"
          ></input>
          <Text.Green>row-reverse </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setFlexDirection("column-reverse")}
            name="display"
          ></input>
          <Text.Green>column-reverse </Text.Green>
          <br></br>
        </div>
        <div id="father_display" className={`flex ${flexDirection}`}>
          <div id="vader">
            <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            <img src={chewbacca} />
          </div>
        </div>
        <b>flex-wrap:</b> By default, flex items will all try to fit onto one
        line. You can change that and allow the items to wrap as needed with
        this property.
        <br></br>
        <div className="examples">
          <input
            type="radio"
            onClick={() => setWrap("nowrap")}
            name="display"
          ></input>
          <Text.Green>nowrap </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setWrap("wrap")}
            name="display"
          ></input>
          <Text.Green>wrap </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setWrap("wrap-reverse")}
            name="display"
          ></input>
          <Text.Green>wrap-reverse </Text.Green>
          <br></br>
        </div>
        <div id="father_display" className={`flex ${wrap}`}>
          <div id="vader">
            <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            <img src={chewbacca} />
          </div>
          <div id="c3po">
            {" "}
            <img src={c3po} />
          </div>
          <div id="vader">
            <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            <img src={chewbacca} />
          </div>
          <div id="c3po">
            {" "}
            <img src={c3po} />
          </div>
          <div id="vader">
            <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            <img src={chewbacca} />
          </div>
          <div id="c3po">
            {" "}
            <img src={c3po} />
          </div>
          <div id="vader">
            <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            <img src={chewbacca} />
          </div>
          <div id="c3po">
            {" "}
            <img src={c3po} />
          </div>
          <div id="vader">
            <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            <img src={chewbacca} />
          </div>
          <div id="c3po">
            {" "}
            <img src={c3po} />
          </div>
        </div>
        <b>justify-content</b> This defines the alignment along the main axis.
        It helps distribute extra free space leftover when either all the flex
        items on a line are inflexible, or are flexible but have reached their
        maximum size. It also exerts some control over the alignment of items
        when they overflow the line.
        <br></br>
        <div className="examples">
          <input
            type="radio"
            onClick={() => setJustifyContent("flex-start")}
            name="display"
          ></input>
          <Text.Green>flex-start </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setJustifyContent("flex-end")}
            name="display"
          ></input>
          <Text.Green>flex-end </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setJustifyContent("space-between")}
            name="display"
          ></input>
          <Text.Green>space-between </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setJustifyContent("space-around")}
            name="display"
          ></input>
          <Text.Green>space-around</Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setJustifyContent("space-evenly")}
            name="display"
          ></input>
          <Text.Green>space-evenly </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setJustifyContent("center")}
            name="display"
          ></input>
          <Text.Green>center </Text.Green>
          <br></br>
        </div>
        <div id="father_display" className={`flex justify ${justifyContent}`}>
          <div id="vader">
            <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            <img src={chewbacca} />
          </div>
          <div id="c3po">
            {" "}
            <img src={c3po} />
          </div>
          <div id="bounty">
            <img src={bounty}></img>
          </div>
        </div>
        <b>align-items</b> This defines the default behavior for how flex items
        are laid out along the cross axis on the current line. Think of it as
        the justify-content version for the cross-axis (perpendicular to the
        main-axis).
        <div className="examples">
          <input
            type="radio"
            onClick={() => setAlignItems("flex-start")}
            name="display"
          ></input>
          <Text.Green>flex-start </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setAlignItems("flex-end")}
            name="display"
          ></input>
          <Text.Green>flex-end </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setAlignItems("strech")}
            name="display"
          ></input>
          <Text.Green>strech </Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setAlignItems("center")}
            name="display"
          ></input>
          <Text.Green>center</Text.Green>
          <br></br>
          <input
            type="radio"
            onClick={() => setAlignItems("baseline")}
            name="display"
          ></input>
          <Text.Green>baseline</Text.Green>
          <br></br>
        </div>
        <div id="father_display" className={`flex align ${alignItems}`}>
          <div id="vader">
            Vader <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            Leia
            <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            Chewbacca
            <img src={chewbacca} />
          </div>
          <div id="c3po">
            {" "}
            C3PO
            <img src={c3po} />
          </div>
          <div id="bounty">
            Bounty Hunter<img src={bounty}></img>
          </div>
        </div>
        <p></p>
        <h4> Properties from the children </h4>
        <b>order</b> By default, flex items are laid out in the source order.
        However, the order property controls the order in which they appear in
        the flex container.
        <br></br>
        <div className="examples">
          <input
            type="radio"
            onClick={() => setOrder("1")}
            name="display"
          ></input>
          <Text.Green>order: </Text.Green>
          <Text.Orange>1</Text.Orange>
          <br></br>
          <input
            type="radio"
            onClick={() => setOrder("2")}
            name="display"
          ></input>
          <Text.Green>order: </Text.Green>
          <Text.Orange>2</Text.Orange>
          <br></br>
          <input
            type="radio"
            onClick={() => setOrder("3")}
            name="display"
          ></input>
          <Text.Green>order: </Text.Green>
          <Text.Orange>3</Text.Orange>
          <br></br>
          <input
            type="radio"
            onClick={() => setOrder("4")}
            name="display"
          ></input>
          <Text.Green>order: </Text.Green>
          <Text.Orange>4</Text.Orange>
          <br></br>{" "}
        </div>
        <div id="father_display" className={`flex order order${order}`}>
          <div id="vader">
            {" "}
            <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            <img src={chewbacca} />
          </div>
        </div>
        <p></p>
        <b>flex-grow</b> This defines the ability for a flex item to grow if
        necessary. It accepts a unitless value that serves as a proportion. It
        dictates what amount of the available space inside the flex container
        the item should take up.
        <br></br>
        <div id="father_display" className={`flex `}>
          <div id="vader" className={flexGrow === "vader" ? "flex-grow" : ""}>
            {" "}
            <img src={vader} onClick={() => setFlexGrow("vader")} />{" "}
          </div>
          <div id="leia" className={flexGrow === "leia" ? "flex-grow" : ""}>
            {" "}
            <img src={leia} onClick={() => setFlexGrow("leia")} />
          </div>
          <div
            id="chewbacca"
            className={flexGrow === "chewbacca" ? "flex-grow" : ""}
          >
            {" "}
            <img src={chewbacca} onClick={() => setFlexGrow("chewbacca")} />
          </div>
        </div>
        <b>align-self</b> This allows the default alignment (or the one
        specified by align-items) to be overridden for individual flex items.
        <br></br>
        <div className="examples">
          <input
            type="radio"
            onClick={() => setAlignSelf("flex-start")}
            name="display"
          ></input>
          <Text.Green>align-self: </Text.Green>
          <Text.Orange>flex-start</Text.Orange>
          <br></br>
          <input
            type="radio"
            onClick={() => setAlignSelf("flex-end")}
            name="display"
          ></input>
          <Text.Green>align-self: </Text.Green>
          <Text.Orange>flex-end</Text.Orange>
          <br></br>
          <input
            type="radio"
            onClick={() => setAlignSelf("center")}
            name="display"
          ></input>
          <Text.Green>align-self: </Text.Green>
          <Text.Orange>center</Text.Orange>
          <br></br>
          <input
            type="radio"
            onClick={() => setAlignSelf("baseline")}
            name="display"
          ></input>
          <Text.Green>align-self: </Text.Green>
          <Text.Orange>baseline</Text.Orange>
          <br></br>
          <input
            type="radio"
            onClick={() => setAlignSelf("strech")}
            name="display"
          ></input>
          <Text.Green>align-self: </Text.Green>
          <Text.Orange>strech</Text.Orange>
          <br></br>{" "}
        </div>
        <div id="father_display" className={`flex align-self ${alignSelf}`}>
          <div id="vader">
            {" "}
            Vader <img src={vader} />{" "}
          </div>
          <div id="leia">
            {" "}
            Leia <img src={leia} />
          </div>
          <div id="chewbacca">
            {" "}
            Chewbacca
            <img src={chewbacca} />
          </div>
        </div>
        <p></p>
      </div>

      <h2>Position Property</h2>

      <div>
        {" "}
        The position property can help you manipulate the location of an element
        <p></p>
        <b>static</b> Default value. Elements render in order, as they appear in
        the document flow
        <p></p>
        <b>absolute</b> The element is positioned relative to its first
        positioned (not static) ancestor element
        <p></p>
        <b>fixed</b> The element is positioned relative to the browser window
        <p></p>
        <b>relative</b> The element is positioned relative to its normal
        position, so "left:20px" adds 20 pixels to the element's LEFT position
        <p></p>
        <b>sticky</b> The element is positioned based on the user's scroll
        position. A sticky element toggles between relative and fixed, depending
        on the scroll position. It is positioned relative until a given offset
        position is met in the viewport - then it "sticks" in place (like
        position:fixed).
        <div className="examples">
          <input
            type="radio"
            onClick={() => setPosition("static")}
            name="position"
          ></input>
          <Text.Orange>position: </Text.Orange>
          <Text.Blue>static;</Text.Blue>
          <br></br>
          <input
            type="radio"
            onClick={() => setPosition("relative")}
            name="position"
          ></input>
          <Text.Orange>position: </Text.Orange>
          <Text.Blue>relative;</Text.Blue>
          <br></br>
          <input
            type="radio"
            onClick={() => setPosition("absolute")}
            name="position"
          ></input>
          <Text.Orange>position: </Text.Orange>
          <Text.Blue>absolute;</Text.Blue>
          <br></br>
          <label className="switch">
            <input
              type="checkbox"
              onChange={e => {
                setTop(e.target.checked);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
          <Text.Orange>top: </Text.Orange>
          <Text.Blue>120px;</Text.Blue>
          <br></br>
          <label className="switch">
            <input
              type="checkbox"
              onChange={e => {
                setLeft(e.target.checked);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
          <Text.Orange>left: </Text.Orange>
          <Text.Blue>60px;</Text.Blue>
          <br></br>
        </div>
        <div
          className={`document ${top ? "top" : null} ${
            left ? "left" : null
          } ${position}`}
        >
          <div id="red_child"> FIRST CHILD: RELATIVE</div>
          <div id="blue_child">
            {" "}
            SECOND CHILD: {position.toUpperCase()} <br></br>TOP:{" "}
            {top && position !== "static" ? "100px" : "0px"}
            <br></br>LEFT: {left && position !== "static" ? "60px" : "0px"}
          </div>
        </div>
      </div>

      <h2>CSS Units</h2>

      <h3>Absolute Units</h3>

      <table className="units">
        <thead>
          <tr>
            <th>Unit</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cm</td>
            <td> centimeters</td>
          </tr>
          <tr>
            <td>in</td>
            <td> inches</td>
          </tr>

          <tr>
            <td>px</td>
            <td> pixels</td>
          </tr>

          <tr>
            <td>pt</td>
            <td> points</td>
          </tr>
        </tbody>
      </table>

      <div>
        Most of these units are more useful when used for print, rather than
        screen output. For example, we don't typically use cm (centimeters) on
        screen. The only value that you will commonly use is px (pixels).
      </div>

      <h3>Relative Units</h3>

      <table className="units">
        <thead>
          <tr>
            <th>Unit</th>
            <th>Relative To </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>em</td>
            <td>Font size of the parent.</td>
          </tr>
          <tr>
            <td>rem</td>
            <td>Font size of the root element.</td>
          </tr>

          <tr>
            <td>vw</td>
            <td>1% of the viewport's width.</td>
          </tr>

          <tr>
            <td>vh</td>
            <td>1% of the viewport's height.</td>
          </tr>

          <tr>
            <td>%</td>
            <td>Relative to the parent element.</td>
          </tr>
        </tbody>
      </table>

      <h2>CSS Variables</h2>
      <div>
        Custom properties (sometimes referred to as CSS variables or cascading
        variables) are entities defined by CSS authors that contain specific
        values to be reused throughout a document. They are set using custom
        property notation (e.g., --main-color: black;) and are accessed using
        the var() function (e.g., color: var(--main-color);).
      </div>
      <div>
        CSS variables have access to the DOM, which means that you can create
        variables with local or global scope and change the variables with
        JavaScript.
      </div>

      <h3>Usage</h3>
      <div>
        Like any other property, this is written inside a ruleset, like so:
      </div>
      <div className="examples">
        <Text.Green>element</Text.Green> {"{"} <br></br>
        <Text.Blue className="nr_idents1">--main-bg-color</Text.Blue>
        {": brown;"}
        <br></br>
        {"}"}
      </div>
      <div>
        Note that the selector given to the ruleset defines the scope that the
        custom property can be used in. A common best practice is to define
        custom properties on the :root pseudo-class, so that it can be applied
        globally across your HTML document:
      </div>

      <div className="examples">
        <Text.Green>:root</Text.Green> {"{"} <br></br>
        <Text.Blue className="nr_idents1">--main-bg-color</Text.Blue>
        {": brown;"}
        <br></br>
        {"}"}
      </div>
      <div>
        You use the custom property value by specifying your custom property
        name inside the var() function, in place of a regular property value:
      </div>
      <div className="examples">
        <Text.Green>element</Text.Green> {"{"} <br></br>
        <Text.Blue className="nr_idents1">background-color</Text.Blue>
        {":"} <Text.Pink>var</Text.Pink>
        {"(--main-bg-color)"};<br></br>
        {"}"}
      </div>
    </>
  );
};

export default Css;
