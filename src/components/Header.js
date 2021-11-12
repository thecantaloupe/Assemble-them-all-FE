import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="nav">
      <span className="nav-main">
        <Link to="/"> Home Button </Link>
      </span>
      <Link to="/about"> About </Link>
      <Link to="/route2"> Tab 2 </Link>
    </div>
  );
};

export default Header;
