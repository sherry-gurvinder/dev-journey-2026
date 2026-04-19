import { useContext } from "react"
import { LanguageConetxt } from "../contexts/LanguageContext"


const useLanguage = ()=>
{
    const {currentLan,changeLanguage,translations} = useContext(LanguageConetxt);

    return { currentLan, changeLanguage , translations}
}

export default useLanguage;