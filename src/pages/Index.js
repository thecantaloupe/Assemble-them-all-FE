import { useState } from "react"; 
import { Link } from "react-router-dom";

const Index = (props) => {
  const [newForm, setNewForm] = useState({
    title: "",
    url: "",
  });

// handleChange function
const handleChange = (event) => {
  setNewForm({...newForm, [event.target.name]: event.target.value});
}
//handle submit function for form
const handleSubmit = (event) => {
  event.preventDefault();
  props.createBookmark(newForm)
  setNewForm({
    title: "",
    url: "",
  });

};

//loaded function
const loaded = () => {
  return props.bookmark.map((bookmarked) => (
    <div key={bookmarked._id} className="bookmarked">
      <Link to={`/bookmark/${bookmarked._id}`}><h1>{bookmarked.title}</h1></Link>
      <h3>{bookmarked.url}</h3>
    </div>
  ));
};

const loading = () => {
  return <h1>Loading...</h1>
};
return (
  <section>
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    value={newForm.title}
    name="title"
    placeholder="title"
    onChange={handleChange}
    />
    <input
    type="text"
    value={newForm.url}
    name="url"
    placeholder="url"
    onChange={handleChange}
    />
  <input type="submit" value="Add new bookmark" />
    </form>
    {props.bookmark ? loaded() : loading()}
  </section>
)


};

export default Index;