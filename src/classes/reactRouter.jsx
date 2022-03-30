import React, { useState } from "react";
import "../styles/css.less";
import * as Text from "../Utils/Text";
import UnitTest from "./unitTest";

const ReactRouter = () => {
  return (
    <>
      <h2>Installation</h2>
      <div className="info">npm install react-router-dom@6</div>
      <h2>Configuring Routes</h2>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <Text.Red>render</Text.Red>{" "}
        {"}"} <Text.Purple>from</Text.Purple>{" "}
        <Text.Green>"react-dom"</Text.Green>; <br></br>
        <Text.Purple>import</Text.Purple> {"{"} <br></br>
        <Text.Red className="nr_idents1">BrowserRoute</Text.Red>, <br></br>
        <Text.Red className="nr_idents1">Routes</Text.Red>, <br></br>
        <Text.Red className="nr_idents1">Route</Text.Red> <br></br>
        {"}"} <Text.Purple>from</Text.Purple>{" "}
        <Text.Green>"react-router-dom"</Text.Green>; <p></p>
        <Text.Blue>render</Text.Blue>( <br></br>
        <Text.Orange className="nr_idents1">
          {"<BrowserRouter>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Orange className="nr_idents2">{"<Routes>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<Route"}</Text.Orange> path=
        <Text.Green>"/"</Text.Green> element={"{"}
        <Text.Orange>{"<App />"}</Text.Orange>
        {"}"}<Text.Orange>{">"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route "}</Text.Orange> index
        element={"{"}
        <Text.Orange>{"<Home />"}</Text.Orange>
        {"}"} <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route "}</Text.Orange> path=
        <Text.Green>"teams"</Text.Green> element={"{"}
        <Text.Orange>{"<Teams />"}</Text.Orange>
        {"}"}<Text.Orange>{">"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents5">{"<Route "}</Text.Orange> path=
        <Text.Green>":teamId"</Text.Green> element={"{"}
        <Text.Orange>{"<Team />"}</Text.Orange>
        {"}"} <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents5">{"<Route "}</Text.Orange> path=
        <Text.Green>"new"</Text.Green> element={"{"}
        <Text.Orange>{"<NewTeamForm />"}</Text.Orange>
        {"}"} <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents5">{"<Route "}</Text.Orange> index
        element={"{"}
        <Text.Orange>{"<LeagueStandings />"}</Text.Orange>
        {"}"} <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"</Route> "}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"</Route> "}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents2">{"</Routes> "}</Text.Orange>{" "}
        <br></br>
        <Text.Orange className="nr_idents1">
          {"</BrowserRoute> "}
        </Text.Orange>{" "}
        <br></br>);
      </div>
      <h2>Navigation</h2>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <Text.Red>Link</Text.Red> {"}"}{" "}
        <Text.Purple>from</Text.Purple>{" "}
        <Text.Green>"react-router-dom"</Text.Green>; <p></p>
        <Text.Blue>function</Text.Blue> Home() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple> (<br></br>
        <Text.Orange className="nr_idents2">{"<>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<h1> "}</Text.Orange>
        {"Home"}
        <Text.Orange>{"</h1> "}</Text.Orange> {"}"} <br></br>
        <Text.Orange className="nr_idents3">{"<nav> "}</Text.Orange>
        <br></br>
        <Text.Pink className="nr_idents4">{"<Link"} </Text.Pink> to=
        <Text.Green>"/"</Text.Green>
        <Text.Pink>{">"}</Text.Pink>Home
        <Text.Pink>{"</Link>"} </Text.Pink> <br></br>
        <Text.Pink className="nr_idents4">{"<Link"} </Text.Pink> to=
        <Text.Green>"about"</Text.Green>
        <Text.Pink>{">"}</Text.Pink>About
        <Text.Pink>{"</Link>"} </Text.Pink> <br></br>
        <Text.Orange className="nr_idents3">{"</nav> "}</Text.Orange>
        <br></br>
        <Text.Orange className="nr_idents2">{"</>"}</Text.Orange> <br></br>
        <Text.Black className="nr_idents1">);</Text.Black> <br></br> }
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <Text.Red>useNavigate</Text.Red>{" "}
        {"}"} <Text.Purple>from</Text.Purple>{" "}
        <Text.Green>"react-router-dom"</Text.Green>; <p></p>
        let navigate = <Text.Blue>useNavigate</Text.Blue>(); <br></br>
        <Text.Blue>function</Text.Blue> Invoices() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple> (<br></br>
        <Text.Orange className="nr_idents2">{" <NewInvoiceForm"}</Text.Orange>
        <Text.Blue> onSubmit</Text.Blue> ={"{() =>"}
        <Text.Blue>navigate</Text.Blue>(<Text.Green>'/'</Text.Green>) }{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Black className="nr_idents1">);</Text.Black> <br></br>}
      </div>
      <h3>Reading URL Parameters</h3>
      <div>
        Use <b>:style</b> syntax in your route path and <b>useParams()</b> to
        read them:
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <Text.Red>Routes</Text.Red>,{" "}
        <Text.Red>Route</Text.Red>, <Text.Red>useParams</Text.Red>
        {"}"} <Text.Purple>from</Text.Purple>{" "}
        <Text.Green>"react-router-dom"</Text.Green>; <p></p>
        <Text.Blue>function</Text.Blue> App() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple> (<br></br>
        <Text.Orange className="nr_idents2">{"<Routes>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<Route"}</Text.Orange> path=
        <Text.Green>"invoices/:invoiceId"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoice/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange>
        <br></br>
        <Text.Orange className="nr_idents2">{"</Routes>"}</Text.Orange>{" "}
        <br></br>
        <Text.Black className="nr_idents1">);</Text.Black> <br></br>}<p></p>
        <Text.Blue>function</Text.Blue> Invoices() {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>let params ={" "}
        <Text.Blue>useParams</Text.Blue>(); <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple>{" "}
        <Text.Orange>{"<h1>"}</Text.Orange>
        Invoice {"{"}params.invoiceId{"}"}
        <Text.Orange>{"</h1>"}</Text.Orange> <br></br>}
      </div>
      <h3>Nested Routes</h3>
      <div>
        Routes can be nested inside one another, and their paths will nest too
        (child inheriting the parent).
      </div>
      <div className="examples">
        <Text.Blue>function</Text.Blue> App() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple> ( <br></br>
        <Text.Orange className="nr_idents2">{"<Routes>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<Route"}</Text.Orange> path=
        <Text.Green>"invoices"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route"}</Text.Orange> path=
        <Text.Green>":invoiceId"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoice/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route"}</Text.Orange> path=
        <Text.Green>"sent"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<SentInvoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange>
        <br></br>
        <Text.Orange className="nr_idents3">{"</Route>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents2">{"</Routes>"}</Text.Orange>{" "}
        <br></br>
        <Text.Black className="nr_idents1">)</Text.Black>
        <br></br>}
      </div>
      <div>
        This route config defined three route paths:
        <ol>
          <li>/invoices</li>
          <li>/invoices/sent</li>
          <li>/invoices/:invoiceId</li>
        </ol>
        When the URL is "/invoices/sent" the component tree will be:
      </div>
      <div className="examples">
        <Text.Orange>{"<App>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents1">{"<Invoices>"}</Text.Orange>{" "}
        <br></br>
        <Text.Orange className="nr_idents2">
          {"<SentInvoice/>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Orange className="nr_idents1">{"</Invoices>"}</Text.Orange>{" "}
        <br></br>
        <Text.Orange>{"</App>"}</Text.Orange> <br></br>
      </div>
      <div>When the URL is "/invoices/123", the component tree will:</div>
      <div className="examples">
        <Text.Orange>{"<App>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents1">{"<Invoices>"}</Text.Orange>{" "}
        <br></br>
        <Text.Orange className="nr_idents2">{"<Invoice/>"}</Text.Orange>{" "}
        <br></br>
        <Text.Orange className="nr_idents1">{"</Invoices>"}</Text.Orange>{" "}
        <br></br>
        <Text.Orange>{"</App>"}</Text.Orange> <br></br>
      </div>
      <div>
        Notice the inner component that changed with the URL ({"<SentInvoices>"}{" "}
        and {"<Invoice>"}). The parent route ({"<Invoices>"}) is responsible for
        making sure the matching child route is rendered with {"<Outlet>"}.{" "}
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <Text.Red>Routes</Text.Red>,{" "}
        <Text.Red>Route</Text.Red>, <Text.Red>Outlet</Text.Red>
        {"}"} <Text.Purple>from</Text.Purple>{" "}
        <Text.Green>"react-router-dom"</Text.Green>; <p></p>
        <Text.Blue>function</Text.Blue> App() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple> ( <br></br>
        <Text.Orange className="nr_idents2">{"<Routes>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<Route"}</Text.Orange> path=
        <Text.Green>"invoices"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route"}</Text.Orange> path=
        <Text.Green>":invoiceId"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoice/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route"}</Text.Orange> path=
        <Text.Green>"sent"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<SentInvoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange>
        <br></br>
        <Text.Orange className="nr_idents3">{"</Route>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents2">{"</Routes>"}</Text.Orange>{" "}
        <br></br>
        <Text.Black className="nr_idents1">)</Text.Black>
        <br></br>}<p></p>
        <Text.Blue>function</Text.Blue> Invoices() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple> ( <br></br>
        <Text.Orange className="nr_idents2">{"<div>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<h1>"}</Text.Orange> Invoices{" "}
        <Text.Orange>{"</h1"}</Text.Orange>
        <br></br>
        <Text.Orange className="nr_idents3">{"<Outlet/>"}</Text.Orange>{" "}
        <br></br>
        <Text.Orange className="nr_idents2">{"</div>"}</Text.Orange> <br></br>
        <Text.Black className="nr_idents1"></Text.Black>)<br></br>} <p></p>
        <Text.Blue>function</Text.Blue> Invoice() {"{"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>let {"{invoiceId}"} ={" "}
        <Text.Blue>useParams</Text.Blue>(); <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple>
        <Text.Orange> {"<h1>"}</Text.Orange>
        Invoice {"{invoiceId}"} <Text.Orange>{"</h1>"}</Text.Orange> <br></br>}{" "}
        <p></p>
        <Text.Blue>function</Text.Blue> SentInvoices() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple>
        <Text.Orange> {"<h1>"}</Text.Orange>
        Sent Invoices <Text.Orange>{"</h1>"}</Text.Orange> <br></br>} }
      </div>
      <h3>Index Routes</h3>
      <div>
        Index routes can be thought of as "default child routes". When a parent
        route has multiple children, but the URL is just at the parent's path,
        you probably want to render something into the outlet.
      </div>
      <div className="examples">
        <Text.Blue>function</Text.Blue> App() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple> ( <br></br>
        <Text.Orange className="nr_idents2">{"<Routes>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<Route"}</Text.Orange> path=
        <Text.Green>"/"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route"}</Text.Orange> path=
        <Text.Green>"invoices"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route"}</Text.Orange> path=
        <Text.Green>"activity"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Activity/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange>
        <br></br>
        <Text.Orange className="nr_idents3">{"</Route>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents2">{"</Routes>"}</Text.Orange>{" "}
        <br></br>
        <Text.Black className="nr_idents1">)</Text.Black>
        <br></br>}<p></p>
      </div>
      <div>
        This page looks great at "/invoices" and "/activity", but at "/" it's
        just a blank page in {"<main>"} because there is no child route to
        render there. For this we can add an index route:
      </div>
      <div className="examples">
        <Text.Blue>function</Text.Blue> App() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple> ( <br></br>
        <Text.Orange className="nr_idents2">{"<Routes>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<Route"}</Text.Orange> path=
        <Text.Green>"/"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route"}</Text.Orange> index
        element={"{"} <Text.Orange>{"<Activity/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route"}</Text.Orange> path=
        <Text.Green>"invoices"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents4">{"<Route"}</Text.Orange> path=
        <Text.Green>"activity"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Activity/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange>
        <br></br>
        <Text.Orange className="nr_idents3">{"</Route>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents2">{"</Routes>"}</Text.Orange>{" "}
        <br></br>
        <Text.Black className="nr_idents1">)</Text.Black>
        <br></br>}<p></p>
      </div>
      <div>
        Now at "/" the {"<Activity>"} element will render inside the outlet.
      </div>
      <h3>"Not Found" Routes</h3>
      <div>
        When no other route matches the URL, you can render a "not found" route
        using <b>path="*"</b>. This route will match any URL, but will have the
        weakest precedence so the router will only pick it if no other routes
        match.
      </div>
      <div className="examples">
        <Text.Blue>function</Text.Blue> App() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple> ( <br></br>
        <Text.Orange className="nr_idents2">{"<Routes>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<Route"}</Text.Orange> path=
        <Text.Green>"/"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<Route"}</Text.Orange> path=
        <Text.Green>"dashboard"</Text.Green>
        element={"{"} <Text.Orange>{"<Activity/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents3">{"<Route"}</Text.Orange> path=
        <Text.Green>"*"</Text.Green> element={"{"}{" "}
        <Text.Orange>{"<Invoices/>"}</Text.Orange> {"}"}{" "}
        <Text.Orange>{"/>"}</Text.Orange> <br></br>
        <Text.Orange className="nr_idents2">{"</Routes>"}</Text.Orange>{" "}
        <br></br>
        <Text.Black className="nr_idents1">)</Text.Black>
        <br></br>}<p></p>
      </div>
    </>
  );
};

export default ReactRouter;
