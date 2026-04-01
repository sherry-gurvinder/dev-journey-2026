import { NavLink } from "react-router-dom";

const Navbar = () =>
{
    return(
        <nav>
            <NavLink to="/">Dashboard </NavLink>
            <NavLink to="users">UserList </NavLink>
            <NavLink to="create">CreatePost </NavLink>
           
        </nav>
    )
}
export default Navbar;