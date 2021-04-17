import BoxModel from "./boxModel";
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

const classOrder = [
  { path: "/html", title: "HTML Semantic and SEO", component: HTML },
  { path: "/css", title: "CSS basics", component: BoxModel },
  { path: "/animations", title: "Animations", component: Animations },
  {
    path: "/types",
    title: "Javascript Types",
    component: Types
  },
  { path: "/operators", title: "Javascript Operators", component: Operators },
  { path: "/scopes", title: "Scope & Closures", component: Scope },
  { path: "/this", title: "Binding (This)", component: This },
  { path: "/fetch", title: "Fetch API", component: FetchApi },
  { path: "/react", title: "React", component: ReactClass },
  { path: "/hooks", title: "React Hooks", component: ReactHooks },
  { path: "/redux", title: "Redux", component: Redux }
];

export default classOrder;
