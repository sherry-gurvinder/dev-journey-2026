import useLanguage from "../hooks/useLanguage"

const LanguageSwitcher = () =>
{
    const {currentLan,changeLanguage,translations} = useLanguage();
    console.log("hello ",translations);
    console.log("hello ",translations[currentLan]["welcome"]);
    return(
        <div>
            <div className="flex items-center justify-center">
                <button className="bg-red-500 p-4 m-4" onClick={()=>changeLanguage("en")}> English </button>
                <button className="bg-blue-500 p-4 m-4" onClick={ ()=>changeLanguage("es")}> Español </button>
                <button className="bg-green-500 p-4 m-4" onClick={()=>changeLanguage("fr")}> French </button>
            </div>
            <div className="grid justify-center text-8xl">
               {translations[currentLan]["welcome"]} 
            </div>
        </div>
    )
}

export default LanguageSwitcher;