import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Main";
import About from "./Index";

const Main = (props) => {
    return(
  <main>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </main>
    );
};

export default Main;