import { NavLink } from "react-router-dom"
import useLanguage from "../hooks/useLanguage"
import useTheme from "../hooks/useTheme"
const Navbar = () => 
{
    const { currentTheme, toggleTheme } = useTheme();
const { currentLanguage, changeLanguage } = useLanguage();
    return(
       <nav className={`flex justify-between items-center p-4 ${currentTheme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
        <div>--LOGO--</div>
  
        <div className="flex">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue font-bold" : ""}>Home</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div>
            <button onClick={toggleTheme} className="bg-green-400 p-2 m-1" >Theme</button>
            <button onClick={changeLanguage} className="bg-green-400 p-2 m-1">Language</button>
        </div>
</nav>
    
   )
}
export default Navbar;