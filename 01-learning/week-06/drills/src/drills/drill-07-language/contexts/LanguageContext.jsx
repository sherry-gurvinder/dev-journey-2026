import {createContext , useCallback, useState} from "react";

const LanguageConetxt = createContext();
const translations = {
    en: { welcome: "Welcome", logout: "Logout", language: "Language" },
    es: { welcome: "Bienvenido", logout: "Cerrar sesión", language: "Idioma" },
    fr: { welcome: "Bienvenue", logout: "Déconnexion", language: "Langue" }
    };
const LanguageProvider = ({children}) =>
{
    const [currentLan,setcurrentLan] = useState("en");
    const changeLanguage= useCallback((lang) =>
    {
        setcurrentLan(lang);
    },[]);
    return(
        <LanguageConetxt.Provider value={{currentLan,changeLanguage,translations}}>
            {children}
        </LanguageConetxt.Provider>
    )
}

export {LanguageProvider,LanguageConetxt}