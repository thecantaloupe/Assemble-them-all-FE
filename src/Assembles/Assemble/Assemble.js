import React from "react";
import { Link } from "react-router-dom";

const Assemble = ({ assembled }) => {
  return (
    <>
      <Link to={`/assemble/${assembled._id}`}>
        <h1>{assembled.title}</h1>
        <h6>Made by {assembled._id?assembled.name:"anonymous user"}</h6>
      </Link>
      <h3>
        <a href={assembled.url}>{assembled.url}</a>
      </h3>
    </>
  );
};

export default Assemble;
