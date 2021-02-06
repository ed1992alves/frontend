import React from "react";
import { hot } from "react-hot-loader";
import "./styles/main.less";
import BoxModel from "./classes/boxModel";
import Animations from "./classes/animations";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainPage = () => (
  <>
    <div class="pageHeader">
      <h2> All Classes </h2>
    </div>
    <Link to="/css">CSS</Link>
    <p></p>
    <Link to="/animations">Animations</Link>
  </>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/css">
          <BoxModel nr={0} />
        </Route>
        <Route exact path="/animations">
          <Animations nr={1} />
        </Route>
      </Switch>
    </Router>
  );
};
export default hot(module)(App);
