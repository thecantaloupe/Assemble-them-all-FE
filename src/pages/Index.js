import { useState } from "react"; 
import { Link } from "react-router-dom";
import Input from "./Input"

const Index = (props) => {
  const [newForm, setNewForm] = useState({
    title: "",
    url: "https://",
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
    title: "https://",
    url: "",
  });

};

//loaded function
const loaded = () => {
  return props.bookmark.map((bookmarked) => (
    <div key={bookmarked._id} className="bookmarked">
      <Link to={`/bookmark/${bookmarked._id}`}><h1>{bookmarked.title}</h1></Link>
      <h3>{bookmarked.url}</h3>
      <a href={bookmarked.url} >go to page</a>
    </div>
  ));
};

const loading = () => {
  return <h1>Loading...</h1>
};
return (
  <section>
    <form onSubmit={handleSubmit}>
    <Input
    value={newForm.title}
    name="title"
    handleChange={handleChange}
    />
    <Input
    value={newForm.url}
    name="url"
    handleChange={handleChange}
    />
  <input type="submit" value="Add new bookmark" />
    </form>
    {props.bookmark ? loaded() : loading()}
  </section>
)


};

export default Index;