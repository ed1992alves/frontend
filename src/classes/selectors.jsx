import React, { useState } from "react";
import "../styles/css.less";
import * as Text from "../Utils/Text";
import vader from "../styles/images/darth_vader.png";
import leia from "../styles/images/leia.png";
import chewbacca from "../styles/images/chewbacca.png";
import c3po from "../styles/images/c3po.png";
import bounty from "../styles/images/bounty_hunter.png";
import Navigation from "./navigation";

const Selectors = ({ nr }) => {
  return (
    <>
      <Navigation currentPage={nr}></Navigation>
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

export default Selectors;
