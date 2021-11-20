import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { createBook, getBooks, updateBook } from "../../actions/bookmark";
import { useHistory } from "react-router";

const Form = ({ bookmarked, id }) => {
  const [newForm, setNewForm] = useState(
    bookmarked ? bookmarked : { title: "", url: "https://" }
  );
  const history = useHistory();
  const dispatch = useDispatch();
 
  // handleChange function
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      dispatch(updateBook(id, newForm));
      // need better way hmmmm
      // updateStorage('localstore', [{title:newForm.title},{title:newForm.title}])
      // so much better
      dispatch(getBooks())
      history.push("/");
    }
    dispatch(createBook(newForm));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={newForm.title} name="title" handleChange={handleChange} />
      <Input value={newForm.url} name="url" handleChange={handleChange} />
      <input
        type="submit"
        value={id ? "Update the bookmark" : "Add new bookmark"}
      />
    </form>
  );
};

export default Form;
