import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { createAssem, getAssem, updateAssem } from "../../actions/assemble";
import { useHistory } from "react-router";
import FileBase from "react-file-base64";
import "./styles.css";

const Form = ({ assembled, id }) => {
  const [newForm, setNewForm] = useState(
    assembled ? assembled : { title: "" }
  );
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
      dispatch(updateAssem(id, { ...newForm, name: user?.result?.name }));
      // need better way hmmmm
      // updateStorage('localstore', [{title:newForm.title},{title:newForm.title}])
      // so much better
      dispatch(getAssem())
      history.push("/");
    }
    dispatch(createAssem({ ...newForm, name: user?.result?.name }));
  };

  if (!user?.result?.name) {
    return <h6>Please Sign in</h6>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={newForm.title} name="title" handleChange={handleChange} />
      <FileBase type="file" multiple={false} onDone={({ base64 }) => setNewForm({ ...newForm, fileData: base64 })} />
      {/* hide update if not the user who made it */}
      {(user?.result?.googleId === assembled?.creator || user?.result?._id === assembled?.creator)&&(
      <input
        type="submit"
        value={id ? "Update the fighter" : "Add a new fighter"}
      />)}
    </form>
  );
};

export default Form;
