import Header from "./components/Nav/Header";
import Main from "./components/Main";
import {getAssem} from './actions/assemble'
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()
  //can make hooks here, pass down and if they change throw in array to redo get
  useEffect(() => { dispatch(getAssem())}, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;