import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Auth from "./Auth/Auth";


const Main = (props) => {
  const assembles = useSelector((state) => state.assembles);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route 
          path="/assemble/:id" 
          render={(rp) => 
            <Show
              {...rp} 
              assemble={assembles}
              />} />
      </Switch>
    </main>
  );
};

export default Main;