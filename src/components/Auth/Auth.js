import React, { useState } from "react";
import "./styles.css";
import Input from './Input'
import lock from './lock.png'

const Auth = () => {
  // password show
  const [showPass, setShowPass] = useState(false);
const togglePassword = (event) => {
    event.preventDefault();
    setShowPass(!showPass);
}


  const isSignup = false;
  // handleChange function for form
  const handleChange = (event) => {
    // setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // handleSubmit function for form submission
  const handleSubmit = (event) => {
    // event.preventDefault();
    // props.updateBookmark(editForm, bookmarked._id);
    // // redirect bookmark back to index
    // props.history.push("/");
  };

  return (
    <div className="container">
        <div className="card">
            <img id="avatar" alt="locked-out" src={lock} />
            <h3>{isSignup ? 'Sign up' : 'Sign In'}</h3>
        <form onSubmit={handleSubmit}>
            {
                isSignup && (
                    <>
            <Input name="firstName" label="First Name" handleChange={handleChange}  type="text" />
            <Input name="firstName" label="First Name" handleChange={handleChange} type="text" />
                    </>
                )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPass ? "text" : "password"} />
            <button onClick={togglePassword}>Show Password</button>

          <input type="submit" value="update the bookmark" />
        </form>
      </div>
    </div>
  );
};

export default Auth;
