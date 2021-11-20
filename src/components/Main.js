import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Auth from "./Auth/Auth";


const Main = (props) => {
  const bookmarks = useSelector((state) => state.bookmarks);

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
          path="/bookmark/:id" 
          render={(rp) => 
            <Show
              {...rp} 
              bookmark={bookmarks}
              />} />
      </Switch>
    </main>
  );
};

export default Main;
