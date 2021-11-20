import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteBook } from "../actions/bookmark";
import Form from "../components/Form/Form";
function Show(props) {
  const dispatch = useDispatch()
  const history = useHistory();
  const [bookmark, setBookmark] = useState(JSON.parse(localStorage.getItem('localstore')));
  const user = JSON.parse(localStorage.getItem("profile"));

  //grab id from params
  const id = props.match.params.id;
  //save bookmark standalone variable
  //find the bookmark to show
  const bookmarked = bookmark instanceof Array ? bookmark.find((singleBookmark) => {
    return singleBookmark._id === id;
  }): null
  useEffect(() => {
    setBookmark(JSON.parse(localStorage.getItem('localstore')))
  },[]);
  
  return (

    <div className="bookmarked">
      {/* anyone can delete anon, only creator can delete their own */}
      {(user?.result?.googleId === bookmarked.creator || user?.result?._id === bookmarked?.creator)&&(
        <button onClick={() => dispatch(deleteBook(bookmarked._id),history.push("/"))} id="delete">DELETE</button>
      )}
      <Form bookmarked={bookmarked} id={id} />
    </div>
  );
}

export default Show;
