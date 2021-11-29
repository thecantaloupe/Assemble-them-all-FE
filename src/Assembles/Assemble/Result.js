import React from "react";
import { Link } from "react-router-dom";

const Result = ({ assembled }) => {
    return (
      <>
        
        <legend>{assembled.title}</legend>
        Health Remaining: {assembled?.health}<br />
        <h4>
          CONGRATS, YOU WON!!!
        </h4>

      </>
    );
  };
  
  export default Result;
  