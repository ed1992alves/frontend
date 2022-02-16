import React, { useState } from "react";
import "../styles/this.less";
import * as Text from "../Utils/Text";

const Setup = () => {
  return (
    <>
      <div>Lets install some basic packages</div>
      <ul>
        <li>
          <b>react</b> : the main react library
        </li>
        <li>
          <b>react-dom</b> : package that allows us to use react in the browser
        </li>
        <li>
          <b>webpack</b> : the JavaScript bundler we’ll be exploring more below
        </li>
        <li>
          <b>webpack-client</b> tool that allows us to run webpack commands from
          the command line.
        </li>
      </ul>
      <div class="info">
        npm i react react-dom <p></p>
        npm i -D webpack webpack-cli
      </div>
      <div>
        Notice that webpack and webpack-cli are installed as dev-dependencies
        since we only need them during development. The only runtime packages in
        this entire tutorial will be react, and react-dom.
      </div>
      <h2>Setup the Project Structure</h2>
      <div>
        At this point, you should already have package.json and
        package-lock.json files in your root directly. Now create a few empty
        files, which we’ll be populating later, and setup your project so that
        it mimics the directory structure shown below:
      </div>
      <div className="info">
        └───src <br></br>│ └───App.js <br></br>│ └───index.js <br></br>|
        └───index.html <br></br>| └───index.css<br></br> └───package-lock.json
        <br></br> └───package.json <br></br>
        └───webpack.config.json
      </div>
      <h2>Webpack Terminologies</h2>
      <div>
        webpack is a JavaScript code bundler that traverses the dependency graph
        of your project (chain of imports you use in your JS files), and creates
        a static JavaScript file(s) that is ready to be attached to your HTML.{" "}
      </div>
      <ul>
        <li>
          <b>Entry</b> — This is the top of the dependency tree (conventionally
          src/index.js) where webpack starts with the bundling process.
        </li>
        <li>
          <b>Output</b> — The output file(s). AKA the bundle.
        </li>
        <li>
          <b>Loaders</b> — webpack, by default, only works with JavaScript
          files, but we obviously want to be able to import other file
          types(CSS, JSX, etc.). This is where loaders come into play. They are
          packages (not included with Webpack itself) that help us import
          non-JavaScript files directly into our JavaScript.{" "}
        </li>
        <li>
          <b>Plugins</b> — Plugins are also other third party packages that can
          be used with webpack to extend it’s functionality. There are a lot of
          plugins out there, but here, we’ll only be dealing with the
          html-webpack-plugin.
        </li>
      </ul>
      <h2>Create a minimal App</h2>
      <div className="info">
        <b>index.html</b> <p></p>
        <Text.Green>{"<html>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents1">{"<head>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents2">{"<title>"}</Text.Green>React with
        Webpack<Text.Green>{"</title>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents1">{"</head>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents1">{"<body>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents2">{"<div "}</Text.Green>
        id=<Text.Orange>"app"</Text.Orange>
        <Text.Green className="nr_idents1">{"></div>"}</Text.Green> <br></br>
        <Text.Green className="nr_idents1">{"</body>"}</Text.Green>
        <br></br>
        <Text.Green>{"</html>"}</Text.Green>
        <br></br>
      </div>
      <div className="info">
        <b>index.js</b> <p></p>
        <Text.Red>import</Text.Red> <Text.Orange>React</Text.Orange>{" "}
        <Text.Red>from</Text.Red> "react"; <br></br>
        <Text.Red>import</Text.Red> <Text.Orange>ReactDOM</Text.Orange>{" "}
        <Text.Red>from</Text.Red> "react-dom"; <br></br>
        <Text.Red>import</Text.Red> <Text.Orange>App</Text.Orange>{" "}
        <Text.Red>from</Text.Red> "./App"; <p></p>
        <Text.Orange>ReactDOM</Text.Orange>.render(
        <Text.Green>{"<App />"}</Text.Green>, document.getElementById(
        <Text.Orange>"app"</Text.Orange>));
      </div>

      <div className="info">
        <b>App.js</b> <p></p>
        <Text.Red>import</Text.Red> <Text.Orange>React</Text.Orange> <p></p>
        <Text.Red>export default function </Text.Red> App() {"{"} <br></br>
        <Text.Red className="nr_idents1">return</Text.Red>{" "}
        <Text.Green>{"<h1>"}</Text.Green>Hello World
        <Text.Green>{"</h1>"}</Text.Green>; <br></br>
        {"}"}
      </div>

      <div>
        All this application is supposed to do is to render a heading tag, which
        spits out ‘Hello World’ to the page. However, if you try and attach
        index.js directly to your HTML with
      </div>

      <div className="info">{'<script src="index.js" />'}</div>
      <div>
        it doesn’t work. If you open it up in the browser, all you’re going to
        see is a blank page. <p></p>
        This is because the browser does not know how to import App from
        “./App”. Only static JS files can be loaded by the browser, so lets
        finally configure webpack to convert our application into something that
        the browser can understand.
      </div>
      <h2>Install Loaders</h2>
      <div>
        Let’s first install babel-loader that allows us to compile JSX into
        browser compatible JavaScript. To do so, run the following:
      </div>
      <div className="info">
        npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
      </div>
      <div>
        What we did was install babel, two presets, and then finally the loader
        required to load our JSX files.
      </div>
      <h2>Configure Webpack</h2>
      <div className="info">
        <Text.Red>const</Text.Red> path = <Text.Purple>require</Text.Purple>({" "}
        <Text.Green>"path"</Text.Green>); <p></p>
        <Text.Black></Text.Black>module.
        <Text.Blue>exports</Text.Blue> = {"{"} <br></br>
        <Text.Blue className="nr_idents1">entry</Text.Blue>:{" "}
        <Text.Green>"/src/index.js"</Text.Green>, <br></br>
        <Text.Blue className="nr_idents1">output</Text.Blue>: {"{"} path: path.
        <Text.Purple>resolve</Text.Purple>(__dirname,{" "}
        <Text.Green>"dist"</Text.Green>) }, <br></br>
        <Text.Blue className="nr_idents1">module</Text.Blue>: {"{"}
        <br></br>
        <Text.Blue className="nr_idents2">rules</Text.Blue>: [<br></br>
        <Text.Black className="nr_idents3"></Text.Black>
        {"{"}
        <br></br>
        <Text.Blue className="nr_idents4">test</Text.Blue>: /\.(js|jsx)$/,
        <br></br>
        <Text.Blue className="nr_idents4">exclude</Text.Blue>: /node_modules/,
        <br></br>
        <Text.Blue className="nr_idents4">use</Text.Blue>: {"{"}
        <br></br>
        <Text.Blue className="nr_idents5">loader</Text.Blue>:{" "}
        <Text.Green>"babel-loader"</Text.Green>,<br></br>
        <Text.Blue className="nr_idents5">options</Text.Blue>:{"{"}
        <br></br>
        <Text.Blue className="nr_idents6">presets</Text.Blue>: [
        <Text.Green>"@babel/preset-env"</Text.Green>,{" "}
        <Text.Green>"@babel/preset-react"</Text.Green>],<br></br>
        <Text.Black className="nr_idents5"></Text.Black>
        {"}"},<br></br>
        <Text.Black className="nr_idents4"></Text.Black> {"}"},<br></br>
        <Text.Black className="nr_idents3"></Text.Black>
        {"}"},<br></br>
        <Text.Black className="nr_idents2"></Text.Black>],<br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        {"}"},<br></br>
        {"}"};<br></br>
      </div>
      <div>
        Rules is an array used to mached requests when modules are created.
        These rules can modify how the module is created. They can apply loaders
        to the module, or modify the parser. <p></p>>In our config file, we
        asked webpack to use babel-loader, whenever it sees any file ending in
        either js or jsx.
      </div>
      <h2>Bundle the Application</h2>
      <div>
        Now let’s add a script to our package.json so we can easily build our
        application whenever we want to.
      </div>
      <div className="info">
        <Text.Green>"scripts"</Text.Green>: {"{"} <br></br>
        <Text.Green className="nr_idents1">"build"</Text.Green>:{" "}
        <Text.Blue>"webpack"</Text.Blue> <br></br>
        {"}"},
      </div>
      <div>Finally we’re ready to run</div>
      <div className="info">npm run build</div>
      <div>
        This should create a main.js file inside the dist folder in your project
        root. We can now go ahead and attach this bundled JavaScript into our
        html
      </div>
      <h2>Run the Bundled Application</h2>
      <div className="info">
        <b>index.html</b> <p></p>
        <Text.Green>{"<html>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents1">{"<head>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents2">{"<title>"}</Text.Green>React with
        Webpack<Text.Green>{"</title>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents1">{"</head>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents1">{"<body>"}</Text.Green>
        <br></br>
        <Text.Green className="nr_idents2">{"<div "}</Text.Green>
        id=<Text.Orange>"app"</Text.Orange>
        <Text.Green className="nr_idents1">{"></div>"}</Text.Green> <br></br>
        <Text.Green className="nr_idents2">{"<script"}</Text.Green> src=
        <Text.Orange>"../dist/main.js"</Text.Orange>>{" "}
        <Text.Green>{"</script>"}</Text.Green> <br></br>
        <Text.Green className="nr_idents1">{"</body>"}</Text.Green>
        <br></br>
        <Text.Green>{"</html>"}</Text.Green>
        <br></br>
      </div>
      <div>
        After adding the script tags as suggested above, open up your index.html
        in the browser, and voila, you’ll see “Hello World”! That’s it.{" "}
      </div>
      <h2>Setup HtmlWebpackPlugin</h2>
      <div>
        Attaching the bundled JS manually, like we did above, is all good and
        fine, and if all we would ever have is one JavaScript file in our
        bundle, we’re good to stop here. But in a real application, you’ll be
        using various webpack plugins to chunk your JavaScript files, and maybe
        even hash them for caching purposes. All this means, is that we don’t
        want to manually import our bundle scripts into our HTML. <p></p>To
        automate that process, let’s install html-webpack-plugin using the
        following command:
      </div>
      <div className="info">npm i -D html-webpack-plugin</div>
      <div>
        Now we modify our configuration file to include this plugin as such:
      </div>
      <div className="info">
        <Text.Red>const</Text.Red> path = <Text.Purple>require</Text.Purple>(
        <Text.Green>"path"</Text.Green>); <br></br>
        <Text.Red>const</Text.Red> HtmlWebPackPlugin ={" "}
        <Text.Purple>require</Text.Purple>(
        <Text.Green>"html-webpack-plugin"</Text.Green>); <p></p>
        <Text.Black></Text.Black>module.
        <Text.Blue>exports</Text.Blue> = {"{"} <br></br>
        <Text.Blue className="nr_idents1">entry</Text.Blue>:{" "}
        <Text.Green>"/src/index.js"</Text.Green>, <br></br>
        <Text.Blue className="nr_idents1">output</Text.Blue>: {"{"} path: path.
        <Text.Purple>resolve</Text.Purple>(__dirname,{" "}
        <Text.Green>"dist"</Text.Green>) }, <br></br>
        <Text.Blue className="nr_idents1">module</Text.Blue>: {"{"}
        <br></br>
        <Text.Blue className="nr_idents2">rules</Text.Blue>: [<br></br>
        <Text.Black className="nr_idents3"></Text.Black>
        {"{"}
        <br></br>
        <Text.Blue className="nr_idents4">test</Text.Blue>: /\.(js|jsx)$/,
        <br></br>
        <Text.Blue className="nr_idents4">exclude</Text.Blue>: /node_modules/,
        <br></br>
        <Text.Blue className="nr_idents4">use</Text.Blue>: {"{"}
        <br></br>
        <Text.Blue className="nr_idents5">loader</Text.Blue>:{" "}
        <Text.Green>"babel-loader"</Text.Green>,<br></br>
        <Text.Blue className="nr_idents5">options</Text.Blue>:{"{"}
        <br></br>
        <Text.Blue className="nr_idents6">presets</Text.Blue>: [
        <Text.Green>"@babel/preset-env"</Text.Green>,{" "}
        <Text.Green>"@babel/preset-react"</Text.Green>],<br></br>
        <Text.Black className="nr_idents5"></Text.Black>
        {"}"},<br></br>
        <Text.Black className="nr_idents4"></Text.Black> {"}"},<br></br>
        <Text.Black className="nr_idents3"></Text.Black>
        {"}"},<br></br>
        <Text.Black className="nr_idents2"></Text.Black>],<br></br>
        <Text.Black className="nr_idents1"></Text.Black>
        {"}"},<br></br>
        <Text.Blue className="nr_idents1">plugins</Text.Blue>: [ <br></br>
        <Text.Yellow className="nr_idents2">new HtmlWebPackPlugin</Text.Yellow>(
        {"{"} <br></br>
        <Text.Blue className="nr_idents3">templates</Text.Blue>:{" "}
        <Text.Green>"./src/index.html"</Text.Green>, <br></br>
        <Text.Black className="nr_idents2"></Text.Black>
        {"}"}), <br></br>
        <Text.Black className="nr_idents1"></Text.Black> ], <br></br>
        {"}"};<br></br>
      </div>
      <div>
        What we did was include the plugin and provided it with a template html
        to which webpack is to attach the bundled JavaScript after the build.
        <p></p>You can go ahead and remove the {"<script>"} tag from your
        src/index.html.
      </div>
      <h2> webpack-dev-server</h2>
    </>
  );
};

export default Setup;
