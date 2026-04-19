import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";

const Home = () =>
{
    const {currentTheme,toggleTheme} = useTheme();
    const {currentLanguage,translations,changeLanguage} = useLanguage();
    console.log(translations);
    console.log(translations[currentLanguage]["toggleTheme"]);
    return (
    <div className={currentTheme === "light" ? "bg-white text-black" : "bg-black text-white"}>
      <div className="p-8 min-h-screen">
        <div className="grid grid-cols-4">

            <div className="grid justify-center border-1 border-white items-center m-1 "> {translations[currentLanguage]["home"]}</div>
            <div className="grid justify-center border-1 border-white items-center m-1"> {translations[currentLanguage]["settings"]}</div>
            <div className="grid justify-center border-1 border-white items-center m-1"> {translations[currentLanguage]["about"]}</div>
            <div className="grid justify-center border-1 border-white items-center m-1"> {translations[currentLanguage]["contact"]}</div>
             <button 
            onClick={toggleTheme}
            className="bg-blue-500 text-white px-4 py-2 rounded m-2"
            >
            Toggle Theme
            </button>
             <button 
            onClick={changeLanguage}
            className="bg-blue-500 text-white px-4 py-2 rounded m-2"
            >
            Change Language
            </button>
        </div>
        <div className="grid grid-cols-2 justify-center items-center m-4">
            <div className="grid justify-center "> <h1 className="text-4xl mb-4">Theme {currentTheme} </h1></div>
            <div className="grid justify-center"> <h1 className="text-4xl mb-4">Language {currentLanguage}</h1></div>
      </div>
      </div>
    </div>
  );
}
  export default Home;