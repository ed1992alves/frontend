import React, { useState } from "react";
import "../styles/scope.less";
import * as Text from "../Utils/Text";
import Navigation from "./navigation";
import scopes from "../styles/images/scopes.png";
import scopes_examples from "../styles/images/scopes_examples.png";

const Operators = ({ nr }) => {
  return (
    <>
      <Navigation currentPage={nr}></Navigation>
      <div>
        <b>Scope</b> is the set of rules that govern how the <i>Engine</i> can
        look up a variable by its identifier name and find it, either in the
        current Scope, or in any of the Nested Scopes it's contained within.
        <p></p>
        There are two predominant models for how scope works. The first of these
        is by far the most common, used by the vast majority of programming
        languages. It's called Lexical Scope. The other model, which is still
        used by some languages (such as Bash scripting, some modes in Perl,
        etc.) is called Dynamic Scope.
      </div>

      <h2>Nested Scope</h2>

      <div>
        We said that Scope is a set of rules for looking up variables by their
        identifier name. There's usually more than one Scope to consider,
        however.
        <p> </p>
        Just as a block or function is nested inside another block or function,
        scopes are nested inside other scopes. So, if a variable cannot be found
        in the immediate scope, Engine consults the next outer containing scope,
        continuing until found or until the outermost (aka, global) scope has
        been reached.
      </div>

      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>(a) {"{"}{" "}
        <br></br>
        <Text.Black nr_idents={1}>{"console.log("} a + b ); </Text.Black>{" "}
        <br></br>
        {"}"}
        <br></br>
        <Text.Red> var </Text.Red> b <Text.Blue>= 2</Text.Blue>;<br></br>
        <Text.Purple>foo</Text.Purple>( <Text.Blue>2</Text.Blue> );{" "}
        <Text.Grey>// 4</Text.Grey>
      </div>

      <div>
        The reference for b cannot be resolved inside the function foo, but it
        can be resolved in the Scope surrounding it (in this case, the global).
      </div>
      <img src={scopes} className="scopes" />

      <div>
        The building represents our program's nested Scope rule set. The first
        floor of the building represents your currently executing Scope,
        wherever you are. The top level of the building is the global Scope.
        <p></p>
        You resolve your references by looking on your current floor, and if you
        don't find it, taking the elevator to the next floor, looking there,
        then the next, and so on. Once you get to the top floor (the global
        Scope), you either find what you're looking for, or you don't. But you
        have to stop regardless.
      </div>

      <h2>Errors</h2>
      <div>
        Why does it matter whether we call it LHS (Left Hand Side) or RHS (Right
        Hand Side)?
      </div>
      <p></p>
      <div>
        Because these two types of look-ups behave differently in the
        circumstance where the variable has not yet been declared (is not found
        in any consulted Scope).
      </div>

      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>(a) {"{"}{" "}
        <br></br>
        <Text.Black nr_idents={1}>{"console.log("} a + b ); </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={1}>
          {" "}
          b <Text.Blue>= </Text.Blue> a;{" "}
        </Text.Black>
        <br></br> {"}"}
        <br></br>
        <Text.Purple>foo</Text.Purple>( <Text.Blue>2</Text.Blue> );{" "}
      </div>
      <div>
        When the RHS look-up occurs for b the first time, it will not be found.
        This is said to be an "undeclared" variable, because it is not found in
        the scope.
        <p></p>
        If an RHS look-up fails to ever find a variable, anywhere in the nested
        Scopes, this results in a <i>ReferenceError</i> being thrown by the
        Engine.
        <p></p>By contrast, if the Engine is performing an LHS look-up and
        arrives at the top floor (global Scope) without finding it, then the
        global Scope will create a new variable of that name{" "}
        <b>in the global scope</b>.
      </div>

      <h2>Lexical Scope </h2>
      <div>
        Lexical scope is based on where variables and blocks of scope are
        authored, by you, at write time, and thus is (mostly) set in stone by
        the time the lexer processes your code.
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>(a) {"{"}{" "}
        <br></br>
        <Text.Red nr_idents={1}>var</Text.Red> b <Text.Blue> = </Text.Blue> a *
        2; <br></br>
        <Text.Red nr_idents={1}>function</Text.Red>{" "}
        <Text.Purple>bar</Text.Purple>(c) {"{"} <br></br>
        <Text.Black nr_idents={2}></Text.Black>console.log( a, b, c ); <br></br>
        <Text.Black nr_idents={1}></Text.Black> {"}"}
        <br></br>
        <Text.Purple nr_idents={1}>bar </Text.Purple>(b *
        <Text.Blue>3</Text.Blue>); <br></br>
        <Text.Black nr_idents={1}>
          {" "}
          b <Text.Blue>= </Text.Blue> a;{" "}
        </Text.Black>
        <br></br> {"}"}
        <br></br>
        <Text.Purple>foo</Text.Purple>( <Text.Blue>2</Text.Blue> );{" "}
      </div>
      <div>There are three nested scopes inherent in this code example.</div>
      <img className={"scopeExample"} src={scopes_examples}></img>
      <ul>
        <li>
          <b>Bubble 1</b>: encompasses the global scope, and has just one
          identifier in it: foo.
        </li>

        <li>
          <b>Bubble 2</b>: encompasses the scope of foo, which includes the
          three identifiers: a, bar and b.{" "}
        </li>

        <li>
          <b>Bubble 3</b>: encompasses the scope of bar, and it includes just
          one identifier: c.{" "}
        </li>
      </ul>

      <div>
        But what exactly makes a new bubble? Is it only the function? Can other
        structures in JavaScript create bubbles of scope?{" "}
      </div>

      <h2>Function vs. Block Scope</h2>

      <h3>Scope From Functions</h3>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>(a) {"{"}{" "}
        <br></br>
        <Text.Red nr_idents={1}>var</Text.Red> b <Text.Blue> = </Text.Blue>
        2; <br></br>
        <Text.Red nr_idents={1}>function</Text.Red>{" "}
        <Text.Purple>bar</Text.Purple>() {"{ }"} <br></br>
        <Text.Red nr_idents={1}>var</Text.Red> c <Text.Blue> = </Text.Blue>
        3; <br></br> {"}"}
        <br></br>
        <Text.Purple>foo</Text.Purple>( <Text.Blue>2</Text.Blue> );{" "}
      </div>
      <div>
        In this snippet, the scope bubble for <b>foo(..)</b> includes
        identifiers a, b, c and bar. It doesn't matter where in the scope a
        declaration appears, the variable or function belongs to the containing
        scope bubble, regardless.
        <p></p>
        <b>bar(..)</b> has its own scope bubble. So does the global scope, which
        has just one identifier attached to it: foo.
        <p></p>
        Because a, b, c, and bar all belong to the scope bubble of{" "}
        <b>foo(..)</b>, they are not accessible outside of foo(..). That is, the
        following code would all result in <b>ReferenceError</b> errors, as the
        identifiers are not available to the global scope:
      </div>
      <div className="examples">
        <Text.Purple>bar</Text.Purple>(); <Text.Grey>// fails</Text.Grey>
        <br></br>
        console.log( a, b, c );<Text.Grey> // all 3 fail</Text.Grey>
      </div>
      <div>
        However, all these identifiers (<b>a, b, c, foo, and bar</b>) are
        accessible inside of <b>foo(..)</b>, and indeed also available inside of
        <b> bar(..)</b> (assuming there are no shadow identifier declarations
        inside
        <b> bar(..)</b>).
        <p></p>
        We've seen that we can take any snippet of code and wrap a function
        around it, and that effectively "hides" any enclosed variable or
        function declarations from the outside scope inside that function's
        inner scope.
        <p></p>{" "}
        <b>While this technique "works", it is not necessarily very ideal.</b>
      </div>
      <h3>Blocks As Scopes</h3>
      <div>
        While functions are the most common unit of scope, other units of scope
        are possible, and the usage of these other scope units can lead to even
        better, cleaner to maintain code.
      </div>
      <div className="examples">
        <Text.Red>for</Text.Red> (<Text.Orange>var</Text.Orange> i=
        <Text.Blue>0</Text.Blue>; i{"<"}
        <Text.Blue>10</Text.Blue>; i<Text.Blue>++</Text.Blue>) {"{"} <br></br>
        <Text.Black nr_idents={1}>console.log( i );</Text.Black> <br></br>
        {"}"}
      </div>
      <div>
        We declare the variable <i>i</i> directly inside the for-loop head, most
        likely because our intent is to use <i>i</i> only within the context of
        that for-loop, and essentially ignore the fact that the variable
        actually scopes itself to the enclosing scope (function or global).
        <p></p>
        That's what block-scoping is all about. Declaring variables as close as
        possible, as local as possible, to where they will be used. Another
        example:
      </div>
      <div className="examples">
        <Text.Red>var</Text.Red> foo<Text.Blue> = true</Text.Blue>; <br></br>
        <Text.Red>if</Text.Red> (<Text.Orange>foo</Text.Orange>) {"{"} <br></br>
        <Text.Red nr_idents={1}>var </Text.Red>bar <Text.Blue> = </Text.Blue>{" "}
        foo * 2; <br></br>
        <Text.Black nr_idents={1}>bar</Text.Black> ={" "}
        <Text.Purple>something</Text.Purple> (bar);<br></br>
        <Text.Black nr_idents={1}>console.log(bar)</Text.Black>;<br></br>
        {"}"}
        <br></br>
        <Text.Black>console.log(bar)</Text.Black>;
      </div>
      <div>
        We are using a <b>bar</b> variable only in the context of the
        if-statement, so it makes a kind of sense that we would declare it
        inside the if-block. However, where we declare variables is not relevant
        when using <b>var</b>, because they will always belong to the enclosing
        scope. This snippet is essentially "fake" block-scoping
      </div>

      <h2>let keyword</h2>
      <div>
        ES6 introduces a new keyword let which sits alongside var as another way
        to declare variables. <p></p>
        The let keyword attaches the variable declaration to the scope of
        whatever block it's contained in.
      </div>

      <div className="examples">
        <Text.Red>let</Text.Red> foo<Text.Blue> = true</Text.Blue>; <br></br>
        <Text.Red>if</Text.Red> (<Text.Orange>foo</Text.Orange>) {"{"} <br></br>
        <Text.Red nr_idents={1}>var </Text.Red>bar <Text.Blue> = </Text.Blue>{" "}
        foo * 2; <br></br>
        <Text.Black nr_idents={1}>bar</Text.Black> ={" "}
        <Text.Purple>something</Text.Purple> (bar);<br></br>
        <Text.Black nr_idents={1}>console.log(bar)</Text.Black>;<br></br>
        {"}"}
        <br></br>
        <Text.Black className="hover">console.log(bar); </Text.Black>{" "}
        <Text.Grey> // ReferenceError</Text.Grey>
      </div>

      <div>
        {" "}
        A particular case where let shines is in the for-loop case as we
        discussed previously.
      </div>
      <div className="examples">
        <Text.Red>for</Text.Red> (<Text.Orange>let</Text.Orange> i=
        <Text.Blue>0</Text.Blue>; i{"<"}
        <Text.Blue>10</Text.Blue>; i<Text.Blue>++</Text.Blue>) {"{"} <br></br>
        <Text.Black nr_idents={1}>console.log( i );</Text.Black> <br></br>
        {"}"}
      </div>
      <h2>const keyword</h2>
      <div>
        In addition to <i>let</i>, ES6 introduces <i>const</i>, which also
        creates a block-scoped variable, but whose value is fixed (constant).
        Any attempt to change that value at a later time results in an error.
      </div>

      <div className="examples">
        <Text.Red>var</Text.Red> foo<Text.Blue> = true</Text.Blue>; <br></br>
        <Text.Red>if</Text.Red> (<Text.Orange>foo</Text.Orange>) {"{"} <br></br>
        <Text.Red nr_idents={1}>var </Text.Red>a <Text.Blue> = </Text.Blue> 2;{" "}
        <br></br>
        <Text.Red nr_idents={1}>const </Text.Red>b<Text.Blue> = 3</Text.Blue> ;{" "}
        <Text.Grey>// just fine!</Text.Grey>
        <br></br>
        <Text.Red nr_idents={1}>const </Text.Red>b<Text.Blue> = 4</Text.Blue> ;{" "}
        <Text.Grey>// error!</Text.Grey>
        <br></br>
        {"}"}
        <br></br>
        <Text.Black className="hover">console.log(a);</Text.Black>{" "}
        <Text.Grey>// 3</Text.Grey> <br></br>
        <Text.Black className="hover">console.log(b)</Text.Black>;
        <Text.Grey> // ReferenceError</Text.Grey>
      </div>
      <h2>Hoisting</h2>
      <div>
        There's a temptation to think that all of the code you see in a
        JavaScript program is interpreted line-by-line, top-down in order, as
        the program executes. While that is substantially true, there's one part
        of that assumption which can lead to incorrect thinking about your
        program.
      </div>
      <div class="examples">
        a <Text.Blue>= 2</Text.Blue>;<br></br> <Text.Red>var</Text.Red> a;{" "}
        <br></br> <Text.Black className="hover">console.log( a );</Text.Black>
        <Text.Grey> // 2</Text.Grey>
      </div>
      <div>
        Many developers would expect <b>undefined</b>, since the <b>var a</b>{" "}
        statement comes after the <b>a = 2</b>, and it would seem natural to
        assume that the variable is re-defined, and thus assigned the default
        undefined. <b>However, the output will be 2.</b>
      </div>

      <div class="examples">
        <Text.Black className="hover">console.log( a );</Text.Black>{" "}
        <Text.Grey>// undefined</Text.Grey> <br></br>
        <Text.Red>var</Text.Red> a <Text.Blue> = 2</Text.Blue>;
      </div>
      <div>
        You might be tempted to assume that, since the previous snippet
        exhibited some less-than-top-down looking behavior, perhaps in this
        snippet, <b>2</b> will also be printed. Others may think that since the
        a variable is used before it is declared, this must result in a
        <b> ReferenceError</b> being thrown. <p></p>Unfortunately, both guesses
        are incorrect. <b>undefined is the output.</b>
        <p></p>
        So, the best way to think about things is that all declarations, both
        variables and functions, are processed first, before any part of your
        code is executed.
        <p></p>
        When you see <b>var a = 2</b>;, you probably think of that as one
        statement. But JavaScript actually thinks of it as two statements:{" "}
        <b>var a</b>; and <b>a = 2</b> ;. The first statement, the declaration,
        is processed during the compilation phase. The second statement, the
        assignment, is left in place for the execution phase.
        <p>
          Our first snippet then should be thought of as being handled like
          this:
        </p>
      </div>
      <div class="examples">
        <Text.Red>var</Text.Red> a;
      </div>
      <div class="examples">
        a <Text.Blue> = 2</Text.Blue>;<br></br> console.log( a );
      </div>
      <div>Similarly, our second snippet is actually processed as:</div>
      <div class="examples">
        <Text.Red>var</Text.Red> a;
      </div>
      <div class="examples">
        console.log( a ); <br></br>a <Text.Blue> = 2</Text.Blue>;
      </div>
      <div>
        <b>
          Variable and function declarations are "moved" from where they appear
          in the flow of the code to the top of the code. This gives rise to the
          name "Hoisting".
        </b>
      </div>
      <h2>Scope Closure</h2>
      <div>
        <b>
          Closure is when a function is able to remember and access its lexical
          scope even when that function is executing outside its lexical scope.
        </b>
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Red nr_idents={1}>var</Text.Red> a <Text.Blue> = </Text.Blue>
        2; <br></br>
        <Text.Red nr_idents={1}>function</Text.Red>{" "}
        <Text.Purple>bar</Text.Purple>() {"{ "}
        <br></br>
        <Text.Black nr_idents={2}>console.log(a)</Text.Black> <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black> <br></br>
        <Text.Purple nr_idents={1} className="hover">
          bar
        </Text.Purple>{" "}
        () <Text.Grey>// 2</Text.Grey>
        <br></br> {"}"} <p></p>
        <Text.Purple>foo</Text.Purple>();{" "}
      </div>
      <div>
        Is this "closure"?
        <p></p>
        Well, technically... perhaps.
        <p></p>
        From a purely academic perspective, what is said of the above snippet is
        that the function <i>bar() </i> has a closure over the scope of{" "}
        <i>foo() </i>(and indeed, even over the rest of the scopes it has access
        to, such as the global scope in our case). Put slightly differently,
        it's said that
        <i>bar() </i> closes over the scope of <i>foo() </i>. Why? Because{" "}
        <i>bar() </i> appears nested inside of <i>foo() </i>. Plain and simple.
        <p></p>
        But, closure defined in this way is not directly observable, nor do we
        see closure exercised in that snippet. We clearly see lexical scope, but
        closure remains sort of a mysterious shifting shadow behind the code.
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Red nr_idents={1}>var</Text.Red> a <Text.Blue> = </Text.Blue>
        2; <br></br>
        <Text.Red nr_idents={1}>function</Text.Red>{" "}
        <Text.Purple>bar</Text.Purple>() {"{ "}
        <br></br>
        <Text.Black nr_idents={2}>console.log(a)</Text.Black> <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black> <br></br>
        <Text.Red nr_idents={1}>return</Text.Red> bar
        <br></br> {"}"}
        <p></p>
        <Text.Red>var</Text.Red> baz <Text.Blue> = </Text.Blue>
        <Text.Purple>foo</Text.Purple>(); <br></br>
        <Text.Black className="hover">baz(); </Text.Black>{" "}
        <Text.Grey>// 2</Text.Grey>
      </div>
      <div>
        The function <i>bar()</i> has lexical scope access to the inner scope of
        <i> foo()</i>. But then, we take <i>bar()</i>, the function itself, and
        pass it as a value. In this case, we return the function object itself
        that bar references.
        <p></p>
        After we execute <i>foo()</i>, we assign the value it returned (our
        inner <i> bar()</i>
        function) to a variable called <i>baz</i>, and then we actually invoke{" "}
        <i>baz()</i>, which of course is invoking our inner function{" "}
        <i>bar()</i>, just by a different identifier reference.
        <p></p>
        <i>bar()</i> is executed, for sure. But in this case, it's executed
        outside of its declared lexical scope.
        <p></p>
        After <i>foo()</i> executed, normally we would expect that the entirety
        of the inner scope of <i>foo()</i> would go away.
        <p></p>
        But the "magic" of closures does not let this happen. That inner scope
        is in fact still "in use", and thus does not go away. Who's using it?
        <b>
          {" "}
          The function <i>bar()</i> itself
        </b>
        .<p></p>
        By virtue of where it was declared, <i>bar()</i> has a lexical scope
        closure over that inner scope of <i>foo()</i>, which keeps that scope
        alive for <i>bar() </i>
        to reference at any later time.
        <p></p>
        <b>
          <i>bar()</i> still has a reference to that scope, and that reference
          is called closure
        </b>
        .
      </div>
      <h2>Loops + Closure</h2>
      <div class="examples">
        <Text.Red>for</Text.Red> ( <Text.Red>var</Text.Red> i
        <Text.Blue> = 1</Text.Blue>; {"i<="} <Text.Blue> 5</Text.Blue>; i
        <Text.Blue> ++</Text.Blue>) {"{"} <br></br>
        <Text.Purple nr_idents={1}>setTimeout</Text.Purple>({" "}
        <Text.Red>function</Text.Red> <Text.Purple>timer</Text.Purple>(){"{"}{" "}
        <br></br>
        <Text.Black nr_idents={2} className="hover">
          console.log( i );
        </Text.Black>{" "}
        <Text.Grey>// 6,6,6,6,6</Text.Grey>
        <br></br>
        <Text.Black nr_idents={1}></Text.Black>
        {"}"}, i*<Text.Blue>1000</Text.Blue> ); <br></br>
        {"}"}
      </div>
      <div>
        {" "}
        The spirit of this code snippet is that we would normally expect for the
        behavior to be that the numbers "1", "2", .. "5" would be printed out,
        one at a time, one per second, respectively. In fact, if you run this
        code, you get "6" printed out 5 times, at the one-second intervals.{" "}
        <p> </p>
        The terminating condition of the loop is when i is not {"<=5"}. The
        first time that's the case is when i is 6. So, the output is reflecting
        the final value of the i after the loop terminates.
        <p></p>
        This actually seems obvious on second glance. The timeout function
        callbacks are all running well after the completion of the loop.
        <p></p>
        What's missing? We need a new closured scope for each iteration of the
        loop.
        <p>
          There's a special behavior defined for <i>let</i> declarations used in
          the head of a for-loop. This behavior says that the variable will be
          declared not just once for the loop, <b>but each iteration</b>. And,
          it will, helpfully, be initialized at each subsequent iteration with
          the value from the end of the previous iteration.
        </p>
      </div>

      <div class="examples">
        <Text.Red>for</Text.Red> ( <Text.Red>let</Text.Red> i
        <Text.Blue> = 1</Text.Blue>; {"i<="} <Text.Blue> 5</Text.Blue>; i
        <Text.Blue> ++</Text.Blue>) {"{"} <br></br>
        <Text.Purple nr_idents={1}>setTimeout</Text.Purple>({" "}
        <Text.Red>function</Text.Red> <Text.Purple>timer</Text.Purple>(){"{"}{" "}
        <br></br>
        <Text.Black nr_idents={2} className="hover">
          console.log( i );
        </Text.Black>{" "}
        <Text.Grey>// 1,2,3,4,5</Text.Grey>
        <br></br>
        <Text.Black nr_idents={1}></Text.Black>
        {"}"}, i*<Text.Blue>1000</Text.Blue> ); <br></br>
        {"}"}
      </div>

      <div class="exercise">
        <Text.Black>
          <Text.Purple>function</Text.Purple> <Text.Orange>outer</Text.Orange>(){" "}
          {" {"}
        </Text.Black>
        <br></br>
        <Text.Black>
          <Text.Purple nr_idents={1}>var</Text.Purple> b ={" "}
          <Text.Green>10</Text.Green>;
        </Text.Black>
        <br></br>
        <Text.Black>
          <Text.Purple nr_idents={1}>var</Text.Purple> c ={" "}
          <Text.Green>100</Text.Green>;
        </Text.Black>
        <br></br>
        <Text.Black>
          <Text.Purple nr_idents={1}>function</Text.Purple>{" "}
          <Text.Orange>inner</Text.Orange>() {" {"}
        </Text.Black>
        <br></br>
        <Text.Black>
          <Text.Purple nr_idents={2}>var</Text.Purple> a ={" "}
          <Text.Green>20</Text.Green>;
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents2">
          {" "}
          console.log("a= " + a + " b= " + b);{" "}
        </Text.Black>
        <br></br>
        <Text.Black className="nr_idents2">a++;</Text.Black>
        <br></br>
        <Text.Black className="nr_idents2">b++;</Text.Black>
        <br></br>
        <Text.Black className="nr_idents1">{"}"}</Text.Black>
        <br></br>
        <Text.Black>
          <Text.Purple nr_idents={1}>return inner;</Text.Purple>
        </Text.Black>
        <br></br>
        <Text.Black>{"}"}</Text.Black>
        <p></p>
        <Text.Black>
          <Text.Purple>var</Text.Purple> X = <Text.Orange>outer</Text.Orange>();{" "}
          <Text.Grey>// outer() invoked the first time</Text.Grey>
        </Text.Black>
        <br></br>
        <Text.Black>
          <Text.Purple>var</Text.Purple> Y = <Text.Orange>outer</Text.Orange>();{" "}
          <Text.Grey>// outer() invoked the second time</Text.Grey>
        </Text.Black>
        <br></br>
        <Text.Black>
          <Text.Orange>X</Text.Orange>();{" "}
          <Text.Grey>// X() invoked the first time </Text.Grey>
        </Text.Black>
        <br></br>
        <Text.Black>
          <Text.Orange>X</Text.Orange>();{" "}
          <Text.Grey>// X() invoked the second time </Text.Grey>
        </Text.Black>
        <br></br>
        <Text.Black>
          <Text.Orange>Y</Text.Orange>();{" "}
          <Text.Grey>// Y() invoked the first time </Text.Grey>
        </Text.Black>
        <p></p>
        A) X() invoked the first time
        <ol>
          <li className="correct">a= 20 b= 10</li>
          <li className="incorrect">a= 20 b= 0</li>
          <li className="incorrect">a= 0 b= 0</li>
          <li className="incorrect">a= 1 b= 11</li>
          <li className="incorrect">a= 20 b= 11</li>
          <li className="incorrect">a= 21 b= 10</li>
          <li className="incorrect">a= 20 b= 12</li>
          <li className="incorrect">a= 21 b= 12</li>
        </ol>
        <br></br>
        B) X() invoked the second time
        <ol>
          <li className="incorrect">a= 20 b= 10</li>
          <li className="incorrect">a= 20 b= 0</li>
          <li className="incorrect">a= 0 b= 0</li>
          <li className="incorrect">a= 1 b= 11</li>
          <li className="correct">a= 20 b= 11</li>
          <li className="incorrect">a= 21 b= 10</li>
          <li className="incorrect">a= 20 b= 12</li>
          <li className="incorrect">a= 21 b= 12</li>
        </ol>
        <br></br>
        C) Y() invoked the first time
        <ol>
          <li className="correct">a= 20 b= 10</li>
          <li className="incorrect">a= 20 b= 0</li>
          <li className="incorrect">a= 0 b= 0</li>
          <li className="incorrect">a= 20 b= 11</li>
          <li className="incorrect">a= 20 b= 11</li>
          <li className="incorrect">a= 21 b= 10</li>
          <li className="incorrect">a= 20 b= 12</li>
          <li className="incorrect">a= 21 b= 12</li>
        </ol>
      </div>
    </>
  );
};

export default Operators;
