import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Auth from "./Auth/Auth";
import Battle from "../pages/Battle";
import { useState } from "react";

const Main = (props) => {
  const assembles = useSelector((state) => state.assembles);
  const [main, changeMain] = useState("base-main");
  const [randomCard, changeRandomCard] = useState("");


  return (
    <main className={main}>
      <Switch>
        <Route exact path="/">
          <Index 
          functions={[main, changeMain]}
          />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route
          path="/assemble/:id"
          render={(rp) => <Show {...rp} assemble={assembles} functions={[main, changeMain]} rando={[randomCard, changeRandomCard]}/>}
        />
        <Route 
          path="/battle/:id"
          onClick={() => changeMain("base-battle")}
          render={(rp) => <Battle {...rp} assemble={assembles} functions={[main, changeMain]} rando={[randomCard, changeRandomCard]}/>} 
        />
      </Switch>
    </main>
  );
};

export default Main;
