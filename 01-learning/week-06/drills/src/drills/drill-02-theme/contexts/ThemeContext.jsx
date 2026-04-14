import {  createContext ,useState} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>
{
    const [theme,settheme] = useState("light");

    const toggleTheme = () =>
    {
        settheme(theme==="light"?"dark":"light")
    }

    return(
        <ThemeContext.Provider value={[theme,toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )


}
export {ThemeContext, ThemeProvider};