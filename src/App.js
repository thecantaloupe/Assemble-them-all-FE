import Header from "./components/Nav/Header";
import Main from "./components/Main";
import {getBooks} from './actions/bookmark'
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()
  //can make hooks here, pass down and if they change throw in array to redo get
  useEffect(() => { dispatch(getBooks())}, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;