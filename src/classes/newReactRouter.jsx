import React, { useState } from "react";
import "../styles/css.less";
import * as Text from "../Utils/Text";

const NewReactRouter = () => {
  return (
    <>
      <h2> Configuring Routes</h2>
      <div>
        Routes are configured in app/routes.ts. Each route has two required
        parts: a URL pattern to match the URL, and a file path to the route
        module that defines its behavior.
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <br></br>
        <Text.Purple className="nr_idents1">type</Text.Purple>{" "}
        <Text.Red>RouteConfig</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">route</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">index</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">layout</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">prefix</Text.Red>,<br></br> {"}"}{" "}
        <Text.Purple>from</Text.Purple>
        <Text.Yellow> "@react-router/dev/routes"</Text.Yellow>;<br></br>
        <p></p> <Text.Purple>export default</Text.Purple> [ <br></br>{" "}
        <Text.Blue className="nr_idents1">index</Text.Blue>("
        <Text.Yellow>./home.tsx</Text.Yellow>"), <br></br>
        <Text.Blue className="nr_idents1">route</Text.Blue>("
        <Text.Yellow>about</Text.Yellow>", "
        <Text.Yellow>./about.tsx</Text.Yellow>"), <br></br> <p></p>
        <Text.Blue className="nr_idents1">layout</Text.Blue>
        ("<Text.Yellow>./auth/layout.tsx</Text.Yellow>", [ <br></br>{" "}
        <Text.Blue className="nr_idents2">route</Text.Blue>("
        <Text.Yellow>login</Text.Yellow>", "
        <Text.Yellow>./auth/login.tsx</Text.Yellow>"), <br></br>
        <Text.Blue className="nr_idents2">route</Text.Blue>("
        <Text.Yellow>register</Text.Yellow>", "
        <Text.Yellow>./auth/register.tsx</Text.Yellow>"), <br></br>
        <Text.Black className="nr_idents1"></Text.Black>]),<p></p>{" "}
        <Text.Purple className="nr_idents1">...</Text.Purple>{" "}
        <Text.Blue>prefix </Text.Blue>
        ("<Text.Yellow>concerts</Text.Yellow>", [<br></br>
        <Text.Blue className="nr_idents2">index</Text.Blue>("
        <Text.Yellow>./concerts/home.tsx</Text.Yellow>"), <br></br>
        <Text.Blue className="nr_idents2">route</Text.Blue>("
        <Text.Yellow>:city</Text.Yellow>", "
        <Text.Yellow>./concerts/city.tsx</Text.Yellow>"),<br></br>
        <Text.Blue className="nr_idents2">route</Text.Blue>("
        <Text.Yellow>trending</Text.Yellow>", "
        <Text.Yellow>./concerts/trending.tsx</Text.Yellow>"),
        <br></br> <Text.Black className="nr_idents1"></Text.Black>]), <br></br>]{" "}
        <Text.Purple>satisfies</Text.Purple> <Text.Blue>RouteConfig</Text.Blue>;
      </div>
      <h3> Route Modules</h3>
      <div>The files referenced in routes.ts define each route's behavior:</div>
      <div className="examples">
        <Text.Blue>route</Text.Blue>("<Text.Yellow>teams/:teamId</Text.Yellow>",
        "<Text.Yellow>./team.tsx</Text.Yellow>"),
      </div>
      <h3>Nested Routes</h3>
      <div>Routes can be nested inside parent routes.</div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <br></br>
        <Text.Purple className="nr_idents1">type</Text.Purple>{" "}
        <Text.Red>RouteConfig</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">route</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">index</Text.Red>,<br></br>{" "}
        <Text.Purple>from</Text.Purple>
        <Text.Yellow> "@react-router/dev/routes"</Text.Yellow>;<br></br>
        <p></p> <Text.Purple>export default</Text.Purple> [ <br></br>
        <Text.Blue className="nr_idents1">route</Text.Blue>("
        <Text.Yellow>dashboard</Text.Yellow>", "
        <Text.Yellow>./dashboard.tsx</Text.Yellow>"), <br></br> <p></p>
        <Text.Grey className="nr_idents2"> // child routes</Text.Grey> <br></br>
        <Text.Blue className="nr_idents2">index</Text.Blue>
        ("<Text.Yellow>./auth/layout.tsx</Text.Yellow>"), <br></br>{" "}
        <Text.Blue className="nr_idents2">route</Text.Blue>("
        <Text.Yellow>settings</Text.Yellow>", "{" "}
        <Text.Yellow>settings.tsx</Text.Yellow>"),<br></br>{" "}
        <Text.Black className="nr_idents1"></Text.Black>]), <br></br>]{" "}
        <Text.Purple>satisfies</Text.Purple> <Text.Blue>RouteConfig</Text.Blue>;
      </div>
      <div>
        The path of the parent is automatically included in the child, so this
        config creates both "/dashboard" and "/dashboard/settings" URLs.
        <p></p>
        Child routes are rendered through the {"<"}Outlet {"/>"} in the parent
        route.
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <Text.Red>Outlet</Text.Red>{" "}
        {"}"} <Text.Purple>from</Text.Purple> "
        <Text.Yellow>react-router</Text.Yellow>";
        <p></p>
        <Text.Purple>export default</Text.Purple>{" "}
        <Text.Blue>function Dashboard</Text.Blue>() {"{"} <br></br>
        <Text.Purple className="nr_idents1">return </Text.Purple> (<br></br>
        <Text.Black className="nr_idents2">{"<"}</Text.Black>
        <Text.Red>div</Text.Red>
        {">"} <br></br>
        <Text.Black className="nr_idents3">{"<"}</Text.Black>
        <Text.Red>h1</Text.Red>
        {">"} Dashboard
        {" </"} <Text.Red>h1</Text.Red>
        {">"} <br></br>
        <Text.Grey className="nr_idents3">
          /* will either be home.tsx or settings.tsx */
        </Text.Grey>{" "}
        <br></br>
        <Text.Black className="nr_idents3">{"<"}</Text.Black>
        <Text.Blue>Outlet</Text.Blue> {"/>"} <br></br>
        <Text.Black className="nr_idents2">{"</"}</Text.Black>
        <Text.Red>div</Text.Red>
        {">"} <br></br> <Text.Black className="nr_idents1"></Text.Black>);
        <br></br> {"}"}
      </div>
      <h3>Layout Routes</h3>
      <div>
        Using layout, layout routes create new nesting for their children, but
        they don't add any segments to the URL. It's like the root route but
        they can be added at any level.
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <br></br>
        <Text.Purple className="nr_idents1">type</Text.Purple>{" "}
        <Text.Red>RouteConfig</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">route</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">index</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">layout</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">prefix</Text.Red>,<br></br> {"}"}{" "}
        <Text.Purple>from</Text.Purple>
        <Text.Yellow> "@react-router/dev/routes"</Text.Yellow>;<br></br>
        <p></p> <Text.Purple>export default</Text.Purple> [ <br></br>{" "}
        <Text.Blue className="nr_idents1">layout</Text.Blue>
        ("<Text.Yellow>./marketing/layout.tsx</Text.Yellow>", [ <br></br>{" "}
        <Text.Blue className="nr_idents2">index</Text.Blue>("
        <Text.Yellow>./marketing/home.tsx</Text.Yellow>"), <br></br>
        <Text.Blue className="nr_idents2">route</Text.Blue>("
        <Text.Yellow>contact</Text.Yellow>", "
        <Text.Yellow>./marketing/contact.tsx</Text.Yellow>"), <br></br>
        <Text.Black className="nr_idents1"></Text.Black>]),<p></p>{" "}
        <Text.Purple className="nr_idents1">...</Text.Purple>{" "}
        <Text.Blue>prefix </Text.Blue>
        ("<Text.Yellow>projects</Text.Yellow>", [<br></br>
        <Text.Blue className="nr_idents2">index</Text.Blue>("
        <Text.Yellow>./projects/home.tsx</Text.Yellow>"), <br></br>
        <Text.Blue className="nr_idents2">layout</Text.Blue>
        ("<Text.Yellow>./projects/project-layout.tsx</Text.Yellow>", [ <br></br>
        <Text.Blue className="nr_idents3">route</Text.Blue>("
        <Text.Yellow>:pid</Text.Yellow>", "
        <Text.Yellow>./projects/project.tsx</Text.Yellow>"),<br></br>
        <Text.Blue className="nr_idents3">route</Text.Blue>("
        <Text.Yellow>:pid/edit</Text.Yellow>", "
        <Text.Yellow>./projects/edit-project.tsx</Text.Yellow>"),
        <br></br> <Text.Black className="nr_idents1"></Text.Black>]), <br></br>]{" "}
        <Text.Purple>satisfies</Text.Purple> <Text.Blue>RouteConfig</Text.Blue>;
      </div>
      <div>
        Note that:
        <p></p>
        <li>
          <i>home.tsx</i> and <i>contact.tsx</i> will be rendered into the
          <i>marketing/layout.tsx</i> outlet without creating any new URL paths{" "}
        </li>{" "}
        <li>
          <i>project.tsx</i> and <i>edit-project.tsx</i> will be rendered into
          the <i>projects/project-layout.tsx</i> outlet at <i>/projects/:pid</i>{" "}
          and <i>/projects/:pid/edit</i> while <i>projects/home.tsx</i> will
          not.
        </li>
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <br></br>
        <Text.Purple className="nr_idents1">type</Text.Purple>{" "}
        <Text.Red>RouteConfig</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">route</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">index</Text.Red>,<br></br>{" "}
        <Text.Purple>from</Text.Purple>
        <Text.Yellow> "@react-router/dev/routes"</Text.Yellow>;<br></br>
        <p></p> <Text.Purple>export default</Text.Purple> [ <br></br>{" "}
        <Text.Grey>// renders into the root.tsx Outlet at / </Text.Grey>
        <br></br>
        <Text.Blue className="nr_idents1">index</Text.Blue>("
        <Text.Yellow>./home.tsx</Text.Yellow>"), <br></br>
        <Text.Blue className="nr_idents1">route</Text.Blue>("
        <Text.Yellow>dashboard</Text.Yellow>", "
        <Text.Yellow>./dashboard.tsx</Text.Yellow>", [ <br></br>
        <p></p>
        <Text.Grey className="nr_idents2">
          // renders into the dashboard.tsx Outlet at /dashboard
        </Text.Grey>{" "}
        <br></br>
        <Text.Blue className="nr_idents2">index</Text.Blue>
        ("<Text.Yellow>.dashboard-home.tsx</Text.Yellow>", [ <br></br>{" "}
        <Text.Blue className="nr_idents2">route</Text.Blue>("
        <Text.Yellow>settings</Text.Yellow>", "
        <Text.Yellow>./dashboard-settings.tsx</Text.Yellow>"), <br></br>
        <Text.Black className="nr_idents1"></Text.Black> ]),
        <p></p> ] <Text.Purple>satisfies</Text.Purple>{" "}
        <Text.Blue>RouteConfig</Text.Blue>;
      </div>
      <div>Note that index routes can't have children.</div>
      <h3>Route Prefixes</h3>
      <div>
        Using prefix, you can add a path prefix to a set of routes without
        needing to introduce a parent route file.
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <br></br>
        <Text.Purple className="nr_idents1">type</Text.Purple>{" "}
        <Text.Red>RouteConfig</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">route</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">index</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">layout</Text.Red>,<br></br>{" "}
        <Text.Red className="nr_idents1">prefix</Text.Red>,<br></br> {"}"}{" "}
        <Text.Purple>from</Text.Purple>
        <Text.Yellow> "@react-router/dev/routes"</Text.Yellow>;<br></br>
        <p></p> <Text.Purple>export default</Text.Purple> [ <br></br>{" "}
        <Text.Blue className="nr_idents1">layout</Text.Blue>
        ("<Text.Yellow>./marketing/layout.tsx</Text.Yellow>", [ <br></br>{" "}
        <Text.Blue className="nr_idents2">index</Text.Blue>("
        <Text.Yellow>./marketing/home.tsx</Text.Yellow>"), <br></br>
        <Text.Blue className="nr_idents2">route</Text.Blue>("
        <Text.Yellow>contact</Text.Yellow>", "
        <Text.Yellow>./marketing/contact.tsx</Text.Yellow>"), <br></br>
        <Text.Black className="nr_idents1"></Text.Black>]),<p></p>{" "}
        <Text.Purple className="nr_idents1">...</Text.Purple>{" "}
        <Text.Blue>prefix </Text.Blue>
        ("<Text.Yellow>projects</Text.Yellow>", [<br></br>
        <Text.Blue className="nr_idents2">index</Text.Blue>("
        <Text.Yellow>./projects/home.tsx</Text.Yellow>"), <br></br>
        <Text.Blue className="nr_idents2">layout</Text.Blue>
        ("<Text.Yellow>./projects/project-layout.tsx</Text.Yellow>", [ <br></br>
        <Text.Blue className="nr_idents3">route</Text.Blue>("
        <Text.Yellow>:pid</Text.Yellow>", "
        <Text.Yellow>./projects/project.tsx</Text.Yellow>"),<br></br>
        <Text.Blue className="nr_idents3">route</Text.Blue>("
        <Text.Yellow>:pid/edit</Text.Yellow>", "
        <Text.Yellow>./projects/edit-project.tsx</Text.Yellow>"),
        <br></br> <Text.Black className="nr_idents1"></Text.Black>]), <br></br>]{" "}
        <Text.Purple>satisfies</Text.Purple> <Text.Blue>RouteConfig</Text.Blue>;
      </div>
      <h3>Dynamic Segments</h3>
      <div>
        If a path segment starts with : then it becomes a "dynamic segment".
        When the route matches the URL, the dynamic segment will be parsed from
        the URL and provided as params to other router APIs.
      </div>
      <div className="examples">
        <Text.Blue>route</Text.Blue>("<Text.Yellow>teams/:teamId</Text.Yellow>",
        "<Text.Yellow>./team.tsx</Text.Yellow>"),
      </div>

      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <Text.Red>Route</Text.Red> {"}"}{" "}
        <Text.Purple>from</Text.Purple> "
        <Text.Yellow>./+types/team</Text.Yellow>";
        <p></p>
        <Text.Purple>export async</Text.Purple>{" "}
        <Text.Blue>function loader</Text.Blue>({"{"} <Text.Red>params</Text.Red>{" "}
        {"}"}: <Text.Blue>Route.LoaderArgs</Text.Blue>) {"{"} <br></br>
        <Text.Grey className="nr_idents1">
          // ^? {"{"} teamId: string {"}"}
        </Text.Grey>{" "}
        <br></br>
        {"}"}
        <p></p>
        <Text.Purple>export default</Text.Purple>{" "}
        <Text.Blue>function Component</Text.Blue>({"{"}
        <br></br>
        <Text.Red className="nr_idents1">params</Text.Red>,<br></br>
        {"}"}: <Text.Blue>Route.ComponentProps</Text.Blue>) {"{"} <br></br>
        <Text.Red className="nr_idents1">params.teamId</Text.Red>; <br></br>
        <Text.Grey className="nr_idents1">// ^ string</Text.Grey> <br></br>
        {"}"}
      </div>
      <div>You can have multiple dynamic segments in one route path:</div>
      <div className="examples">
        <Text.Blue>route</Text.Blue>("
        <Text.Yellow>c/:categoryId/p/:productId</Text.Yellow>", "
        <Text.Yellow>./product.tsx</Text.Yellow>"),
      </div>
      <h3>Optional Segments</h3>
      <div>
        You can make a route segment optional by adding a ? to the end of the
        segment.
      </div>
      <div className="examples">
        <Text.Blue>route</Text.Blue>("
        <Text.Yellow>:lang?/categories</Text.Yellow>", "
        <Text.Yellow>./categories.tsx</Text.Yellow>"),
      </div>

      <h2>Navigating</h2>
      <div>
        Users navigate your application with {"<Link>"}, {"<NavLink>"},{" "}
        {"<Form>"}, and useNavigate.
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <Text.Red>NavLink</Text.Red>{" "}
        {"}"} <Text.Purple>from</Text.Purple> "
        <Text.Yellow>react-router</Text.Yellow>";
        <p></p>
        <Text.Purple>export</Text.Purple>{" "}
        <Text.Blue>function MyAppNav</Text.Blue>()
        {"{"}
        <br></br>
        <Text.Purple className="nr_idents1">return</Text.Purple>( <br></br>
        <Text.Black className="nr_idents2"></Text.Black>
        {"<"}
        <Text.Red>nav</Text.Red>
        {">"} <br></br>
        <Text.Black className="nr_idents3"></Text.Black>
        {"<"}
        <Text.Blue>NavLink to</Text.Blue>="/"
        {">"}
        <br></br>
        <Text.Black className="nr_idents4">Home</Text.Black> <br></br>
        <Text.Black className="nr_idents3"></Text.Black>
        {"<"}
        <Text.Blue>/NavLink</Text.Blue>
        {">"}
        <br></br>
        <Text.Black className="nr_idents3"></Text.Black>
        {"<"}
        <Text.Blue>NavLink to</Text.Blue>="/trending"
        {">"}
        <br></br>
        <Text.Black className="nr_idents4"> Trending Concerts</Text.Black>{" "}
        <br></br>
        <Text.Black className="nr_idents3"></Text.Black>
        {"<"}
        <Text.Blue>/NavLink</Text.Blue>
        {">"}
        <br></br>
        <Text.Black className="nr_idents2"></Text.Black>
        {"</"}
        <Text.Red>nav</Text.Red>
        {">"} <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        );
        <br></br>
        {"}"}
      </div>
      <h3>useNavigate</h3>
      <div>
        This hook allows the programmer to navigate the user to a new page
        without the user interacting. Usage of this hook should be uncommon.
        It's recommended to use the other APIs in this guide when possible.{" "}
        <p></p>
        Reserve usage of useNavigate to situations where the user is not
        interacting but you need to navigate, for example:
        <p></p>
        <li>Logging them out after inactivity </li>
        <li>Timed UIs like quizzes, etc.</li>
      </div>
      <div className="examples">
        <Text.Purple>import</Text.Purple> {"{"} <Text.Red>useNavigate</Text.Red>{" "}
        {"}"} <Text.Purple>from</Text.Purple> "
        <Text.Yellow>react-router</Text.Yellow>";
        <p></p>
        <Text.Purple>export</Text.Purple>{" "}
        <Text.Blue>function useLogoutAfterInactivity</Text.Blue>()
        {"{"}
        <br></br>
        <Text.Blue className="nr_idents1">let </Text.Blue>
        <Text.Black></Text.Black>
        <Text.Red>navigate</Text.Red> = <Text.Blue>useNavigate</Text.Blue>();{" "}
        <p></p>
        <Text.Black className="nr_idents1"></Text.Black>
        <Text.Blue>useFakeInactivityHook</Text.Blue>(() ={"> {"}
        <br></br>
        <Text.Blue className="nr_idents2">navigate</Text.Blue>("
        <Text.Yellow>/logout</Text.Yellow>"); <br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        {"});"}
        <br></br>
        {"}"}
      </div>
    </>
  );
};

export default NewReactRouter;
