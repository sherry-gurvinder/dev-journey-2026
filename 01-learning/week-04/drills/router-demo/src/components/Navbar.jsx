import { NavLink } from "react-router-dom";
    const Navbar =() =>
    {

        return(
    <nav>
      <NavLink to="/" 
        style={({isActive})=>
        ({
          color:isActive?"red":"purple",
          fontWeight:isActive?"bold":"normal"
        })
      }
      
      >Dashboard</NavLink>
      <NavLink to="/createpost"  style={({isActive})=>
        ({
          color:isActive?"red":"purple",
          fontWeight:isActive?"bold":"normal"
        })
      }>Create Post</NavLink>
      <NavLink to="/userlist"  style={({isActive})=>
        ({
          color:isActive?"red":"purple",
          fontWeight:isActive?"bold":"normal"
        })
      }>User List</NavLink>
      </nav>
        )}


export default Navbar;
