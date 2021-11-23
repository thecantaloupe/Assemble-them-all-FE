import { Link, useHistory, useLocation} from "react-router-dom";
import "./styles.css";
import icon from "./peng-removebg-preview.png"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode'


const Header = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const logout = () => {
    dispatch({type: 'LOGOUT'});
    history.push('/');
    setUser(null);
  }
  useEffect(() => {
    const token = user?.token;

    if(token){
      const decodedToken = decode(token)

      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location]);
  return (
    <div className="nav">
      <span className="nav-main">
        <Link to="/"> PENG-PAL </Link>
        <img src={icon} alt="icon" height="60" />
      </span>
      <span className="nav-user">
        {/* if the user is not null, by virtue of being in local storage than display the user avatar/name.etc and if user is null then display login button! */}
        {user ? (
          <div className="nav-user-profile">
            <img id="avatar" alt={user.result.name} src={user.result.imageUrl}/>
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