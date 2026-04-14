import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
const ThemeToggle = () =>
{
    const [theme, toggleTheme] = useContext(ThemeContext);
    console.log("theme value is", theme)

    return(
            <div className="grid min-h-screen justify-center items-center bg-yellow-100">
            
            <p className={` grid min-w-100 min-h-100 justify-center items-center ${theme==="light"?"bg-gray-100 text-black":"bg-black text-white"}`}>Theme value is : {theme}</p>
            <button className="border-1 bg-blue-100  w-200 h-20 p-6 justify-center" onClick={toggleTheme} > Theme is {theme} click here to change </button>
            </div>)
}
export default ThemeToggle;