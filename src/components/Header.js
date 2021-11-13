import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="nav">
      <span className="nav-main">
        <Link to="/"> Home Button </Link>
      </span>
    </div>
  );
};

export default Header;
