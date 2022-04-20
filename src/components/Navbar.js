import {Link} from "react-router-dom";
import useLogout from "../hook/useLogout";
import {useContext} from "react";
import {Auth} from "../context/AuthContext";

const Navbar = () =>{

    const {user} = useContext(Auth);

    const {error, isPending, logout} = useLogout();
    return (
        <nav>
            <ul>
                {user ? "" : <li><Link to="signup">Signup</Link></li>}
                {user ? "" :  <li><Link to="login">Login</Link></li>}
                {user ? <li><Link to="/">Home</Link></li> : ""}
                {user ? <li><Link to="echipe">Echipe</Link></li> : ""} 
                {user ? <li><Link to='new-team'>New Team</Link></li> : ""}
                {user ? <li><button onClick={logout}>Logout</button></li> : ""}
            </ul>
        </nav>
    )
}


export default Navbar;