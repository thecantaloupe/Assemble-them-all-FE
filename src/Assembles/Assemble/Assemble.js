import React from "react";
import { Link } from "react-router-dom";


const Assemble = ({ assembled , functions }) => {
  // const [main, changeMain] = functions
  console.log(assembled)
  return (
    <>
      <legend>{assembled.title}</legend>
      <Link to={`/assemble/${assembled._id}`}>
        <img src={assembled?.fileData } className="sprite" />
      </Link>
      <h4>
        Health: {assembled?.health}<br />
        Attack: {assembled?.attack}<br />
        Defense: {assembled?.defense}<br />
      </h4>
      <h6>Made by {assembled._id?assembled.name:"anonymous user"}</h6>
      
    </>
  );
};

export default Assemble;
