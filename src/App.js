import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import "./styles/main.less";
import classOrder from "./classes/classOrder";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainPage = () => (
  <>
    <div className="pageHeader">
      <h1> All Classes </h1>
    </div>
    {classOrder.map(lesson =>
      lesson.status ? (
        <>
          <Link to={lesson.path}>{lesson.title}</Link>
          <p></p>
        </>
      ) : null
    )}
  </>
);

const App = () => {
  useEffect(() => {
    window.scrollTo(window.scrollX, 0);
    window.addEventListener("hashchange", e => {
      window.scrollTo(window.scrollX, window.scrollY - 120);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        {classOrder.map((lesson, key) =>
          lesson.status ? (
            <Route key={key} exact path={lesson.path}>
              <lesson.component nr={key} />
            </Route>
          ) : null
        )}
      </Switch>
    </Router>
  );
};
export default hot(module)(App);
