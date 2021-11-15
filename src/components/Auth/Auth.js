import React, { useState } from "react";
import "./styles.css";
import Input from './Input'
import lock from './lock.png'
import { GoogleLogin } from 'react-google-login'
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";



const Auth = () => {

    const [showPass, setShowPass] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();


    const togglePassword = (event) => {
        event.preventDefault();
        setShowPass(!showPass);
    }

    const handleToggle = (event) => {
        setIsSignup(!isSignup)
        setShowPass(false)
      }

    const pass = (showPass ? "text" : "password")

      const googleSuccess = async (res) => {
        console.log("Google sign-in Succeeded")
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/')
        } catch (error) {
            console.log(error)
        }
      }

      const googleFailure = (error) => {
          console.log(error)
          console.log("Google sign-in failed. This is painful")
      }


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
        <form className="authForm" onSubmit={handleSubmit}>
            { isSignup && (
                    <>
            <Input name="firstName" label="First Name" handleChange={handleChange}  type="text" />
            <Input name="lastName" label="Last Name" handleChange={handleChange} type="text" />
                    </>
                )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={pass} />
            <button className="auth" onClick={togglePassword}>Show Password</button>
            { isSignup && <Input name="confPass" label="Repeat Password" handleChange={handleChange} type={pass} /> }
            <GoogleLogin 
                clientId="304928940408-de8cbhprfiu9quvliu8gj4huahd75pho.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button className="auth" 
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled} 
                    variant="contained" 
                    ><Icon />Google Sign In</button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}  
                cookiePolicy="single_host_origin"          
            />
          <input className="auth" type="submit" value={isSignup ? 'Sign Up' : 'Log in'} />
          <button className="auth" onClick={handleToggle}>{isSignup ? 'Already have an account? Then what are you waiting for. Sign in~🐧' : "Don't have an account? Make one now. . . It's free!"}</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
