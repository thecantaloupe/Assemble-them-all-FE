import React from "react";
import { Link } from "react-router-dom";

const Result = ({ assembled, message }) => {
    return (
      <>
        
        <legend>{assembled.title}</legend>
        Health Remaining: {assembled?.health}<br />
        <h4>
          {message}
        </h4>

      </>
    );
  };
  
  export default Result;
  