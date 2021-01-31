import React, { useState } from "react";
import "../styles/boxModel.less";
import * as Text from "../Utils/Text";
import vader from "../styles/images/darth_vader.png";
import leia from "../styles/images/leia.png";
import chewbacca from "../styles/images/chewbacca.png";
import c3po from "../styles/images/c3po.png";
import bounty from "../styles/images/bounty_hunter.png";

const BoxModel = () => {
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
      <div class="pageHeader">
        <h2>CSS </h2>
      </div>

      <h2>Box Model </h2>
      <div>
        {" "}
        The CSS box model is essentially a box that wraps around every HTML
        element. It consists of: margins, borders, padding, and the actual
        content. The image below illustrates the box model:
      </div>
      <div class="examples">
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
        <div id="margin" class="square">
          {" "}
          MARGIN{" "}
        </div>
        <div id="border" class="square">
          {" "}
          BORDER{" "}
        </div>
        <div id="padding" class="square">
          {" "}
          PADDING{" "}
        </div>
        <div id="content" class="square">
          CONTENT{" "}
        </div>
      </div>

      <h3>Box Sizing Property</h3>

      <list>
        <ul>
          <b>content-box</b> gives you the default CSS box-sizing behavior. If
          you set an element's width to 100 pixels, then the element's content
          box will be 100 pixels wide, and the width of any border or padding
          will be added to the final rendered width, making the element wider
          than 100px.{" "}
        </ul>
        <ul>
          <b>border-box</b> tells the browser to account for any border and
          padding in the values you specify for an element's width and height.
          If you set an element's width to 100 pixels, that 100 pixels will
          include any border or padding you added, and the content box will
          shrink to absorb that extra width. This typically makes it much easier
          to size elements.
        </ul>
      </list>

      <div class="examples">
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
      </div>

      <div id="father">
        {" "}
        PARENT CONTAINER
        <div class={`son ${boxSizing}`}> CHILD CONTAINER</div>
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
      </div>

      <div class="examples">
        <input
          type="radio"
          onClick={() => setDisplay("box")}
          name="display"
        ></input>
        <Text.Orange>display: </Text.Orange>
        <Text.Blue>box;</Text.Blue>
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
        <div id="vader" class={display}>
          <img src={vader} />{" "}
        </div>
        <div id="leia" class={display}>
          {" "}
          <img src={leia} />
        </div>
        <div id="chewbacca" class={display}>
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
        <div class="examples">
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
        <div id="father_display" class={`flex ${flexDirection}`}>
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
        <div class="examples">
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
        <div id="father_display" class={`flex ${wrap}`}>
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
        <div class="examples">
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
        <div id="father_display" class={`flex justify ${justifyContent}`}>
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
        <div class="examples">
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
        <div id="father_display" class={`flex align ${alignItems}`}>
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
        <div class="examples">
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
        <div id="father_display" class={`flex order order${order}`}>
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
        <div id="father_display" class={`flex `}>
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
        <div class="examples">
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
        <div id="father_display" class={`flex align-self ${alignSelf}`}>
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
        <div class="examples">
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
          <label class="switch">
            <input
              type="checkbox"
              onChange={(e) => {
                setTop(e.target.checked);
              }}
            ></input>
            <span class="slider round"></span>
          </label>
          <Text.Orange>top: </Text.Orange>
          <Text.Blue>100px;</Text.Blue>
          <br></br>
          <label class="switch">
            <input
              type="checkbox"
              onChange={(e) => {
                setLeft(e.target.checked);
              }}
            ></input>
            <span class="slider round"></span>
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
          <div id="blue_child"> SECOND CHILD: {position.toUpperCase()} <br></br>TOP: {top && position !== 'static' ? "100px" : "0px"}<br></br>LEFT: {left && position !== 'static'  ? "60px" : "0px"}</div>
        </div>
      </div>

      <h2>SELECTORS AND PSEUDO SELECTORS </h2>

        <table >
            <tr>
                <th>Selector</th>
                <th>Example</th>
                <th>Behaviour</th>
            </tr>
            <tr>
                <td>.class</td>
                <td>.example</td>
                <td>Selects all elements with class="example"</td>
            </tr>
            <tr>
                <td>.class1.class2</td>
                <td>.name1.name2</td>
                <td>Selects all elements with name2 that is a descendant of an element with name1</td>
            </tr>
            <tr>
                <td>.class1 .class2</td>
                <td>.name1 .name2</td>
                <td>Selects all elements with both name1 and name2 set within its class attribute</td>
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
                <td>{'Selects all <p> elements'}</td>
            </tr>
            <tr>
                <td>element,element</td>
                <td>div, p </td>
                <td>{'Selects all <div> elements and all <p> elements'}</td>
            </tr>
            <tr>
                <td ><a href="#element>element">element>element </a></td>
                <td> div > p </td>
                <td>{'Selects all <p> elements where the parent is a <div> element'}</td>
            </tr>
            <tr>
            <a href="#element+element"><td>element+element</td></a>
                <td>div + p</td>
                <td>{'Selects the first <p> element that are placed immediately after <div> elements'}</td>
            </tr>
            <tr>
            <a href="#element~element"><td>element+element</td></a>
                <td>p ~ ul</td>
                <td>{'Selects every <ul> element that are preceded by a <p> element'}</td>
            </tr>
            <tr>
            <a href="#element~element"><td>element+element</td></a>
                <td>p ~ ul</td>
                <td>{'Selects every <ul> element that are preceded by a <p> element'}</td>
            </tr>

        </table>  

        <h4 id="element>element">element > element</h4>
        <div class="examples">
            <Text.Orange> {'div > p {'} </Text.Orange>
            <Text.Purple>backround-color:</Text.Purple><Text.Green>yellow</Text.Green>
            <Text.Orange> {'}'} </Text.Orange>
            <p>
            </p>
            <Text.Blue>{'<div>'} </Text.Blue><br></br>
            <Text.Blue nr_idents={1}>{'<h2>'} </Text.Blue> Batatas<Text.Blue>{'</h2>'} </Text.Blue><br></br>
            <Text.Blue nr_idents={1}>{'<p>'} </Text.Blue> Fritas<Text.Blue>{'</p>'} </Text.Blue><br></br>
            <Text.Blue>{'</div>'} </Text.Blue><br></br>
            <p></p>
            <Text.Blue>{'<div>'} </Text.Blue><br></br>
            <Text.Blue nr_idents={1}>{'<h2>'} </Text.Blue> Batatas<Text.Blue >{'<p>'} </Text.Blue> Fritas<Text.Blue>{'</p>'} </Text.Blue><Text.Blue>{'</h2>'} </Text.Blue><br></br>
            <Text.Blue>{'</div>'} </Text.Blue><br></br>

        </div> 

        <div className={'document_examples next_child'}>
                    <div>
            <h5>Batatas</h5>
            <p>Fritas.</p>
            </div>

            <div>
            <h5>Batatas<p> Fritas.</p></h5>
            </div>
        </div>

        <h4 id="element+element">element + element</h4>

    </>
  );
};

export default BoxModel;
