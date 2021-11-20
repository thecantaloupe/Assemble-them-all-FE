import React from "react";
import { Link } from "react-router-dom";

const Bookmark = ({ bookmarked }) => {
  return (
    <>
      <Link to={`/bookmark/${bookmarked._id}`}>
        <h1>{bookmarked.title}</h1>
      </Link>
      <h3>
        <a href={bookmarked.url}>{bookmarked.url}</a>
      </h3>
    </>
  );
};

export default Bookmark;
