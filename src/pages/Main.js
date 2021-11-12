import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import About from "./About";

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