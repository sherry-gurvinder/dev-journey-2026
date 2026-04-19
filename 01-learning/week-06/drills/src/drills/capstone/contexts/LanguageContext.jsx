import {  createContext, useEffect, useState } from "react"

const LanguageContext = createContext();

const translations = {
  en: {
    welcome: "Welcome",
    toggleTheme: "Toggle Theme",
    selectLanguage: "Select Language",
    currentTheme: "Current Theme",
    home: "Home",
    settings: "Settings",
    about: "About",
    contact: "Contact"
  },
  es: {
    welcome: "Bienvenido",
    toggleTheme: "Cambiar Tema",
    selectLanguage: "Seleccionar Idioma",
    currentTheme: "Tema Actual",
    home: "Inicio",
    settings: "Configuración",
    about: "Acerca de",
    contact: "Contacto"
  }
};
const LanguageProvider = ({children}) =>
{   
    
    const [currentLanguage,setcurrentLanguage] = useState(localStorage.getItem("lang")||"en")
    useEffect(()=>
    {
        localStorage.setItem("lang",currentLanguage)
    },[currentLanguage])
    const changeLanguage = () =>
    {
        setcurrentLanguage(currentLanguage==="en"?"es":"en")
    }
    return(
        <LanguageContext.Provider value={{currentLanguage,translations,changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageProvider,LanguageContext}