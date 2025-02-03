import React, { useState } from "react";
import "../styles/grid.less";
import * as Text from "../Utils/Text";

const Grid = () => {
  const [grid, setGrid] = useState("grid");
  const [justify, setJustify] = useState("stretch");
  return (
    <>
      <h2>Grid</h2>
      <div>
        CSS Grid Layout (aka “Grid” or “CSS Grid”), is a two-dimensional
        grid-based layout system that, compared to any web layout system of the
        past, completely changes the way we design user interfaces.
        <p></p>CSS has always been used to layout our web pages, but it’s never
        done a very good job of it. First, we used tables, then floats,
        positioning and inline-block, but all of these methods were essentially
        hacks and left out a lot of important functionality (vertical centering,
        for instance). Flexbox is also a very great layout tool, but its
        one-directional flow has different use cases — and they actually work
        together quite well! Grid is the very first CSS module created
        specifically to solve the layout problems we’ve all been hacking our way
        around for as long as we’ve been making websites.
      </div>
      <h3>Important CSS Grid terminology</h3>
      <h4>Grid Container </h4>
      <div>
        The element on which display: grid is applied. It’s the direct parent of
        all the grid items. In this example container is the grid container.
      </div>
      <h4>Grid Item</h4>
      <div>
        Grid Item The children (i.e. direct descendants) of the grid container.
        Here the item elements are grid items, but sub-item isn’t.
      </div>
      <div class="examples">
        <Text.Purple>
          <b>{"<div>"}</b>
        </Text.Purple>{" "}
        class="container">" <br></br>
        <Text.Purple nr_idents={1}>
          <b>{"<div>"}</b>
        </Text.Purple>{" "}
        class="item item-1">{" "}
        <Text.Purple>
          <b>{"</div>"}</b>
        </Text.Purple>
        <br></br>
        <Text.Purple nr_idents={1}>
          <b>{"<div>"}</b>
        </Text.Purple>{" "}
        class="item item-2">{" "}
        <Text.Purple>
          <b>{"</div>"}</b>
        </Text.Purple>
        <br></br>
        <Text.Purple nr_idents={1}>
          <b>{"<div>"}</b>
        </Text.Purple>{" "}
        class="item item-3">{" "}
        <Text.Purple>
          <b>{"</div>"}</b>
        </Text.Purple>
        <br></br>
        <Text.Purple>
          <b>{"</div>"}</b>
        </Text.Purple>
      </div>
      <h3>CSS Grid properties</h3>
      <h4>Properties for the Parent (Grid Container)</h4>
      <h5>display</h5>
      <div>
        Defines the element as a grid container and establishes a new grid
        formatting context for its contents.
      </div>
      <div class="examples">
        <b>
          {" "}
          <input
            type="radio"
            onClick={() => setGrid("grid")}
            name="display"
            value="grid"
          ></input>
          grid
        </b>{" "}
        – generates a block-level grid <br></br>
        <b>
          {" "}
          <input
            type="radio"
            onClick={() => setGrid("inlinegrid")}
            name="display"
            value="inline"
          ></input>
          inline-grid
        </b>{" "}
        – generates an inline-level grid
      </div>{" "}
      <div className={`${grid}`}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <h5>grid-template-columns AND grid-template-rows</h5>
      <div class="examples">
        <b>{"<track-size>"}</b>: can be a length, a percentage, or a fraction of
        the free space in the grid using the fr unit
        <br></br>
        <b>{"<line-name>"}</b>: an arbitrary name of your choosing
      </div>
      <div className={"examples"}>
        <Text.Orange>.container: </Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}> grid-template-columns </Text.Blue>: ... ...;{" "}
        <br></br>
        <Text.Grey nr_idents={2}>/* e.g.</Text.Grey> <br></br>
        <Text.Grey nr_idents={3}>1fr 1fr </Text.Grey>
        <br></br>
        <Text.Grey nr_idents={3}>minmax(10px, 1fr) 3fr</Text.Grey>
        <br></br>
        <Text.Grey nr_idents={3}>repeat(5, 1fr)</Text.Grey>
        <br></br> <Text.Grey nr_idents={3}>50px auto 100px 1fr</Text.Grey>
        <br></br>
        <Text.Grey nr_idents={2}>*/</Text.Grey>
        <br></br>
        <Text.Blue nr_idents={1}> grid-template-rows </Text.Blue>: ... ...;{" "}
        <br></br> <Text.Grey nr_idents={2}>/* e.g.</Text.Grey> <br></br>
        <Text.Grey nr_idents={2}> min-content 1fr min-content</Text.Grey>
        <br></br>
        <Text.Grey nr_idents={2}>100px 1fr max-content </Text.Grey>
        <br></br> <Text.Grey nr_idents={2}>*/</Text.Grey> <br></br> {"}"}
      </div>
      <div className={"grid grid1"}>
        <div class="el1">1</div>
        <div class="el2">2</div>
        <div class="el3">3</div>
        <div class="help"></div>
        <div class="el4">4</div>
        <div class="el5">5</div>
        <div class="el6">6</div>
        <div class="el7 help"></div>
      </div>
      <div>
        Grid lines are automatically assigned positive numbers from these
        assignments (-1 being an alternate for the very last row). <br></br>
        But you can choose to explicitly name the lines. Note the bracket syntax
        for the line names:
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template-columns:</Text.Blue> [first] 80px
        [line2] 100px [col3-start] auto [fourd] 80px [end]; <br></br>
        <Text.Blue nr_idents={1}>grid-template-rows:</Text.Blue> [row1-start]
        50% [row1-end] auto[last-line]; <br></br>
        {"}"}
      </div>
      <div className={"grid grid2"}>
        <div class="el1">1</div>
        <div class="el2">2</div>
        <div class="el3">3</div>
        <div class="el4">4</div>
        <div class="help"></div>
        <div class="el5">5</div>
        <div class="el6">6</div>
        <div class="el7">7</div>
        <div class="el8">8</div>
        <div class="el9 help"></div>
      </div>
      <div>
        Note that a line can have more than one name. For example, here the
        second line will have two names: row1-end and row2-start:
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template-rows:</Text.Blue> [row1-start]
        25% [row1-end row2-start] 25% [row2-end];
        <br></br>
        {"}"}
      </div>
      <div>
        If your definition contains repeating parts, you can use the repeat()
        notation to streamline things:
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template-columns:</Text.Blue> repeat(3,
        20px [col-start]);
        <br></br>
        {"}"}
      </div>
      <h5>grid-template</h5>
      <div>
        A shorthand for setting grid-template-rows, grid-template-columns, and
        grid-template-areas in a single declaration.
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template:</Text.Blue> none |{" "}
        {"<grid-template-rows> / <grid-template-columns>"};<br></br>
        {"}"}
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template:</Text.Blue> [row1-start] 25px
        [row1-end]
        <br></br>
        <Text.Blue nr_idents={6}></Text.Blue> [row2-start] 25px [row2-end]{" "}
        <br></br>
        <Text.Blue nr_idents={6}></Text.Blue>/ auto 50px auto;<br></br>
        {"}"}
      </div>
      <div class="grid grid3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <h5>column-gap / row-gap </h5>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template-columns:</Text.Blue> 100px 50px
        100px; <br></br>
        <Text.Blue nr_idents={1}>grid-template-rows:</Text.Blue> 80px auto 80px;
        <br></br>
        <Text.Blue nr_idents={1}>column-gap:</Text.Blue>
        10px;
        <br></br>
        <Text.Blue nr_idents={1}>row-gap:</Text.Blue> 20px;
        <br></br>
        {"}"}
      </div>
      <div class="grid grid4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <div>
        Specifies the size of the grid lines. You can think of it like setting
        the width of the gutters between the columns/rows.
      </div>
      <h5>gap</h5>
      <div>A shorthand for row-gap and column-gap</div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>gap:</Text.Blue>{" "}
        {"<grid-row-gap> <grid-column-gap>"};<br></br>
        {"}"}
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template-columns:</Text.Blue> 100px 50px
        100px; <br></br>
        <Text.Blue nr_idents={1}>grid-template-rows:</Text.Blue> 80px auto 80px;
        <br></br>
        <Text.Blue nr_idents={1}>gap:</Text.Blue> 15px 10px;
        <br></br>
        {"}"}
      </div>
      <h5>justify-items / align-items / place-items </h5>
      <div>
        justify-items aligns grid items along the inline (row) axis (as opposed
        to align-items which aligns along the block (column) axis).
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>justify-items:</Text.Blue>
        <input
          type="radio"
          onClick={() => setJustify("start")}
          name="display"
          value="start"
        ></input>{" "}
        start
        <input
          type="radio"
          onClick={() => setJustify("end")}
          name="display"
          value="end"
        ></input>
        end
        <input
          type="radio"
          onClick={() => setJustify("center")}
          name="display"
          value="center"
        ></input>
        center
        <input
          type="radio"
          onClick={() => setJustify("stretch")}
          name="display"
          value="stretch"
        ></input>
        stretch
        <br></br>
        {"}"}
      </div>
      <div className={`${justify} grid grid5`}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <div>
        This behavior can also be set on individual grid items via the
        justify-self property.
      </div>
      <div>
        place-items sets both the align-items and justify-items properties in a
        single declaration.
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>place-items:</Text.Blue>{" "}
        {"<align-items> / <justify-items> "};<br></br>
        {"}"}
      </div>
      <h5>fr units</h5>
      <div>
        You’ll likely end up using a lot of fractional units in CSS Grid, like
        1fr. They essentially mean “portion of the remaining space”. So a
        declaration like:
      </div>
      <div class="examples">
        <Text.Blue>grid-template-columns:</Text.Blue> 1fr 3fr;
      </div>
      <div>
        Means, loosely, 25% 75%. Except that those percentage values are much
        more firm than fractional units are. For example, if you added padding
        to those percentage-based columns, now you’ve broken 100% width
        (assuming a content-box box model).
      </div>
      <h4>Properties for the Children (Grid Items)</h4>
      <h5>
        grid-column-start / grid-column-end / grid-row-start / grid-row-end
      </h5>
      <div class="examples">
        <Text.Orange>.item</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-column-start:</Text.Blue>{" "}
        {"<number> | <name> | span <number> | span <name> | auto;"}
        <br></br>
        <Text.Blue nr_idents={1}>grid-column-end:</Text.Blue>{" "}
        {"<number> | <name> | span <number> | span <name> | auto;"}
        <br></br>
        <Text.Blue nr_idents={1}>grid-row-start:</Text.Blue>{" "}
        {"<number> | <name> | span <number> | span <name> | auto;"}
        <br></br>
        <Text.Blue nr_idents={1}>grid-row-end:</Text.Blue>{" "}
        {"<number> | <name> | span <number> | span <name> | auto;"}
        <br></br>
        {"}"}
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template-columns:</Text.Blue> [one] 1fr
        [two] 50px [three] 2fr [four] 75px [five] <br></br>
        <Text.Blue nr_idents={1}>grid-template-rows:</Text.Blue> [row-1-start]
        1fr [row-2-start] 1fr [row-3-start] 1fr [last-line]; <br></br>
        <Text.Blue nr_idents={1}>gap:</Text.Blue> 10px<br></br>
        {"}"}
        <br></br>
        <br></br>
        <Text.Orange>.item-a</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-column-start:</Text.Blue> 2<br></br>
        <Text.Blue nr_idents={1}>grid-column-end:</Text.Blue> five
        <br></br>
        <Text.Blue nr_idents={1}>grid-row-start:</Text.Blue> row-1-start
        <br></br>
        <Text.Blue nr_idents={1}>grid-row-end:</Text.Blue> 3<br></br>
        {"}"}
      </div>
      <div className={`grid gridWithCells`}>
        <div class="item-a">ITEM-A</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template-columns:</Text.Blue> [one] 1fr
        [two] 50px [three] 2fr [four] 75px [five] <br></br>
        <Text.Blue nr_idents={1}>grid-template-rows:</Text.Blue> [row-1-start]
        1fr [row-2-start] 1fr [row-3-start] 1fr [last-line]; <br></br>
        <Text.Blue nr_idents={1}>gap:</Text.Blue> 10px<br></br>
        {"}"}
        <br></br>
        <br></br>
        <Text.Orange>.item-b</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-column-start:</Text.Blue> 1<br></br>
        <Text.Blue nr_idents={1}>grid-column-end:</Text.Blue> span four
        <br></br>
        <Text.Blue nr_idents={1}>grid-row-start:</Text.Blue> 2<br></br>
        <Text.Blue nr_idents={1}>grid-row-end:</Text.Blue> span 2<br></br>
        {"}"}
      </div>
      <div className={`grid gridWithCells `}>
        <div class="item-b">ITEM-B</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
      <div>
        If no grid-column-end/grid-row-end is declared, the item will span 1
        track by default.
        <p></p>
        Items can overlap each other. You can use z-index to control their
        stacking order.
      </div>
      <h5>grid-column / grid-row</h5>
      <div>
        Shorthand for grid-column-start + grid-column-end, and grid-row-start +
        grid-row-end, respectively.
      </div>
      <div class="examples">
        <Text.Orange>.item</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-column:</Text.Blue>
        {"<start-line> / <end-line> | <start-line> / span <value>"};<br></br>
        <Text.Blue nr_idents={1}> grid-row:</Text.Blue>
        {"<start-line> / <end-line> | <start-line> / span <value>"};<br></br>
        {"}"}
      </div>
      <div class="examples">
        <Text.Orange>.item-c</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-column:</Text.Blue>2 / span 2;<br></br>
        <Text.Blue nr_idents={1}> grid-row:</Text.Blue>
        row-1-start / 4;<br></br>
        {"}"}
      </div>
      <div className={`grid gridWithCells `}>
        <div class="item-c">ITEM-C</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
      <div>
        If no end line value is declared, the item will span 1 track by default.
      </div>
      <h5>grid-area</h5>
      <div>
        Gives an item a name so that it can be referenced by a template created
        with the grid-template-areas property. Alternatively, this property can
        be used as an even shorter shorthand for grid-row-start +
        grid-column-start + grid-row-end + grid-column-end.
      </div>
      <div class="examples">
        <Text.Orange>.item</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-area:</Text.Blue>
        {"<row-start> / <column-start> / <row-end> / <column-end>"};<br></br>
        {"}"}
      </div>
      <div class="examples">
        <Text.Orange>.container</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-template-columns:</Text.Blue> [one] 1fr
        [two] 50px [three] 2fr [four] 75px [five]; <br></br>
        <Text.Blue nr_idents={1}>grid-template-rows:</Text.Blue> [row-1-start]
        1fr [row-2-start] 1fr [row-3-start] 1fr [last-line]; <br></br>
        <Text.Blue nr_idents={1}> gap:10px;</Text.Blue>
        <br></br>
        {"}"} <br></br>
        <br></br>
        <Text.Orange>.item-d</Text.Orange> {"{"} <br></br>
        <Text.Blue nr_idents={1}>grid-area: </Text.Blue>
        {"1 / col4-start / last-line / 5"};<br></br>
        {"}"}
      </div>
      <div className={`grid gridWithCells `}>
        <div class="item-d">ITEM-D</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
      <div class="links">
        <a target="_blank" href="https://grid.layoutit.com/">
          Playground{" "}
        </a>
        <a target="_blank" href="https://gridbyexample.com/examples/">
          Examples{" "}
        </a>
        <a target="_blank" href="https://cssgridgarden.com/">
          Practice{" "}
        </a>
      </div>
    </>
  );
};

export default Grid;
