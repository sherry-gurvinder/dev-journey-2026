import { Children, createContext } from "react"

const LanguageContext = createContext();


const LanguageProvider = ({children}) =>
{
    return(
        <LanguageContext.LanguageProvider>
            {Children}
        </LanguageContext.LanguageProvider>
    )
}

export {LanguageProvider,LanguageContext}