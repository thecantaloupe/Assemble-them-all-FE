import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { createAssem, getAssem, updateAssem } from "../../actions/assemble";
import { useHistory } from "react-router";

const Form = ({ assembled, id }) => {
  const [newForm, setNewForm] = useState(
    assembled ? assembled : { title: "", url: "https://" }
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
      dispatch(updateAssem(id, newForm));
      // need better way hmmmm
      // updateStorage('localstore', [{title:newForm.title},{title:newForm.title}])
      // so much better
      dispatch(getAssem())
      history.push("/");
    }
    dispatch(createAssem(newForm));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={newForm.title} name="title" handleChange={handleChange} />
      <Input value={newForm.url} name="url" handleChange={handleChange} />
      <input
        type="submit"
        value={id ? "Update the player card" : "Add new assemble"}
      />
    </form>
  );
};

export default Form;
