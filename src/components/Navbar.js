import {Link} from "react-router-dom";

const Navbar = () =>{
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="echipe">Team</Link></li>
                <li><Link to="new-team">New Team</Link></li>
            </ul>
        </nav>
    )
}


export default Navbar;