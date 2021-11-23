import React from "react";
import { Link } from "react-router-dom";

const Assemble = ({ assembled }) => {
  return (
    <>
      <Link to={`/assemble/${assembled._id}`}>
        <h1>{assembled.title}</h1>
      </Link>
      <h3>
        <a href={assembled.url}>{assembled.url}</a>
      </h3>
    </>
  );
};

export default Assemble;
