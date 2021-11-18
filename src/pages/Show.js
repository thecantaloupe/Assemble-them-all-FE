<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> 23e5a218bb694e0f354494d5b808ded90a256e6e
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function Show(props) {
  const [bookmark, setBookmark] = useState(JSON.parse(localStorage.getItem('bookmark')).data);
  const dispatch = useDispatch()
  console.log(bookmark)
<<<<<<< HEAD
  //grab id from params
  const id = props.match.params.id;
  //save bookmark standalone variable

=======
  
  //grab id from params
  const id = props.match.params.id;
  //save bookmark standalone variable
>>>>>>> 23e5a218bb694e0f354494d5b808ded90a256e6e
  //find the bookmark to show
  const bookmarked = bookmark instanceof Array ? bookmark.find((singleBookmark) => {
    return singleBookmark._id === id;
  }): null

  // state for our form
  const [editForm, setEditForm] = useState(bookmarked);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // handleSubmit function for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateBookmark(editForm, bookmarked._id);
    // redirect bookmark back to index
    props.history.push("/");
  };
  //remove function
  const removeBookmark = () => {
    props.deleteBookmark(bookmarked._id);
    props.history.push("/");
  };
<<<<<<< HEAD
  //useEffect
=======
>>>>>>> 23e5a218bb694e0f354494d5b808ded90a256e6e
  useEffect(() => {
    setBookmark(JSON.parse(localStorage.getItem('bookmark')).data)
  },[]);

  return (
    <div className="bookmarked">
      <h1>{bookmark.title}</h1>
      <h2>{bookmark.url}</h2>
      <button onClick={removeBookmark} id="delete">
        DELETE
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.url}
          name="url"
          placeholder="url"
          onChange={handleChange}
        />
        <input type="submit" value="update the bookmark" />
      </form>
    </div>
  );
}

export default Show;
