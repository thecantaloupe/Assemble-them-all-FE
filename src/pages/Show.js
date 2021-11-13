import {useState} from "react";

function Show(props) {
  //grab id from params
  const id = props.match.params.id;
  //save bookmark standalone variable
  const people = props.bookmark
  //find the bookmark to show
  const bookmarked = bookmark.find((singleBookmark) => {
    return singleBookmark._id === id;
  });

// state for our form
const [editForm, setEditForm] = useState(bookmarked);

 // handleChange function for form
 const handleChange = (event) => {
  setEditForm({ ...editForm, [event.target.name]: event.target.value });
};

 // handleSubmit function for form submission
 const handleSubmit = (event) => {
  event.preventDefault()
  props.updateBookmark(editForm, bookmarked._id)
  // redirect people back to index
  props.history.push("/")
};
 //remove function
 const removeBookmark = () => {
  props.deleteBookmark(bookmarked._id)
  props.history.push("/")

};

return (
  <div className="bookmarked">
    <h1>{bookmark.title}</h1>
    <h2>{bookmark.url}</h2>
    <button onLCick={removeBookmark} id="delete">
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

};

export default Show;