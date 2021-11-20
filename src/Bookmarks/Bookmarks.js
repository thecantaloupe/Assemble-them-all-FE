import React from "react";
import { useSelector } from "react-redux";

import Bookmark from "./Bookmark/Bookmark";

const Bookmarks = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  //loaded function
  const loaded = () => {
    return bookmarks.map((bookmarked) => (
      <div key={bookmarked._id} className="bookmarked">
        <Bookmark bookmarked={bookmarked} />
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <div className="card3">{!bookmarks.length ? loading() : loaded()}</div>
    </>
  );
};

export default Bookmarks;
