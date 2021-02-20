import React, { useState } from "react";
import "../styles/this.less";
import * as Text from "../Utils/Text";
import Navigation from "./navigation";

const This = ({ nr }) => {
  return (
    <>
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
      <div class="examples">
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
        <Text.Purple className="hover">foo</Text.Purple>();
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
            (obj.<Text.Blue>foo</Text.Blue>())
          </Text.Black>
        </Text.Purple>
        <Text.Grey> // Oops, global!</Text.Grey>
      </div>
      <div>
        Parameter passing is just an implicit assignment, and since we're
        passing a function, it's an implicit reference assignment, so the end
        result is the same as the previous snippet.
      </div>
      <div class="exercise">
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
      <div class="examples">
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
      <div class="examples">
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
      <div class="examples">
        <Text.Red>var</Text.Red> printFunc <Text.Blue>= </Text.Blue>
        printNameAgain.<Text.Purple>aplly</Text.Purple>(company,[
        <Text.Green>'Hi '</Text.Green>, <Text.Green>'!!'</Text.Green>]);
        <br></br>
        <Text.Purple>printFunc</Text.Purple>();
      </div>
      <h4>4. new Binding</h4>
    </>
  );
};

export default This;
