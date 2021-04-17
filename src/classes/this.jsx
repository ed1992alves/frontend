import React, { useState } from "react";
import "../styles/this.less";
import * as Text from "../Utils/Text";
import Navigation from "./navigation";

const This = ({ nr }) => {
  return (
    <div id="this">
      <Navigation currentPage={nr}></Navigation>
      <h2>This</h2>
      <div>
        One of the most confused mechanisms in JavaScript is the <b>this</b>{" "}
        keyword. It's a special identifier keyword that's automatically defined
        in the scope of every function.
        <p></p>
      </div>{" "}
      <ul>
        <b>Misconceptions: </b>
      </ul>
      <li>assume this refers to the function itself.</li>
      <li>refers to the function's lexical scope</li>
      <div>
        <b>this</b> is not an author-time binding but a runtime binding. It is
        contextual based on the conditions of the function's invocation. this
        binding has nothing to do with where a function is declared, but{" "}
        <b>
          has instead everything to do with the manner in which the function is
          called.
        </b>
      </div>
      <h3> Call site</h3>
      <div>
        To understand this binding, we have to understand the call-site: the
        location in code where a function is called{" "}
        <b>(not where it's declared)</b>.<br></br>
        We must inspect the call-site to answer the question: what's this this a
        reference to?
        <p></p>
        Finding the call-site it's not always that easy, as certain coding
        patterns can obscure the true call-site. What's important is to think
        about the call-stack (the stack of functions that have been called to
        get us to the current moment in execution). The call-site we care about
        is in the invocation before the currently executing function.
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>baz</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Grey nr_idents={1}>//</Text.Grey>{" "}
        <Text.Grey>call-stack is: `baz`</Text.Grey>
        <br></br>
        <Text.Grey nr_idents={1}>//</Text.Grey>
        <Text.Grey> call-site is in the global scope</Text.Grey> <br></br>
        <Text.Black nr_idents={1}>console.</Text.Black>
        <Text.Purple>log</Text.Purple>( "baz" );
        <br></br>
        <Text.Purple nr_idents={1}>bar</Text.Purple>();
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>function</Text.Red> <Text.Purple>bar</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Grey nr_idents={1} className="hover">
          //
        </Text.Grey>{" "}
        <Text.Grey>call-stack is: `baz` -> `bar`</Text.Grey>
        <br></br>
        <Text.Grey nr_idents={1} className="hover">
          //
        </Text.Grey>
        <Text.Grey> call-site is in `baz`</Text.Grey> <br></br>
        <Text.Black nr_idents={1}>console.</Text.Black>
        <Text.Purple>log</Text.Purple>( "bar" );
        <br></br>
        <Text.Purple nr_idents={1}>foo</Text.Purple>();
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Grey nr_idents={1} className="hover">
          //
        </Text.Grey>{" "}
        <Text.Grey>call-stack is: `baz` -> `bar` -> `foo`</Text.Grey>
        <br></br>
        <Text.Grey nr_idents={1} className="hover">
          //
        </Text.Grey>
        <Text.Grey> call-site is in `bar`</Text.Grey> <br></br>
        <Text.Black nr_idents={1}>console.</Text.Black>
        <Text.Purple>log</Text.Purple>( "foo" );
        <br></br>
        {"}"}
        <p></p>
        <Text.Purple>baz</Text.Purple>();
      </div>
      <h3> Binding Rules</h3>
      <div>
        We turn our attention now to how the call-site determines where this
        will point during the execution of a function. <br></br>
        You must inspect the call-site and determine which of 4 rules applies.{" "}
      </div>
      <h4>1. Default Binding</h4>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Black nr_idents={1}>console.</Text.Black>
        <Text.Purple>log</Text.Purple>( this.<Text.Blue>a</Text.Blue>);
        <br></br>
        {"}"}
        <br></br>
        <Text.Red>var</Text.Red> a <Text.Blue> = 2</Text.Blue>;<br></br>
        <Text.Purple className="hover">foo</Text.Purple>();
        <Text.Grey>// 2</Text.Grey>
      </div>
      <div>
        How do we know that the default binding rule applies here? We examine
        the call-site to see how foo() is called. In our snippet, foo() is
        called with a plain, un-decorated function reference. None of the other
        rules we will demonstrate will apply here, so the default binding
        applies instead.
      </div>
      <h4>2.Implicit Binding</h4>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Black nr_idents={1}>console.</Text.Black>
        <Text.Purple>log</Text.Purple>( this.<Text.Blue>a</Text.Blue>);
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>var</Text.Red> obj <Text.Blue> = </Text.Blue> {"{"} <br></br>
        <Text.Blue nr_idents={1}>a</Text.Blue>: <Text.Blue>2</Text.Blue>,{" "}
        <br></br>
        <Text.Blue nr_idents={1}>foo</Text.Blue>: foo
        <br></br>
        {"}"} <p></p>
        <Text.Purple className="hover">obj.foo</Text.Purple>();
        <Text.Grey>// 2</Text.Grey>
      </div>
      <div>
        At the point that foo() is called, it's preceded by an object reference
        to obj. When there is a context object for a function reference, the
        implicit binding rule says that it's that object which should be used
        for the function call's this binding.
        <p></p>
        Because obj is the this for the foo() call,{" "}
        <b>this.a is synonymous with obj.a</b>.<p></p>
        Only the top/last level of an object property reference chain matters to
        the call-site. For instance:
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Black nr_idents={1}>console.</Text.Black>
        <Text.Purple>log</Text.Purple>( this.<Text.Blue>a</Text.Blue>);
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>var</Text.Red> obj2 <Text.Blue> = </Text.Blue> {"{"} <br></br>
        <Text.Blue nr_idents={1}>a</Text.Blue>: <Text.Blue>42</Text.Blue>,{" "}
        <br></br>
        <Text.Blue nr_idents={1}>foo</Text.Blue>: foo
        <br></br>
        <p></p>
        <Text.Red>var</Text.Red> obj1 <Text.Blue> = </Text.Blue> {"{"} <br></br>
        <Text.Blue nr_idents={1}>a</Text.Blue>: <Text.Blue>2</Text.Blue>,{" "}
        <br></br>
        <Text.Blue nr_idents={1}>obj2</Text.Blue>: obj2
        <br></br>
        {"}"} <p></p>
        <Text.Black className="hover">
          obj1.obj2.<Text.Purple>foo</Text.Purple>();
        </Text.Black>
        <Text.Grey> // 42</Text.Grey>
      </div>
      <div>
        <b>Implicitly Lost</b>
        <p></p>
        One of the most common frustrations that this binding creates is when an
        implicitly bound function loses that binding, which usually means it
        falls back to the default binding
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Black nr_idents={1}>console.</Text.Black>
        <Text.Purple>log</Text.Purple>( this.<Text.Blue>a</Text.Blue>);
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>var</Text.Red> obj <Text.Blue> = </Text.Blue> {"{"} <br></br>
        <Text.Blue nr_idents={1}>a</Text.Blue>: <Text.Blue>2</Text.Blue>,{" "}
        <br></br>
        <Text.Blue nr_idents={1}>foo</Text.Blue>: foo
        <br></br>
        {"}"} <p></p>
        <Text.Red>var</Text.Red> bar <Text.Blue> = </Text.Blue> obj.
        <Text.Blue>foo</Text.Blue>;<br></br>
        <Text.Red>var</Text.Red> a{" "}
        <Text.Blue>
          {" "}
          = <Text.Green>"Oops, global!"</Text.Green>
        </Text.Blue>
        <p></p>
        <Text.Purple className="hover">bar</Text.Purple>();
        <Text.Grey> // Oops, global!</Text.Grey>
      </div>
      <div>
        The call-site is what matters, and the call-site is bar(), which is a
        plain, un-decorated call and thus the default binding applies.
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}{" "}
        <br></br>
        <Text.Black nr_idents={1}>console.</Text.Black>
        <Text.Purple>log</Text.Purple>( this.<Text.Blue>a</Text.Blue>);
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>function</Text.Red> <Text.Purple>doFoo</Text.Purple>(fn) {"{"}{" "}
        <br></br>
        <Text.Black nr_idents={1}>fn()</Text.Black>
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>var</Text.Red> obj <Text.Blue> = </Text.Blue> {"{"} <br></br>
        <Text.Blue nr_idents={1}>a</Text.Blue>: <Text.Blue>2</Text.Blue>,{" "}
        <br></br>
        <Text.Blue nr_idents={1}>foo</Text.Blue>: foo
        <br></br>
        {"}"} <p></p>
        <Text.Red>var</Text.Red> a{" "}
        <Text.Blue>
          {" "}
          = <Text.Green>"Oops, global!"</Text.Green>
        </Text.Blue>
        <p></p>
        <Text.Purple className="hover">
          doFoo
          <Text.Black>
            (obj.<Text.Blue>foo</Text.Blue>)
          </Text.Black>
        </Text.Purple>
        <Text.Grey> // Oops, global!</Text.Grey>
      </div>
      <div>
        Parameter passing is just an implicit assignment, and since we're
        passing a function, it's an implicit reference assignment, so the end
        result is the same as the previous snippet.
      </div>
      <div className="exercise">
        <Text.Red>
          var{" "}
          <Text.Black>
            name <Text.Blue>=</Text.Blue> <Text.Green>"Jay Global"</Text.Green>;
          </Text.Black>
        </Text.Red>
        <br></br>
        <Text.Red>var</Text.Red> person = {"{"} <br></br>
        <Text.Blue nr_idents={1}>name</Text.Blue> :{" "}
        <Text.Green>'Jay Person'</Text.Green>, <br></br>
        <Text.Blue nr_idents={1}>details </Text.Blue>: {"{"} <br></br>
        <Text.Blue nr_idents={2}>name</Text.Blue>:{" "}
        <Text.Green>'Jay Details'</Text.Green>, <br></br>
        <Text.Blue nr_idents={2}> print </Text.Blue>:{" "}
        <Text.Red>function</Text.Red>() {"{"} <br></br>
        <Text.Black nr_idents={3}>
          return this.<Text.Blue>name</Text.Blue>;{" "}
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={2}>{"}"}</Text.Black> <br></br>
        <Text.Black nr_idents={1}>{"},"}</Text.Black> <br></br>
        <Text.Blue nr_idents={1}> print </Text.Blue>:{" "}
        <Text.Red>function</Text.Red>() {"{"} <br></br>
        <Text.Black nr_idents={2}>
          return this.<Text.Blue>name</Text.Blue>;
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>{"}"} </Text.Black> <br></br>
        }; <p></p>
        <Text.Black className="hover">
          console.<Text.Purple>log</Text.Purple>(person.details.
          <Text.Purple>print</Text.Purple>());
        </Text.Black>{" "}
        <Text.Grey>// Jay Details</Text.Grey>
        <br></br>
        <Text.Black className="hover">
          console.<Text.Purple>log</Text.Purple>(person.
          <Text.Purple>print</Text.Purple>());
        </Text.Black>
        <Text.Grey>// Jay Person</Text.Grey>
        <p></p>
        <Text.Red>var </Text.Red> name1 <Text.Blue>=</Text.Blue> person.
        <Text.Blue>print</Text.Blue>; <br></br>
        <Text.Red>var </Text.Red>
        name2 = person.<Text.Blue>details</Text.Blue>;<p></p>
        <Text.Black className="hover">
          console.<Text.Purple>log</Text.Purple>(
          <Text.Purple>name1</Text.Purple>())
        </Text.Black>{" "}
        <Text.Grey>// Jay Global</Text.Grey> <br></br>
        <Text.Black className="hover">
          console.<Text.Purple>log</Text.Purple>(name2.
          <Text.Purple>print</Text.Purple>())
        </Text.Black>{" "}
        <Text.Grey>// Jay Details</Text.Grey>
      </div>
      <h4>3. Explicit Binding </h4>
      <div>
        But, what if you want to force a function call to use a particular
        object for the this binding, without putting a property function
        reference on the object?
        <br></br>
        You can explicitly manipulate the call site using call, apply, or bind
      </div>
      <div className="examples">
        <Text.Red>var</Text.Red> company <Text.Blue>=</Text.Blue> {"{"}
        <br></br>
        <Text.Blue nr_idents={1}>name</Text.Blue>:{" "}
        <Text.Green>'Google'</Text.Green>, <br></br>
        <Text.Blue nr_idents={1}>printName</Text.Blue>:{" "}
        <Text.Red>function</Text.Red> <Text.Purple>printName</Text.Purple>()
        {"{ "}
        <br></br>
        <Text.Black nr_idents={2}>
          console.<Text.Purple>log</Text.Purple>(this.
          <Text.Blue>name</Text.Blue>
          );{" "}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>{"}"} </Text.Black>
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>var </Text.Red> name <Text.Blue>= </Text.Blue>{" "}
        <Text.Green>'Scotch' </Text.Green>;<br></br>
        <Text.Red>var </Text.Red>
        printNameAgain <Text.Blue>= </Text.Blue>
        company.<Text.Blue>printName</Text.Blue>; <br></br>
        printNameAgain.<Text.Purple>call</Text.Purple>(company);
      </div>
      <div>
        Usually, when we call printNameAgain it referred to the global object,
        but we now use the call method to hard-bind company as its execution
        context.
        <p> </p>
        When the function has a parameter, you can just pass it in after the
        context:
      </div>
      <div className="examples">
        <Text.Red>var</Text.Red> company <Text.Blue>=</Text.Blue> {"{"}
        <br></br>
        <Text.Blue nr_idents={1}>name</Text.Blue>:{" "}
        <Text.Green>'Google'</Text.Green>, <br></br>
        <Text.Blue nr_idents={1}>printName</Text.Blue>:{" "}
        <Text.Red>function</Text.Red> <Text.Purple>printName</Text.Purple>
        (prefix, suffix)
        {"{ "}
        <br></br>
        <Text.Black nr_idents={2}>
          console.<Text.Purple>log</Text.Purple>(prefix + this.
          <Text.Blue>name</Text.Blue> + suffix );{" "}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>{"}"} </Text.Black>
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>var </Text.Red> name <Text.Blue>= </Text.Blue>{" "}
        <Text.Green>'Scotch' </Text.Green>;<br></br>
        <Text.Red>var </Text.Red>
        printNameAgain <Text.Blue>= </Text.Blue>
        company.<Text.Blue>printName</Text.Blue>; <br></br>
        printNameAgain.<Text.Purple>call</Text.Purple>(company,{" "}
        <Text.Green>'Hi '</Text.Green>, <Text.Green>'!!'</Text.Green>);
      </div>
      <div>
        {" "}
        The apply method allows you to pass in the arguments as an array:
      </div>
      <div className="examples">
        printNameAgain.<Text.Purple>aplly</Text.Purple>(company,[
        <Text.Green>'Hi '</Text.Green>, <Text.Green>'!!'</Text.Green>]);
      </div>
      <div>
        The last one is bind. Bind returns a new function that is hard-coded to
        call the original function with the this context set as you specified.
      </div>
      <div className="examples">
        <Text.Red>var</Text.Red> printFunc <Text.Blue>= </Text.Blue>
        printNameAgain.<Text.Purple>bind</Text.Purple>(company,
        <Text.Green>'Hi '</Text.Green>, <Text.Green>'!!'</Text.Green>);
        <br></br>
        <Text.Purple>printFunc</Text.Purple>();
      </div>
      <h4>4. new Binding</h4>
      <div>
        JavaScript has a new operator, and the code pattern to use it looks
        basically identical to what we see in those class-oriented languages;
        most developers assume that JavaScript's mechanism is doing something
        similar. However, there really is no connection to class-oriented
        functionality implied by new usage in JS.
        <p></p>
        First, let's re-define what a "constructor" in JavaScript is. In JS,
        constructors are just functions that happen to be called with the new
        operator in front of them. They are not attached to classes, nor are
        they instantiating a class. They are not even special types of
        functions. They're just regular functions that are, in essence, hijacked
        by the use of new in their invocation.
        <p>
          When a function is invoked with new in front of it, otherwise known as
          a constructor call, the following things are done automatically:
        </p>
        <li>
          a brand new object is created (aka, constructed) out of thin air
        </li>
        <li>the newly constructed object is [[Prototype]]-linked</li>
        <li>
          the newly constructed object is set as the this binding for that
          function call
        </li>
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>(a){"{"}
        <br></br>
        <Text.Black nr_idents={1}></Text.Black>this.<Text.Blue>a</Text.Blue> =
        a;<br></br>
        {"}"}
        <br></br>
        <Text.Red>var</Text.Red> bar <Text.Blue>=</Text.Blue>{" "}
        <Text.Red>new</Text.Red> <Text.Purple>foo</Text.Purple>({" "}
        <Text.Blue>2</Text.Blue> ); <br></br>
        <Text.Black className="hover">
          console.<Text.Purple>log</Text.Purple>( bar.<Text.Blue>a</Text.Blue>{" "}
          );
        </Text.Black>
        <Text.Grey> // 2</Text.Grey>
      </div>
      <div>
        By calling foo(..) with new in front of it, we've constructed a new
        object and set that new object as the this for the call of foo(..)
      </div>
      <h3>Order of Precedence</h3>
      <div>
        It's essential to note that the rules are applied in order of
        precedence. Meaning that if two or more of rules are found in the same
        scenario, there is an order in which they are applied. It's as follows:
      </div>
      <li>1. Constructor calls (rule 4)</li>
      <li>2. Explicit binding</li>
      <li>3. Implicit binding</li>
      <li>4. Default binding</li>
      <div className="exercise">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>(something){" "}
        {"{"} <br></br>
        <Text.Black nr_idents={1}></Text.Black>this.<Text.Blue>a</Text.Blue>{" "}
        <Text.Blue>=</Text.Blue> something; <br></br>
        {"}"} <p></p>
        <Text.Red>var</Text.Red> obj1 = {"{"} <br></br>
        <Text.Blue nr_idents={1}>foo</Text.Blue>: foo <br></br>
        {"}"}; <p></p>
        <Text.Red>var</Text.Red> obj2 = {"{}"} <p></p>
        obj1.<Text.Purple>foo</Text.Purple>( <Text.Blue>2</Text.Blue> );
        <br></br>
        <Text.Black className="hover">
          console.<Text.Purple>log</Text.Purple>( obj1.<Text.Blue>a</Text.Blue>{" "}
          );
        </Text.Black>
        <Text.Grey> // 2</Text.Grey> <p></p>
        obj1.foo.<Text.Purple>call</Text.Purple>( obj2, <Text.Blue>3</Text.Blue>
        ); <br></br>
        <Text.Black className="hover">
          console.log(obj2.<Text.Blue>a</Text.Blue>);
        </Text.Black>{" "}
        <Text.Grey> // 3</Text.Grey>
        <p></p>
        <Text.Red>var</Text.Red> bar <Text.Blue>=</Text.Blue>{" "}
        <Text.Red>new</Text.Red> obj1.<Text.Purple>foo</Text.Purple>({" "}
        <Text.Blue>4</Text.Blue> ); <br></br>
        <Text.Black className="hover">
          console.<Text.Blue>log</Text.Blue>(obj1.
          <Text.Blue>a</Text.Blue>);
        </Text.Black>
        <Text.Grey> // 2</Text.Grey>
        <br></br>
        <Text.Black className="hover">
          console.<Text.Blue>log</Text.Blue>(bar.<Text.Blue>a</Text.Blue>);
        </Text.Black>{" "}
        <Text.Grey>// 4 </Text.Grey>
        <br></br>
      </div>
      <h2>Common Pitfalls: Async Handling</h2>
      <div>
        There are a few known pitfalls with the this binding. They are most
        noticed in async logics that receive callbacks as handlers. These
        handlers are sometimes bound to a different context making this behave
        unexpectedly.
        <p></p>
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}
        <br></br>
        <Text.Purple nr_idents={1}>setTimeout</Text.Purple>(function() {"{"}
        <br></br>
        <Text.Black nr_idents={2}>
          console.<Text.Purple>log</Text.Purple>( this.<Text.Blue>a</Text.Blue>{" "}
          );{" "}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>
          {"}"},<Text.Blue>100</Text.Blue>);
        </Text.Black>
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>var</Text.Red> obj = {"{"}
        <br></br>
        <Text.Blue nr_idents={1}>a</Text.Blue>: <Text.Blue>2</Text.Blue>
        <br></br>
        {"}"}; <p></p>
        <Text.Red>var</Text.Red> a = <Text.Blue>5</Text.Blue>
        <p></p>
        foo.
        <Text.Black className="hover">
          <Text.Purple>call</Text.Purple>( obj );
        </Text.Black>
        <Text.Grey>// 5</Text.Grey>
      </div>
      <div>
        Event handling is one such situation. Event handlers are callback
        functions that are passed to events registrations. These callback
        functions are executed at runtime when the event is triggered. Here is a
        basic example:
      </div>
      <div className="examples batatas">
        var company = {"{"} <br></br>
        <Text.Black nr_idents={1}>
          <Text.Blue>name</Text.Blue>: <Text.Green>'Scotch'</Text.Green>,{" "}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>
          <Text.Blue>getName</Text.Blue>: <Text.Purple>function</Text.Purple>(){" "}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>{"{"}</Text.Black> <br></br>
        <Text.Black nr_idents={2}>
          console.<Text.Purple>log</Text.Purple>(this.
          <Text.Blue>name</Text.Blue>)
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black> <br></br>
        {"}"} <br></br>
        <Text.Grey>// This event's handler will throw an error</Text.Grey>{" "}
        <br></br>
        button.<Text.Purple>addEventListener</Text.Purple>(
        <Text.Green>'click'</Text.Green>, company.<Text.Blue>getName</Text.Blue>
        ) <br></br>
      </div>
      <div>
        The browser needs to give some contextual information about the event.
        It does this by binding to the this in the function. So you could get
        details about the event from the keyword:
      </div>
      <h2>Lexical this</h2>
      <div>
        ES6 introduces a special kind of function that does not use these rules:
        arrow-function.
        <p></p>Instead of using the four standard this rules, arrow-functions
        adopt the this binding from the enclosing (function or global) scope.
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}
        <Text.Black nr_idents={1}>return (a) => {"{"}</Text.Black> <br></br>
        <Text.Grey nr_idents={3}>
          {" "}
          {"// this here is lexically adopted from foo()"}{" "}
        </Text.Grey>{" "}
        <br></br>
        <Text.Black nr_idents={3}>
          console.<Text.Purple>log</Text.Purple>( this.<Text.Blue>a</Text.Blue>{" "}
          ); <br></br>
        </Text.Black>
        <Text.Black nr_idents={2}></Text.Black>
        {"}"}; <br></br>
        {"}"}
        <p></p>
        <Text.Red>var</Text.Red> obj1 = {"{"}
        <br></br>
        <Text.Blue nr_idents={1}>a</Text.Blue>: <Text.Blue>2</Text.Blue>
        <br></br>
        {"}"}; <p></p>
        <Text.Red>var</Text.Red> obj2 = {"{"}
        <br></br>
        <Text.Blue nr_idents={1}>a</Text.Blue>: <Text.Blue>3</Text.Blue>
        <br></br>
        {"}"}; <p></p>
        <Text.Red>var</Text.Red> bar <Text.Blue>=</Text.Blue>
        <Text.Black>
          foo.
          <Text.Purple>call</Text.Purple>( obj1 );
        </Text.Black>
        <br></br>
        <Text.Black className="hover">
          bar.<Text.Purple>call</Text.Purple>( obj2 );
        </Text.Black>{" "}
        <Text.Grey>// 2</Text.Grey>
      </div>
      <div>
        The arrow-function created in foo() lexically captures whatever foo()s
        this is at its call-time. Since foo() was this-bound to obj1, bar (a
        reference to the returned arrow-function) will also be this-bound to
        obj1.{" "}
        <b>
          The lexical binding of an arrow-function cannot be overridden (even
          with new!).
        </b>
        <p></p>
        The most common use-case will likely be in the use of callbacks, such as
        event handlers or timers
      </div>
      <div className="examples">
        <Text.Red>function</Text.Red> <Text.Purple>foo</Text.Purple>() {"{"}
        <br></br>
        <Text.Purple nr_idents={1}>setTimeout</Text.Purple>(() => {"{"}
        <br></br>
        <Text.Black nr_idents={2}>
          console.<Text.Purple>log</Text.Purple>( this.<Text.Blue>a</Text.Blue>{" "}
          );{" "}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>
          {"}"},<Text.Blue>100</Text.Blue>);
        </Text.Black>
        <br></br>
        {"}"}
        <p></p>
        <Text.Red>var</Text.Red> obj = {"{"}
        <br></br>
        <Text.Blue nr_idents={1}>a</Text.Blue>: <Text.Blue>2</Text.Blue>
        <br></br>
        {"}"}; <p></p>
        <Text.Red>var</Text.Red> a = <Text.Blue>5</Text.Blue>
        <p></p>
        foo.
        <Text.Black className="hover">
          <Text.Purple>call</Text.Purple>( obj );
        </Text.Black>
        <Text.Grey> // 2</Text.Grey>
      </div>
      <div className="examples batatas">
        var company = {"{"} <br></br>
        <Text.Black nr_idents={1}>
          <Text.Blue>name</Text.Blue>: <Text.Green>'Scotch'</Text.Green>,{" "}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>
          <Text.Blue>getName</Text.Blue>: <Text.Purple>function</Text.Purple>(){" "}
        </Text.Black>
        <br></br>
        <Text.Black nr_idents={1}>{"{"}</Text.Black> <br></br>
        <Text.Black nr_idents={2} className="hover">
          console.<Text.Purple>log</Text.Purple>(this.
          <Text.Blue>name</Text.Blue>)
        </Text.Black>{" "}
        <Text.Grey> // Scotch</Text.Grey>
        <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black> <br></br>
        {"}"} <br></br>
        <Text.Grey>
          // This way remove the explicit binding added by default
        </Text.Grey>{" "}
        <br></br>
        button.<Text.Purple>addEventListener</Text.Purple>(
        <Text.Green>'click'</Text.Green>, () => company.
        <Text.Blue>getName</Text.Blue>() ) <br></br>
      </div>
      <div className="exercise">
        <Text.Red>function</Text.Red> <Text.Purple>getLastName</Text.Purple>()
        {"{"}
        <br></br>
        <Text.Red nr_idents={1}>return</Text.Red> this.
        <Text.Blue>lastName</Text.Blue>;<br></br>
        {"}"}
        <p></p>
        <Text.Red>const</Text.Red> obj <Text.Blue>=</Text.Blue> {"{"} <br></br>
        <Text.Blue nr_idents={1}>firstName</Text.Blue>:{" "}
        <Text.Green>"Augustino"</Text.Green>, <br></br>
        <Text.Blue nr_idents={1}>lastName</Text.Blue>:{" "}
        <Text.Green>"Moreira"</Text.Green>, <br></br>
        <Text.Blue nr_idents={1}>year</Text.Blue>: <Text.Blue>1992</Text.Blue>,{" "}
        <br></br>
        <Text.Blue nr_idents={1}>country</Text.Blue>:{" "}
        <Text.Green>"PT"</Text.Green>, <br></br>
        <Text.Blue nr_idents={1}>getFirstName</Text.Blue>: () => {"{"} <br></br>
        <Text.Black nr_idents={2}>
          <Text.Red>return</Text.Red> this.<Text.Blue>firstName</Text.Blue>;{" "}
        </Text.Black>{" "}
        <br></br>
        <Text.Black nr_idents={1}>
          {"}"}, <br></br>
        </Text.Black>
        <Text.Blue nr_idents={1}>getLastName</Text.Blue>: getLastName, <br></br>
        <Text.Blue nr_idents={1}>getYear</Text.Blue>:
        <Text.Red> function</Text.Red>() {"{"} <br></br>
        <Text.Black nr_idents={2}>
          <Text.Red>return</Text.Red> this.<Text.Blue>year</Text.Blue>;{" "}
          <br></br>
        </Text.Black>
        <Text.Black nr_idents={1}>{"}"}</Text.Black>, <br></br>
        <Text.Blue nr_idents={1}>updateYear</Text.Blue>:
        <Text.Red> function</Text.Red>() {"{"} <br></br>
        <Text.Black nr_idents={2}>
          console.log({" "}
          <Text.Green>
            {" "}
            {
              "`Por favor introduza a idade de ${this.firstName} ${this.lastName}`"
            }{" "}
          </Text.Green>
          ) ; <br></br>
        </Text.Black>{" "}
        <Text.Red nr_idents={2}>return</Text.Red> new_year => this.
        <Text.Blue>year = </Text.Blue>
        new_year; <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black>, <br></br>
        <Text.Blue nr_idents={1}>updateCountry</Text.Blue>:{" "}
        <Text.Red> function</Text.Red>() {"{"} <br></br>
        <Text.Black nr_idents={2}>
          console.log({" "}
          <Text.Green>
            {" "}
            {
              "`Por favor introduza o pais de ${this.firstName} ${this.lastName}`"
            }{" "}
          </Text.Green>
          ) ; <br></br>
        </Text.Black>{" "}
        <Text.Red nr_idents={2}>return function</Text.Red> (new_country) {"{"}{" "}
        <br></br> <Text.Black nr_idents={3}> this.</Text.Black>
        <Text.Blue>country = </Text.Blue>
        new_country; <br></br>
        <Text.Black nr_idents={2}>{"}"}</Text.Black> <br></br>
        <Text.Black nr_idents={1}>{"}"}</Text.Black> <br></br>
        {"}"}
        <p></p>
        <Text.Black className="hover">
          obj.<Text.Purple>getFirstName</Text.Purple>();
        </Text.Black>{" "}
        <Text.Grey>// undefined</Text.Grey>
        <br></br>
        <Text.Black className="hover">
          obj.<Text.Purple>getLastName</Text.Purple>();
        </Text.Black>{" "}
        <Text.Grey>// Moreira</Text.Grey>
        <br></br>
        <Text.Black className="hover">
          obj.<Text.Purple>getYear</Text.Purple>();
        </Text.Black>{" "}
        <Text.Grey>// 1992</Text.Grey>
        <p></p>
        <Text.Black>
          <Text.Red>const</Text.Red> setYear <Text.Blue> =</Text.Blue> obj.
          <Text.Purple>updateYear</Text.Purple>()
        </Text.Black>
        <Text.Grey>
          {" "}
          // Por favor introduza a idade de Augustino Moreira{" "}
        </Text.Grey>
        <br></br>
        <Text.Purple>setYear</Text.Purple>(<Text.Blue>1994</Text.Blue>);{" "}
        <br></br>
        <Text.Black className="hover">
          obj.<Text.Purple>getYear</Text.Purple>();
        </Text.Black>{" "}
        <Text.Grey> // 1994</Text.Grey> <br></br>
        <Text.Black className="hover">
          window.<Text.Blue>year</Text.Blue>();
        </Text.Black>{" "}
        <Text.Grey> // undefined</Text.Grey>
        <p></p>
        <Text.Black>
          <Text.Red>const</Text.Red> setCountry <Text.Blue> =</Text.Blue> obj.
          <Text.Purple>updateCountry</Text.Purple>()
        </Text.Black>
        <Text.Grey>
          {" "}
          // Por favor introduza o país de Augustino Moreira{" "}
        </Text.Grey>
        <br></br>
        <Text.Purple>setCountry</Text.Purple>(<Text.Green>'ES'</Text.Green>);{" "}
        <br></br>
        <Text.Black className="hover">
          obj.<Text.Blue>country</Text.Blue>;
        </Text.Black>{" "}
        <Text.Grey> // PT</Text.Grey> <br></br>
        <Text.Black className="hover">
          window.<Text.Blue>country</Text.Blue>;
        </Text.Black>{" "}
        <Text.Grey> // ES</Text.Grey>
      </div>
    </div>
  );
};

export default This;
