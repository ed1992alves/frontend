import BoxModel from "./boxModel";
import Animations from "./animations";
import Operators from "./operators";
import Types from "./types";
import Scope from "./scope";

const classOrder = [
  { path: "/css", title: "CSS basics", component: BoxModel },
  { path: "/animations", title: "Animations", component: Animations },
  {
    path: "/types",
    title: "Javascript Types",
    component: Types
  },
  { path: "/operators", title: "Javascript Operators", component: Operators },
  { path: "/scopes", title: "Scope & Closures", component: Scope }
];

export default classOrder;
