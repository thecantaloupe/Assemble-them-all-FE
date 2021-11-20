import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { createBook, getBooks, updateBook } from "../../actions/bookmark";
import { useHistory } from "react-router";
import FileBase from "react-file-base64";

const Form = ({ bookmarked, id }) => {
  const [newForm, setNewForm] = useState(
    bookmarked ? bookmarked : { title: "", url: "https://" }
  );
  bookmarked = newForm
  const history = useHistory();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  // handleChange function
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      dispatch(updateBook(id, { ...newForm, name: user?.result?.name }));
      // need better way hmmmm
      // updateStorage('localstore', [{title:newForm.title},{title:newForm.title}])
      // so much better
      dispatch(getBooks());
      history.push("/");
    }
    dispatch(createBook({ ...newForm, name: user?.result?.name }));
  };

  if (!user?.result?.name) {
    return <h6>Please Sign in to create a card!!!</h6>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={newForm.title} name="title" handleChange={handleChange} />
      <Input value={newForm.url} name="url" handleChange={handleChange} />
      <FileBase type="file" multiple={false} onDone={({ base64 }) => setNewForm({ ...newForm, fileData: base64 })} />
      {/* hide update if not the user who made it */}
      {(user?.result?.googleId === bookmarked.creator || user?.result?._id === bookmarked?.creator)&&(
      <input
        type="submit"
        value={id ? "Update the bookmark" : "Add new bookmark"}
      />)}
    </form>
  );
};

export default Form;
