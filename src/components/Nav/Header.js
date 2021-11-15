import { Link, useHistory, useLocation} from "react-router-dom";
import "./styles.css";
import icon from "./peng-removebg-preview.png"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// for testing before oath
// let user = {
//   result: {
//     name: "Zachary",
//     imageUrl: "https://i.imgur.com/abJvztN.png",
//     charAt: "ZG"
//   }
// }
// // uncoment to test login logout
// user = null

const Header = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()


  const logout = () => {
    console.log("clicked")
    dispatch({type: 'LOGOUT'});
    history.push('/');
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location]);

  return (
    <div className="nav">
      <span className="nav-main">
        <Link to="/"> Peng-Pals </Link>
        <img src={icon} alt="icon" height="60" />
      </span>
      <span className="nav-user">
        {user ? (
          <div className="nav-user-profile">
            <img id="avatar" alt={user.result.name} src={user.result.imageUrl}/>{user.result.name.charAt}
            {/* maybe need style or styled component for button */}
            <h4>{user.result.name}</h4> 
            <button onClick={logout} >Logout</button>
          </div>
        ) : (
          <Link to='/auth'>
          <button >Login</button>
          </Link>
        )}
      </span>
    </div>
  );
};

export default Header;
