import React from "react";
import "../styles/html.less";
import "../styles/unitTesting.less";
import * as Text from "../Utils/Text";

const UnitTest = () => {
  return (
    <div id="unitTesting">
      <h2>Unit testing</h2>
      <h3>Jest</h3>
      <div>
        Jest is a JavaScript Testing Framework with a focus on simplicity
      </div>
      <h3>
        <a href="https://jestjs.io/docs/en/expect">Expect</a>
      </h3>
      <div>
        When you're writing tests, you often need to check that values meet
        certain conditions. expect gives you access to a number of "matchers"
        that let you validate different things.
      </div>
      <div className="examples">
        <div>
          <Text.Orange>expect</Text.Orange>(selectColor()).
          <Text.Orange>toBe</Text.Orange>
          ('blue');
        </div>
        <div>
          <Text.Orange>expect</Text.Orange>(container).
          <Text.Orange>toMatchSnapshot</Text.Orange>();
        </div>
      </div>
      <h3>Describe / It</h3>
      <div>
        <bold>describe</bold> breaks your test suite into components.
        <bold>it</bold> is where you perform individual tests. You should be
        able to describe each test like a little sentence
      </div>
      <div className="examples">
        <Text.Orange>describe</Text.Orange>
        {"('area is calculated when', function() '{"}
        <br></br>
        <Text.Orange className="nr_idents1">it</Text.Orange>
        {"('sets the radius', function() { ... });"}
        <br></br>
        <Text.Orange className="nr_idents1">it</Text.Orange>
        {"('sets the diameter', function() { ... });"}
        <br></br>
        <Text.Orange className="nr_idents1">it</Text.Orange>
        {"('sets the circumference', function() { ... });"}
        <br></br>
        {"}"});
      </div>
      <h3>Mock Functions: jest.fn() </h3>
      <div>
        Mock functions, also known as spies, are special functions that allow us
        to track how a particular function is called by external code. Instead
        of just testing the output of the function, we can gain additional
        information about how a function was used.
        <br></br>
        By using mock functions, we can know the following:
        <br></br>
        <ul>
          <li>The number of calls it received. </li>
          <li>Argument values used on each invocation.</li>
          <li>How the function exited and what values were produced.</li>
        </ul>
        <b>How to Use jest.fn ? </b>
        <br></br>
        There are several ways to create mock functions. The jest.fn method
        allows us to create a new mock function directly.
        <br></br> If you are mocking an object method, you can use
        <b> jest.spyOn</b>.<br></br>
        And if you want to mock a whole module, you can use <b>jest.mock</b>.
      </div>

      <div className="examples">
        <Text.Purple>function</Text.Purple>{" "}
        <Text.Orange>greetWorld</Text.Orange>
        (greettingFn) {"{"} <br></br>
        <Text.Purple nr_idents={1}>return</Text.Purple>{" "}
        <Text.Orange>greetingFn</Text.Orange>(<Text.Green>'world'</Text.Green>);{" "}
        <br></br> {"}"}
        <p></p>
        <Text.Orange>test</Text.Orange>(
        <Text.Green>
          'greetWorld calls the greeting function properly'
        </Text.Green>
        , () => {"{"} <br></br>
        <Text.Purple nr_idents={1}>const</Text.Purple>{" "}
        <Text.Orange>greetImplementation</Text.Orange> = name =>{" "}
        {"`Hey, ${name}!`;"} <br></br>
        <Text.Purple nr_idents={1}>const</Text.Purple> mockFn = jest.
        <Text.Orange>fn</Text.Orange>(greetImplementation); <br></br>
        <Text.Purple nr_idents={1}>const</Text.Purple> value ={" "}
        <Text.Orange>greetWorld</Text.Orange>(mockFn);<br></br>
        <Text.Orange nr_idents={1}>expect</Text.Orange>
        (mockFn).<Text.Orange>toHaveBeenCalled</Text.Orange>(); <br></br>
        <Text.Orange nr_idents={1}>expect</Text.Orange>
        (mockFn).<Text.Orange>toHaveBeenCalledWith</Text.Orange>({" "}
        <Text.Green>'world'</Text.Green>); <br></br>{" "}
        <Text.Orange nr_idents={1}>expect</Text.Orange>(value).
        <Text.Orange>toBe</Text.Orange>(<Text.Green>'Hey, world!'</Text.Green>);{" "}
        <br></br>
        });
      </div>
      <h3>Jest.fn vs jest.mock vs jest.spyOn</h3>
      <div>Imagine a math.js file with the following functions:</div>
      <div className="examples">
        <Text.Purple>export const</Text.Purple> <Text.Orange>add</Text.Orange> =
        (a, b) => a + b; <br></br>
        <Text.Purple>export const</Text.Purple>{" "}
        <Text.Orange>subtract</Text.Orange> = (a, b) => b - a; <br></br>
        <Text.Purple>export const</Text.Purple>{" "}
        <Text.Orange>multiply</Text.Orange> = (a, b) => a * b; <br></br>
        <Text.Purple>export const</Text.Purple>{" "}
        <Text.Orange>divide</Text.Orange> = (a, b) => b / a; <br></br>
      </div>
      <div>that is invoked in app.js</div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> * <Text.Purple>as</Text.Purple> math{" "}
        <Text.Purple>from</Text.Purple> './math.js';
        <p></p>
        <Text.Purple>
          export const
        </Text.Purple> <Text.Orange>doAdd</Text.Orange> = (a, b) => math.
        <Text.Orange>add</Text.Orange>(a, b);
        <br></br>
        <Text.Purple>export const</Text.Purple>
        <Text.Orange> doSubtract</Text.Orange> = (a, b) => math.
        <Text.Orange>subtract</Text.Orange>(a, b); <br></br>
        <Text.Purple>export const</Text.Purple>
        <Text.Orange> doMultiply</Text.Orange> = (a, b) => math.
        <Text.Orange>multiply</Text.Orange>(a, b); <br></br>
        <Text.Purple>export const</Text.Purple>
        <Text.Orange> doDivide</Text.Orange> = (a, b) => math.
        <Text.Orange>divide</Text.Orange>(a, b);
      </div>
      <div>
        The most basic strategy for mocking is to reassign a function to the
        Mock Function. Then, anywhere the reassigned functions are used, the
        mock will be called instead of the original function:
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> * <Text.Purple>as</Text.Purple> app{" "}
        <Text.Purple>from</Text.Purple> "./app"; <br></br>
        <Text.Purple>import</Text.Purple> * <Text.Purple>as</Text.Purple> math{" "}
        <Text.Purple>from</Text.Purple> "./math"; <br></br>
        <p></p>
        math.<Text.Orange>add</Text.Orange> = jest.<Text.Orange>fn</Text.Orange>
        (); <br></br>
        math.<Text.Orange>subtract</Text.Orange> = jest.
        <Text.Orange>fn</Text.Orange>(); <br></br>
        <p></p>
        <Text.Pink>test</Text.Pink>(<Text.Green>"calls math.add"</Text.Green>,
        () => {"{"} <br></br>
        <Text.Black nr_idents={1}></Text.Black>app.<Text.Pink>doAdd</Text.Pink>
        (1, 2); <br></br>
        <Text.Pink nr_idents={1}>expect</Text.Pink>
        (math.<Text.Pink>add</Text.Pink>).
        <Text.Pink>toHaveBeenCalledWith</Text.Pink>(1, 2); <br></br>
        {"}"});
        <p></p>
        <Text.Pink>test</Text.Pink>(
        <Text.Green>"calls math.subtract"</Text.Green>, () => {"{"} <br></br>
        <Text.Black nr_idents={1}></Text.Black>app.
        <Text.Pink>doSubtract</Text.Pink>
        (1, 2); <br></br>
        <Text.Pink nr_idents={1}>expect</Text.Pink>
        (math.<Text.Pink>subtract</Text.Pink>).
        <Text.Pink>toHaveBeenCalledWith</Text.Pink>(1, 2); <br></br>
        {"}"});
      </div>
      <div>
        This type of mocking is less common for a couple reasons:
        <ul>
          <li>
            jest.mock does this automatically for all functions in a module
          </li>
          <li>
            jest.mock does this automatically for all functions in a module
          </li>
        </ul>
      </div>
      <h4>Mock a module with jest.mock</h4>
      <div>
        A more common approach is to use jest.mock to automatically set all
        exports of a module to the Mock Function. So, calling
        jest.mock('./math.js'); essentially sets math.js to:
      </div>
      <div className="examples">
        {" "}
        <Text.Purple>
          export const
        </Text.Purple> <Text.Orange>add</Text.Orange> = jest.
        <Text.Orange>fn</Text.Orange>()
        <br></br>
        <Text.Purple>export const</Text.Purple>{" "}
        <Text.Orange>subtract</Text.Orange> = jest.<Text.Orange>fn</Text.Orange>
        ()
        <br></br>
        <Text.Purple>export const</Text.Purple>{" "}
        <Text.Orange>multiply</Text.Orange> = jest.<Text.Orange>fn</Text.Orange>
        ()
        <br></br>
        <Text.Purple>export const</Text.Purple>{" "}
        <Text.Orange>divide</Text.Orange> = jest.<Text.Orange>fn</Text.Orange>()
        <br></br>
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> * <Text.Purple>as</Text.Purple> app{" "}
        <Text.Purple>from</Text.Purple> "./app"; <br></br>
        <Text.Purple>import</Text.Purple> * <Text.Purple>as</Text.Purple> math{" "}
        <Text.Purple>from</Text.Purple> "./math"; <br></br>
        <p></p>
        <Text.Grey>// Set all module functions to jest.fn</Text.Grey> <br></br>
        jest.<Text.Orange>mock</Text.Orange>("./math.js");
        <p></p>
        <Text.Pink>test</Text.Pink>(<Text.Green>"calls math.add"</Text.Green>,
        () => {"{"} <br></br>
        <Text.Black nr_idents={1}></Text.Black>app.<Text.Pink>doAdd</Text.Pink>
        (1, 2); <br></br>
        <Text.Pink nr_idents={1}>expect</Text.Pink>
        (math.<Text.Pink>add</Text.Pink>).
        <Text.Pink>toHaveBeenCalledWith</Text.Pink>(1, 2); <br></br>
        {"}"});
        <p></p>
        <Text.Pink>test</Text.Pink>(
        <Text.Green>"calls math.subtract"</Text.Green>, () => {"{"} <br></br>
        <Text.Black nr_idents={1}></Text.Black>app.
        <Text.Pink>doSubtract</Text.Pink>
        (1, 2); <br></br>
        <Text.Pink nr_idents={1}>expect</Text.Pink>
        (math.<Text.Pink>subtract</Text.Pink>).
        <Text.Pink>toHaveBeenCalledWith</Text.Pink>(1, 2); <br></br>
        {"}"});
      </div>
      <div>
        This is the easiest and most common form of mocking. The only
        disadvantage of this strategy is that it’s difficult to access the
        original implementation of the module. For those use cases, you can use
        spyOn.
      </div>
      <h4>Spy or mock a function with jest.spyOn</h4>
      <div>
        Sometimes you only want to watch a method be called, but keep the
        original implementation. Other times you may want to mock the
        implementation, but restore the original later in the suite.
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> * <Text.Purple>as</Text.Purple> app{" "}
        <Text.Purple>from</Text.Purple> "./app"; <br></br>
        <Text.Purple>import</Text.Purple> * <Text.Purple>as</Text.Purple> math{" "}
        <Text.Purple>from</Text.Purple> "./math"; <br></br>
        <p></p>
        <Text.Pink>test</Text.Pink>(<Text.Green>"calls math.add"</Text.Green>,
        () => {"{"} <br></br>
        <Text.Purple nr_idents={1}>const</Text.Purple> addMock = jest.
        <Text.Orange>spyOn</Text.Orange>(math, <Text.Green>"add"</Text.Green>);
        <p></p>
        <Text.Grey nr_idents={1}>
          {" "}
          // calls the original implementation
        </Text.Grey>{" "}
        <br></br>
        <Text.Pink nr_idents={1}>expect</Text.Pink>
        (app.<Text.Pink>doAdd</Text.Pink>(1, 2)).
        <Text.Pink>toEqual</Text.Pink>(3); <br></br>
        <p></p>
        <Text.Grey nr_idents={1}>
          // and the spy stores the calls to add
        </Text.Grey>{" "}
        <br></br>
        <Text.Pink nr_idents={1}>expect</Text.Pink>(addMock).
        <Text.Pink>toHaveBeenCalledWith</Text.Pink>(1, 2); <br></br>
        {"}"});
        <p></p>
      </div>
      <div>
        In other cases, you may want to mock a function, but then restore the
        original implementation:
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> * <Text.Purple>as</Text.Purple> app{" "}
        <Text.Purple>from</Text.Purple> "./app"; <br></br>
        <Text.Purple>import</Text.Purple> * <Text.Purple>as</Text.Purple> math{" "}
        <Text.Purple>from</Text.Purple> "./math"; <br></br>
        <p></p>
        <Text.Pink>test</Text.Pink>(<Text.Green>"calls math.add"</Text.Green>,
        () => {"{"} <br></br>
        <Text.Purple nr_idents={1}>const</Text.Purple> addMock = jest.
        <Text.Orange>spyOn</Text.Orange>(math, <Text.Green>"add"</Text.Green>);
        <p></p>
        <Text.Grey nr_idents={1}>
          {" "}
          // // override the implementation
        </Text.Grey>{" "}
        <br></br>
        <Text.Black nr_idents={1}></Text.Black>addMock.
        <Text.Pink>mockImplementation</Text.Pink>(() =>
        <Text.Green>"mock"</Text.Green>); <br></br>
        <Text.Pink nr_idents={1}>expect</Text.Pink>
        (app.<Text.Pink>doAdd</Text.Pink>(1, 2)).
        <Text.Pink>toEqual</Text.Pink>(<Text.Green>"mock"</Text.Green>);{" "}
        <br></br>
        <p></p>
        <Text.Grey nr_idents={1}>
          // restore the original implementation
        </Text.Grey>{" "}
        <br></br>
        <Text.Black nr_idents={1}></Text.Black>addMock.
        <Text.Pink>mockRestore</Text.Pink>(); <br></br>
        <Text.Pink nr_idents={1}>expect</Text.Pink>
        (app.<Text.Pink>doAdd</Text.Pink>(1, 2)).
        <Text.Pink>toEqual</Text.Pink>(3); <br></br>
        {"}"});
        <p></p>
      </div>
      <h2>React Testing Library</h2>
      <div>
        The React Testing Library is a very light-weight solution for testing
        React components.{" "}
      </div>
      <h3>Render()</h3>
      <div>
        render(Component) returns:
        <ul>
          <li>
            <a href="https://testing-library.com/docs/react-testing-library/cheatsheet">
              all the queries from DOM Testing Library
            </a>
          </li>

          <li>unmount function to unmount the component</li>
          <li>
            container reference to the DOM node where the component is mounted
          </li>
          <li>re-render function </li>
        </ul>
      </div>
      <div className="examples">
        <div>
          <Text.Blue>import</Text.Blue> {"{ render, fireEvent }"}{" "}
          <Text.Blue>from</Text.Blue>{" "}
          <Text.Green>'@testing-library/react'</Text.Green>
        </div>

        <div>
          <Text.Orange>test</Text.Orange>(
          <Text.Green>'loads items eventually'</Text.Green>,{" "}
          <Text.Blue>async</Text.Blue> () => {"{"}
        </div>
        <div className="nr_idents1">
          {" "}
          const {"{(getByText, findByText)}"} ={" "}
          <Text.Purple>render</Text.Purple>({"<Page />"})
        </div>
        <p></p>

        <div className="nr_idents1">
          <Text.Grey>// Click button</Text.Grey>
        </div>
        <div className="nr_idents1">
          fireEvent.<Text.Purple>click</Text.Purple>(
          <Text.Purple>getByText</Text.Purple>(<Text.Green>'Load'</Text.Green>)){" "}
        </div>
        <p></p>

        <div className="nr_idents1">
          <Text.Blue>const</Text.Blue> items = <Text.Blue>await</Text.Blue>{" "}
          <Text.Purple>findByText</Text.Purple>(
          <Text.Orange>/Item #[0-9]: /</Text.Orange>)
        </div>

        <div className="nr_idents1">
          <Text.Purple>expect</Text.Purple>(items).
          <Text.Purple>toHaveLength</Text.Purple>(<Text.Green>10</Text.Green>)
        </div>
        {"})"}
      </div>
    </div>
  );
};

export default UnitTest;
