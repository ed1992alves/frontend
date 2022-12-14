import React, { useState } from "react";
import * as Text from "../Utils/Text";
import dom from "../styles/images/DOM.svg";
import asyncDefer1 from "../styles/images/asyncDefer1.svg";
import asyncDefer2 from "../styles/images/asyncDefer2.svg";
import asyncDefer3 from "../styles/images/asyncDefer3.svg";
import "../styles/dom.less";

const colours = ["green", "yellow", "orange", "purple", "red", "blue", "grey"];

const DomObject = () => {
  const [color, setColor] = useState(0);
  const [border, setBorder] = useState(0);

  const changeColor = (callback, i) => {
    if (i == 6) {
      callback(0);
      return;
    }
    callback(i + 1);
  };

  return (
    <>
      <h2> Document Object Model (DOM) </h2>
      <div>
        When a web page is loaded, the browser creates a Document Object Model
        of the page.
        <p></p>
        The HTML DOM model is constructed as a tree of Objects and it defines:
        <ul>
          <li>The HTML elements as objects </li>
          <li>The properties of all HTML elements</li>
          <li>The methods to access all HTML elements</li>
          <li>The events for all HTML elements</li>
        </ul>
        The Document Object Model is a programming API for documents. The object
        model itself closely resembles the structure of the documents it models.
        For instance, consider this table, taken from an HTML document:
        <div className="examples">
          {"<"}TABLE {">"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black> {"<"}ROWS{">"}{" "}
          <br></br>
          <Text.Black className="nr_idents2"></Text.Black>
          {"<"}TR{">"} <br></br>
          <Text.Black className="nr_idents3"></Text.Black>
          {"<"}TD{">"}Shady Grove{"<"}/TD{">"} <br></br>
          <Text.Black className="nr_idents3"></Text.Black>
          {"<"}TD>Aeolian{"<"}/TD{">"} <br></br>
          <Text.Black className="nr_idents2"></Text.Black>
          {"</"}TR{">"} <br></br>
          <Text.Black className="nr_idents2"></Text.Black>
          {"<"}TR{">"} <br></br>
          <Text.Black className="nr_idents3"></Text.Black>
          {"<"}TD{">"}Over the River, Charlie{"<"}/TD{">"} <br></br>
          <Text.Black className="nr_idents3"></Text.Black>
          {"<"}TD{">"}Dorian{"<"}/TD{">"} <br></br>
          <Text.Black className="nr_idents2"></Text.Black> {"</"}TR{">"}{" "}
          <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          {"</"}ROWS{">"} <br></br>
          {"</"}TABLE{">"}
        </div>
        <div>The Document Object Model represents this table like this:</div>
        <div className="imageBackground">
          <img className="domImage" src={dom}></img>
        </div>
        The HTML DOM is basically a standard for how to get, change, add, or
        delete HTML elements.
      </div>
      <h2>JavaScript HTML DOM Elements</h2>
      <table>
        <thead>
          <tr>
            <th>Finding By</th>
            <th>Javascript</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th> Id</th>
            <th>document.getElementById();</th>
          </tr>
          <tr>
            <th>Tag name</th>
            <th>document.getElementsByTagName()</th>
          </tr>
          <tr>
            <th>Class Name</th>
            <th>document.getElementsByClassName();</th>
          </tr>
          <tr>
            <th>CSS Selectors</th>
            <th>document.querySelectorAll();</th>
          </tr>
        </tbody>
      </table>
      <h2>Javascript Event Handlers</h2>
      <div>
        Events are actions or occurrences that happen in the system you are
        programming, which the system tells you about so your code can react to
        them.
        <br></br>For example, if the user clicks a button on a webpage, you
        might want to react to that action by displaying an information box.
        <br></br>
        To react to an event, you attach an event handler to it. This is a block
        of code (usually a JavaScript function that you as a programmer create)
        that runs when the event fires.
        <br></br>
      </div>
      <h3>Inline event handlers</h3>
      <div>
        HTML allows event handler attributes, with JavaScript code, to be added
        to HTML elements.
      </div>
      <div className="examples">
        <Text.Orange>{"<"}button</Text.Orange> <Text.Red>onclick</Text.Red>=
        <Text.Blue>
          "document.getElementById('demo').innerHTML = Date()"
        </Text.Blue>
        <Text.Orange>{">"}</Text.Orange> The time is?
        <Text.Orange>
          {" </"} button {">"}
        </Text.Orange>
      </div>
      <div>Here is a list of some common HTML events:</div>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>onchange</td>
            <td>HTML element has been changed</td>
          </tr>
          <tr>
            <td>onclick</td>
            <td>The user clicks in the HTML element</td>
          </tr>
          <tr>
            <td>onmouseover</td>
            <td>The user moves the mouse over an HTML element</td>
          </tr>
          <tr>
            <td>onmouseout</td>
            <td>The user moves the mouse out of an element</td>
          </tr>
          <tr>
            <td>onmouseup</td>
            <td>The user releases the mouse button over an element</td>
          </tr>
          <tr>
            <td>onmousedown</td>
            <td>The user press the mouse button over an element</td>
          </tr>
          <tr>
            <td>onkeyup</td>
            <td>The user is releaseing a key (on the keyboard)</td>
          </tr>
          <tr>
            <td>onkeydown</td>
            <td>The user is pressing a key (on the keyboard).</td>
          </tr>
          <tr>
            <td>onload</td>
            <td>The browser has finished loading the page</td>
          </tr>
        </tbody>
      </table>
      <h3>Using addEventListener()</h3>
      <div>
        The recommended mechanism for adding event handlers in web pages is the
        addEventListener() method:
      </div>
      <div className="examples">
        element.<Text.Red>addEventListener</Text.Red>(
        <Text.Green>'click'</Text.Green>, function);
      </div>
      <h2>script: Defer / Async</h2>
      <div>
        In modern websites, scripts are often “heavier” than HTML: their
        download size is larger, and processing time is also longer. <br></br>
        When the browser loads HTML and comes across a {
          "<script>...</script>"
        }{" "}
        tag, it can’t continue building the DOM. It must execute the script
        right now. The same happens for external scripts{" "}
        {'<script src="..."></script>'}: the browser must wait for the script to
        download, execute the downloaded script, and only then can it process
        the rest of the page.
        <br></br>That leads to two important issues:
        <ul>
          <li>
            Scripts can’t see DOM elements below them, so they can’t add
            handlers etc.
          </li>
          <li>
            If there’s a bulky script at the top of the page, it “blocks the
            page”. Users can’t see the page content till it downloads and runs:
          </li>
        </ul>
      </div>
      <div className="examples">
        <Text.Orange>
          {"<"}p{">"}
        </Text.Orange>{" "}
        ...content before script...{" "}
        <Text.Orange>
          {"<"}/p{">"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Orange>{"<"}script</Text.Orange>
        <Text.Red> src</Text.Red>=
        <Text.Green>
          "https://javascript.info/article/script-async-defer/long.js?speed=1"{" "}
        </Text.Green>
        <Text.Orange>{">"}</Text.Orange>
        {"<"}/script{">"} <br></br>
        <Text.Grey>
          {"<!-- This isn't visible until the script loads -->"}
        </Text.Grey>{" "}
        <br></br>
        <Text.Orange>{"<"}p></Text.Orange>...content after script...
        <Text.Orange>
          {"<"}/p{">"}
        </Text.Orange>
      </div>
      <div>
        There are some workarounds to that. For instance, we can put a script at
        the bottom of the page. Then it can see elements above it, and it
        doesn’t block the page content from showing.
        <br></br>
        But this solution is far from perfect. For example, the browser notices
        the script (and can start downloading it) only after it downloaded the
        full HTML document. For long HTML documents, that may be a noticeable
        delay.
        <br></br>
        Luckily, there are two {"<script>"} attributes that solve the problem
        for us: defer and async.
      </div>
      <div>
        Both async and defer have one common thing: downloading of such scripts
        doesn’t block page rendering. So the user can read page content and get
        acquainted with the page immediately.
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Order</th>
            <th>DOMContentLoaded</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Async</td>
            <td>
              Load-first order. Other scripts don’t wait for async scripts, and
              async scripts don’t wait for them,their document order doesn’t
              matter – which loads first runs first
            </td>
            <td>
              Irrelevant. May load and execute while the document has not yet
              been fully downloaded. That happens if scripts are small or
              cached, and the document is long enough.
            </td>
          </tr>
          <tr>
            <td>Defer</td>
            <td>Document order (as they go in the document).</td>
            <td>
              Execute after the document is loaded and parsed (they wait if
              needed), right before DOMContentLoaded.
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        In practice, defer is used for scripts that need the whole DOM and/or
        their relative execution order is important. And async is used for
        independent scripts, like counters or ads. And their relative execution
        order does not matter.
      </div>
      <div className="imageBackground async">
        <div>{"<script>"}</div>
        <img className="asyncDefer" src={asyncDefer1}></img>
        <div>{"<script async>"}</div>
        <img className="asyncDefer" src={asyncDefer2}></img>
        <div>{"<script defer>"}</div>
        <img className="asyncDefer" src={asyncDefer3}></img>
        <div className="legenda">
          <div>
            {" "}
            <span className="square"></span> <span>HTML Parsing</span>
          </div>

          <div>
            <span className="square"></span> <span>HTML Parsing paused</span>
          </div>
          <div>
            <span className="square"></span> <span>Script Download</span>
          </div>
          <div>
            <span className="square"></span> <span>Script Execution</span>
          </div>
        </div>
      </div>
      <h3>Exercise</h3>
      <div className="examples button">
        <button
          className={colours[color] + " border-" + colours[border] + " box"}
          onClick={() => changeColor(setColor, color)}
          onMouseOut={() => changeColor(setBorder, border)}
        >
          {" "}
          Click here{" "}
        </button>
      </div>
    </>
  );
};

export default DomObject;
