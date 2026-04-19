import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext";

const useTheme = () =>
{
    const {currentTheme,toggleTheme} = useContext(ThemeContext);
    return {currentTheme,toggleTheme};
}

export default useTheme;