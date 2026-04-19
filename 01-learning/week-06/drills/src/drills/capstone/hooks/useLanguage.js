import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const useLanguage = () =>
{
   const {currentLanguage,translations,changeLanguage} = useContext(LanguageContext); 
    return {currentLanguage,translations,changeLanguage}
}
export default useLanguage;