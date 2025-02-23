import css from "./css";
import Animations from "./animations";
import Operators from "./operators";
import Types from "./types";
import Scope from "./scope";
import This from "./this";
import HTML from "./html";
import FetchApi from "./fetch";
import ReactClass from "./react";
import ReactHooks from "./hooks";
import Redux from "./redux";
import Context from "./Context";
import UnitTest from "./unitTest";
import Selectors from "./selectors";
import DomObject from "./dom";
import Inputs from "./inputs";
import Typescript from "./typescript";
import Sass from "./sass";
import Prototype from "./prototype";
import Natives from "./natives";
import ReactRouter from "./reactRouter";
import Setup from "./Setup";
import Storage from "./storage";
import EventLoop from "./eventLoop";
import Grid from "./grid";

const classOrder = [
  {
    path: "/html",
    title: "HTML Semantic and SEO",
    component: HTML,
    status: true,
  },
  { path: "/css", title: "CSS basics", component: css, status: true },
  {
    path: "/grid",
    title: "CSS Grid",
    component: Grid,
    status: true,
  },
  {
    path: "/selectors",
    title: "Selectors And Specificity",
    component: Selectors,
    status: true,
  },
  {
    path: "/dom",
    title: "Document Object Model (DOM)",
    component: DomObject,
    status: true,
  },
  {
    path: "/inputs",
    title: "HTML Forms",
    component: Inputs,
    status: true,
  },
  {
    path: "/animations",
    title: "Animations",
    component: Animations,
    status: true,
  },
  {
    path: "/sass",
    title: "Css Preprocessors: Sass",
    component: Sass,
    status: true,
  },
  {
    path: "/types",
    title: "Javascript Types",
    component: Types,
    status: true,
  },
  {
    path: "/operators",
    title: "Javascript Operators",
    component: Operators,
    status: true,
  },

  {
    path: "/scopes",
    title: "Scope & Closures",
    component: Scope,
    status: true,
  },
  {
    path: "/storage",
    title: "Web Storage and Cookies",
    component: Storage,
    status: true,
  },
  { path: "/this", title: "Binding (This)", component: This, status: true },
  {
    path: "/prototype",
    title: "Prototype",
    component: Prototype,
    status: true,
  },
  {
    path: "/natives",
    title: "Built-in / Natives Objects",
    component: Natives,
    status: false,
  },
  { path: "/fetch", title: "Fetch API", component: FetchApi, status: false },
  {
    path: "/eventloop",
    title: "Event Loop",
    component: EventLoop,
    status: false,
  },
  {
    path: "/setup",
    title: "Setup React with Webpack",
    component: Setup,
    status: false,
  },
  { path: "/react", title: "React", component: ReactClass, status: false },
  {
    path: "/hooks",
    title: "React Hooks",
    component: ReactHooks,
    status: false,
  },
  {
    path: "/typescript",
    title: "Typescript",
    component: Typescript,
    status: false,
  },
  {
    path: "/reactRouter",
    title: "React Router",
    component: ReactRouter,
    status: false,
  },
  { path: "/context", title: "Context API", component: Context, status: false },
  { path: "/redux", title: "Redux", component: Redux, status: false },
  {
    path: "/testing",
    title: "Unit Testing",
    component: UnitTest,
    status: false,
  },
];

export default classOrder;

Array.prototype.sum = () => {
  let total;
  this.forEach((element) => (total = total + element));
  return total;
};
