import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteAssem } from "../actions/assemble";
import Form from "../components/Form/Form";

function Show(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [assemble, setAssemble] = useState(
    JSON.parse(localStorage.getItem("localstore"))
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  // hook for main class
  const [main, changeMain] = props.functions;
  // hook for random card
  const [randomCard, changeRandomCard] = props.rando;

  changeMain("showpage");
  //grab id from params
  const id = props.match.params.id;
  //save player card standalone variable
  //find the player card to show
  const assembled =
    assemble instanceof Array
      ? assemble.find((singleAssemble) => {
          return singleAssemble._id === id;
        })
      : null;

  const assembled2 = assemble instanceof Array ? assemble.filter((ass) => ass._id !== id) : null;
  changeRandomCard(assembled2[Math.floor(Math.random() * assembled2.length)]);


  useEffect(() => {
    setAssemble(JSON.parse(localStorage.getItem("localstore")));
  }, []);

  return (
    <div className="assembled">
      <img src={assembled?.fileData} className="sprite" />
      {/* anyone can delete anon, only creator can delete their own */}
      {(user?.result?.googleId === assembled?.creator ||
        user?.result?._id === assembled?.creator) && (
        <>
          <button
            onClick={() =>
              dispatch(deleteAssem(assembled._id), history.push("/"))
            }
            id="delete"
          >
            DELETE
          </button>
          <Link to={`/battle/${assembled._id}`}>
            <button id="delete">Battle!</button>
          </Link>
        </>
      )}
      <Form assembled={assembled} id={id} />
    </div>
  );
}

export default Show;
