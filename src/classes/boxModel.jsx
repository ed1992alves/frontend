import React, { useState } from "react";
import "../styles/boxModel.less";
import * as Text from "../Utils/Text";
import vader from "../styles/images/darth_vader.png";
import leia from "../styles/images/leia.png";
import chewbacca from "../styles/images/chewbacca.png";
import c3po from "../styles/images/c3po.png";
import bounty from "../styles/images/bounty_hunter.png";
import Navigation from "./navigation";

const BoxModel = ({ nr }) => {
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
      <Navigation currentPage={nr}></Navigation>

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

      <table class="units">
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

      <table class="units">
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

      <h2>SELECTORS AND PSEUDO SELECTORS </h2>

      <table>
        <thead>
          <tr>
            <th>Selector</th>
            <th>Example</th>
            <th>Behaviour</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>.class</td>
            <td>.example</td>
            <td>Selects all elements with className="example"</td>
          </tr>
          <tr>
            <td>.class1 .class2</td>
            <td>.name1 .name2</td>
            <td>
              Selects all elements with name2 that is a descendant of an element
              with name1
            </td>
          </tr>
          <tr>
            <td>.class1.class2</td>
            <td>.name1.name2</td>
            <td>
              Selects all elements with both name1 and name2 set within its
              class attribute
            </td>
          </tr>
          <tr>
            <td>#id</td>
            <td>#firstname</td>
            <td>Selects the element with id="firstname"</td>
          </tr>
          <tr>
            <td>*</td>
            <td>*</td>
            <td>Selects all elements</td>
          </tr>
          <tr>
            <td>element</td>
            <td>p</td>
            <td>{"Selects all <p> elements"}</td>
          </tr>
          <tr>
            <td>element,element</td>
            <td>div, p </td>
            <td>{"Selects all <div> elements and all <p> elements"}</td>
          </tr>
          <tr>
            <td>
              <a href="#element>element">element>element </a>
            </td>
            <td> div > p </td>
            <td>
              {"Selects all <p> elements where the parent is a <div> element"}
            </td>
          </tr>
          <tr>
            <td>
              <a href="#element~element">element1~element2</a>
            </td>
            <td>p ~ ul</td>
            <td>
              {"Selects every <ul> element that are preceded by a <p> element"}
            </td>
          </tr>
          <tr>
            <td>
              <a href="#element+element">element+element</a>
            </td>
            <td>div + p</td>
            <td>
              {
                "Selects the first <p> element that are placed immediately after <div> elements"
              }
            </td>
          </tr>
          <tr>
            <td>
              <a href="#[atribute]">[attibute]</a>
            </td>
            <td>[target]</td>
            <td>{"Selects all elements with a target attribute"}</td>
          </tr>
          <tr>
            <td>[attribute=value]</td>
            <td>[target=_blank]</td>
            <td>{'Selects all elements with target="_blank"'}</td>
          </tr>
          <tr>
            <td>:active</td>
            <td>a:active</td>
            <td>Selects the active link</td>
          </tr>
          <tr>
            <td>
              <a href="#beforeafter">::after</a>
            </td>
            <td>p:after</td>
            <td>{"Insert something after the content of each <p> element"}</td>
          </tr>
          <tr>
            <td>
              <a href="#beforeafter">::before</a>
            </td>
            <td>p:before</td>
            <td>{"Insert something before the content of each <p> element"}</td>
          </tr>
          <tr>
            <td>:checked</td>
            <td>input:checked</td>
            <td>{"Selects every checked <input> element"}</td>
          </tr>
          <tr>
            <td>:disabled</td>
            <td>input:disabled</td>
            <td>{"Selects every disabled <input> element"}</td>
          </tr>
          <tr>
            <td>
              <a href="#firstlastnth">:first-child</a>
            </td>
            <td>p:first-child</td>
            <td>
              {
                "Selects every <p> element that is the first child of its parent"
              }
            </td>
          </tr>
          <tr>
            <td>:first-letter</td>
            <td>p:first-letter</td>
            <td>{"Selects the first letter of every <p> element"}</td>
          </tr>
          <tr>
            <td>:focus</td>
            <td>input:focus</td>
            <td>{"Selects the input element which has focus"}</td>
          </tr>
          <tr>
            <td>:hover</td>
            <td>a:hover</td>
            <td>{"Selects links on mouse over"}</td>
          </tr>
          <tr>
            <td>
              <a href="#firstlastnth">:last-child</a>
            </td>
            <td>p:last-child</td>
            <td>
              {"Selects every <p> element that is the last child of its parent"}
            </td>
          </tr>
          <tr>
            <td>:not</td>
            <td>:not(p)</td>
            <td>{"Selects every element that is not a <p> element"}</td>
          </tr>
          <tr>
            <td>
              <a href="#firstlastnth">:nth-child(n)</a>
            </td>
            <td>p:nth-child(2)</td>
            <td>
              {
                "Selects every <p> element that is the second child of its parent"
              }
            </td>
          </tr>
          <tr>
            <td>:visited</td>
            <td>a:visited</td>
            <td>{"Selects all visited links"}</td>
          </tr>
        </tbody>
      </table>

      <h4 id="element>element">element > element</h4>
      <div className="examples">
        <Text.Orange> {"div > p {"} </Text.Orange>
        <Text.Purple>backround-color:</Text.Purple>
        <Text.Green>yellow</Text.Green>
        <Text.Orange> {"}"} </Text.Orange>
        <p></p>
        <Text.Blue>{"<div>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<h2>"} </Text.Blue> Era uma vez
        <Text.Blue>{"</h2>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> umas
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue>{"</div>"} </Text.Blue>
        <br></br>
        <p></p>
        <Text.Blue>{"<div>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<h2>"} </Text.Blue> Batatas
        <Text.Blue>{"<p>"} </Text.Blue> Fritas<Text.Blue>{"</p>"} </Text.Blue>
        <Text.Blue>{"</h2>"} </Text.Blue>
        <br></br>
        <Text.Blue>{"</div>"} </Text.Blue>
        <br></br>
      </div>

      <div className={"document_examples next_child"}>
        <div>
          <h5>Era uma vez </h5>
          <p>umas </p>
        </div>

        <div>
          <h5>
            Batatas<p> Fritas.</p>
          </h5>
        </div>
      </div>

      <h4 id="element~element">element ~ element</h4>

      <div className="examples">
        <Text.Orange> {"div ~ p {"} </Text.Orange>
        <Text.Purple>backround-color:</Text.Purple>
        <Text.Green>yellow</Text.Green>
        <Text.Orange> {"}"} </Text.Orange>
        <p></p>
        <Text.Blue>{"<div>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<h2>"} </Text.Blue> Era uma vez
        <Text.Blue>{"</h2>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> umas{" "}
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue>{"</div>"} </Text.Blue>
        <br></br>
        <p></p>
        <Text.Blue>{"<p>"} </Text.Blue> Batatas<Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue>{"<p>"} </Text.Blue> Fritas<Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
      </div>

      <div className={"document_examples all-brothers"}>
        <div>
          <h5>Era uma vez </h5>
          <p>umas</p>
        </div>
        <p>Batatas</p>
        <p> Fritas </p>
      </div>

      <h4 id="element+element">element + element</h4>

      <div className="examples">
        <Text.Orange> {"div + p {"} </Text.Orange>
        <Text.Purple>backround-color:</Text.Purple>
        <Text.Green>yellow</Text.Green>
        <Text.Orange> {"}"} </Text.Orange>
        <p></p>
        <Text.Blue>{"<div>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<h2>"} </Text.Blue> Era uma vez
        <Text.Blue>{"</h2>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> umas{" "}
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue>{"</div>"} </Text.Blue>
        <br></br>
        <p></p>
        <Text.Blue>{"<p>"} </Text.Blue> Batatas<Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue>{"<p>"} </Text.Blue> Fritas<Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
      </div>

      <div className={"document_examples first-brother"}>
        <div>
          <h5>Era uma vez </h5>
          <p>umas</p>
        </div>
        <p>Batatas</p>
        <p> Fritas </p>
      </div>

      <h4 id="[atribute]">[atribute]</h4>

      <div className="examples">
        <Text.Orange> {"a[target] {"} </Text.Orange>
        <Text.Purple>backround-color:</Text.Purple>
        <Text.Green>yellow</Text.Green>
        <Text.Orange> {"}"} </Text.Orange>
        <p></p>
        <Text.Blue>{"<a href="}</Text.Blue>
        <Text.Orange>{'"https://www.w3schools.com" '}</Text.Orange>
        <Text.Blue>{">"}</Text.Blue> w3schools.com
        <Text.Blue>{"</a>"} </Text.Blue>
        <br></br>
        <Text.Blue>{"<a href="}</Text.Blue>
        <Text.Orange>{'"https://www.wikipedia.org" '}</Text.Orange>
        <Text.Blue>{"target="}</Text.Blue>
        <Text.Orange>{"_blank"}</Text.Orange>
        <Text.Blue>{">"}</Text.Blue> wikipedia.org
        <Text.Blue>{"</a>"} </Text.Blue>
        <br></br>
        <Text.Blue>{"<a href="}</Text.Blue>
        <Text.Orange>{'"https://www.disney.com" '}</Text.Orange>
        <Text.Blue>{">"}</Text.Blue> disney.com
        <Text.Blue>{"</a>"} </Text.Blue>
        <br></br>
      </div>

      <div className={"document_examples atribute"}>
        <a href="https://www.w3schools.com">w3schools.com</a>
        <br></br>
        <a href="http://www.wikipedia.org" target="_top">
          wikipedia.org
        </a>{" "}
        <br></br>
        <a href="http://www.disney.com">disney.com</a>
        <br></br>
      </div>

      <h4 id="beforeafter">::before & ::after </h4>

      <div className="examples">
        <Text.Orange> {"p::"} </Text.Orange>
        <Text.Green>{"after"}</Text.Green> {"{"}
        <Text.Purple>content:</Text.Purple>
        <Text.Green>" - after "</Text.Green>
        <Text.Orange> {"}"} </Text.Orange>
        <br></br>
        <Text.Orange> {"p::"} </Text.Orange>
        <Text.Green>{"before"}</Text.Green> {"{"}
        <Text.Purple>content:</Text.Purple>
        <Text.Green>" - before "</Text.Green>
        <Text.Orange> {"}"} </Text.Orange>
        <p></p>
        <Text.Blue>{"<p>"} </Text.Blue> Batatas<Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
      </div>

      <div className={"document_examples beforeafter"}>
        <p>Batatas</p>
      </div>

      <h4 id="firstlastnth">:first-child & :last-child & :nth-child </h4>

      <div className="examples">
        <Text.Orange> {"div p::first-child"} </Text.Orange> {"{"}
        <Text.Purple>background-color:</Text.Purple>
        <Text.Green>yellow</Text.Green>
        <Text.Orange> {"}"} </Text.Orange>
        <br></br>
        <Text.Orange> {"div p::last-child"} </Text.Orange> {"{"}
        <Text.Purple>background-color:</Text.Purple>
        <Text.Green>red</Text.Green>
        <Text.Orange> {"}"} </Text.Orange>
        <br></br>
        <Text.Orange> {"div p::nth-child(4n)"} </Text.Orange> {"{"}
        <Text.Purple>background-color:</Text.Purple>
        <Text.Green>orange</Text.Green>
        <Text.Orange> {"}"} </Text.Orange>
        <p></p>
        <Text.Blue>{"<div>"}</Text.Blue> <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> Batata
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> Frita
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> Pala
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> -
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> Pala
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> é{" "}
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> uma
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> tara
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> de
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue nr_idents={1}>{"<p>"} </Text.Blue> sabor
        <Text.Blue>{"</p>"} </Text.Blue>
        <br></br>
        <Text.Blue>{"<div>"}</Text.Blue> <br></br>
      </div>

      <div className={"document_examples child"}>
        <div>
          <p>Batatas</p>
          <p>Frita</p>
          <p>Pala</p>
          <p>-</p>
          <p>Pala</p>
          <p>é</p>
          <p>uma</p>
          <p>tara</p>
          <p>de</p>
          <p>sabor</p>
        </div>
      </div>
      <h2>Specificity</h2>
      <div>
        How does the browser define the degree of selector priorities? <br></br>{" "}
        It's simple: it punctuates the selector according to its structure. Each
        element, class, id, etc... is worth specific points. The punctuation is
        added in a simple structure that starts with zeros (0), like this:
        0,0,0,0. The structure is composed of four numbers, the more a number is
        on the left, the more specific and the more strength it has over other
        selectors.
        <br></br>See the table below:
      </div>

      <table>
        <thead>
          <tr>
            <th>Selector</th>
            <th>Pontuaction</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>div ul li a</td>
            <td>0,0,0,4</td>
            <td>4 elements, 4 points in the first square</td>
          </tr>
          <tr>
            <td>div.content ul li</td>
            <td>0,0,1,3</td>
            <td>
              One class is worth one point in the second box. 3 more elements, 3
              more points in the first square.
            </td>
          </tr>
          <tr>
            <td>a:hover</td>
            <td>0,0,1,1</td>
            <td>
              An element, a point in the first square. One pseudo-class, which
              is equivalent to a class (a point in the second square).
            </td>
          </tr>
          <tr>
            <td>div.menu a:hover</td>
            <td className="hidden">0,0,2,2</td>
            <td className="hidden">
              Two elements, two points in the first square. Another class and a
              pseudo-class, plus two points in the second box.
            </td>
          </tr>
          <tr>
            <td>#content p</td>
            <td>0,1,0,1</td>
            <td>
              {" "}
              An ID is equivalent to a point in the third box. Another element,
              which is equivalent to a point in the first square.
            </td>
          </tr>
          <tr>
            <td>article#content p</td>
            <td className="hidden">0,1,0,2</td>
            <td className="hidden">
              Two elements, two points in the first square. An ID, a point in
              the third box.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>The Fourth Square</h3>
      <div>
        In the examples above we saw up to the third house. The fourth box is
        used on two occasions: <br></br>
        <ol>
          <li>
            {" "}
            When we put CSS inline, that is, directly in the HTML element.{" "}
          </li>
          <li>
            {" "}
            When we have the !Important value declared in the CSS code value
          </li>
        </ol>
      </div>

      <h3>And when is there the same score?</h3>
      <div>
        The tiebreaker in this case is: <b>who came last wins.</b>
      </div>
    </>
  );
};

export default BoxModel;
