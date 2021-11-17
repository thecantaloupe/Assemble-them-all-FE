import { useState } from "react"; 
import { Link } from "react-router-dom";
import Input from "./Input"

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

// add a div container then make the background 
return (
  <div className ="container2">
  <section>
  <div className="card2">
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
    </div>
    <div className= "card3">
    {props.bookmark ? loaded() : loading()}
    </div>
  </section>
  </div>
)

};

export default Index;