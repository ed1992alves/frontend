import BoxModel from "./boxModel";
import Animations from "./animations";
import Operators from "./operators";
import Types from "./types";

const classOrder = [
  { path: "/css", title: "CSS basics", component: BoxModel },
  { path: "/animations", title: "Animations", component: Animations },
  {
    path: "/types",
    title: "Javascript Types",
    component: Types
  },
  { path: "/operators", title: "Javascript Operators", component: Operators }
];

export default classOrder;
