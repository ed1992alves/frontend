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
import Context from "./context";
import UnitTest from "./unitTest";
import Selectors from "./selectors";
import DomObject from "./dom";
import Inputs from "./inputs";
import Typescript from "./typescript";
import Sass from "./sass";
import Prototype from "./prototype";
import Natives from "./natives";
import ReactRouter from "./reactRouter";

const classOrder = [
  {
    path: "/html",
    title: "HTML Semantic and SEO",
    component: HTML,
    status: true
  },
  { path: "/css", title: "CSS basics", component: css, status: true },
  {
    path: "/selectors",
    title: "Selectors And Specificity",
    component: Selectors,
    status: true
  },
  {
    path: "/dom",
    title: "Document Object Model (DOM)",
    component: DomObject,
    status: true
  },
  {
    path: "/inputs",
    title: "HTML Forms",
    component: Inputs,
    status: false
  },
  {
    path: "/animations",
    title: "Animations",
    component: Animations,
    status: false
  },
  {
    path: "/sass",
    title: "Css Preprocessors: Sass",
    component: Sass,
    status: false
  },
  {
    path: "/types",
    title: "Javascript Types",
    component: Types,
    status: true
  },
  {
    path: "/operators",
    title: "Javascript Operators",
    component: Operators,
    status: true
  },
  {
    path: "/typescript",
    title: "Typescript",
    component: Typescript,
    status: false
  },
  {
    path: "/scopes",
    title: "Scope & Closures",
    component: Scope,
    status: false
  },
  { path: "/this", title: "Binding (This)", component: This, status: false },
  {
    path: "/prototype",
    title: "Prototype",
    component: Prototype,
    status: false
  },
  {
    path: "/natives",
    title: "Built-in / Natives Objects",
    component: Natives,
    status: false
  },
  { path: "/fetch", title: "Fetch API", component: FetchApi, status: false },
  { path: "/react", title: "React", component: ReactClass, status: false },
  {
    path: "/hooks",
    title: "React Hooks",
    component: ReactHooks,
    status: false
  },
  {
    path: "/reactRouter",
    title: "React Router",
    component: ReactRouter,
    status: false
  },
  { path: "/context", title: "Context API", component: Context, status: false },
  { path: "/redux", title: "Redux", component: Redux, status: false },
  {
    path: "/testing",
    title: "Unit Testing",
    component: UnitTest,
    status: false
  }
];

// classes em falta:  event loop, adicionar useMemo e useCallback

export default classOrder;

Array.prototype.sum = () => {
  let total;
  this.forEach(element => (total = total + element));
  return total;
};
