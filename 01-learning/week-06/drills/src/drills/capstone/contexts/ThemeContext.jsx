import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>
{
    
    const [currentTheme,setcurrentTheme] = useState(localStorage.getItem("Theme") || "light");
    useEffect(()=>
    {
        console.log("Theme Changed");
        localStorage.setItem("Theme",currentTheme);
    },[currentTheme])
    const toggleTheme = () =>
    {
        setcurrentTheme(currentTheme==="light"?"dark":"light")
    }
    return(
    <ThemeContext.Provider value={{currentTheme,toggleTheme}} >
        {children}
    </ThemeContext.Provider>
    )
}
export {ThemeContext,ThemeProvider}