import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";

const Settings = () => {
  const { currentTheme, toggleTheme } = useTheme();
  const { currentLanguage, translations, changeLanguage } = useLanguage();

  return (
    <div className={currentTheme === "light" ? "bg-white text-black" : "bg-black text-white"}>
      <div className="p-8 min-h-screen">
        <h1 className="text-4xl mb-4">{translations[currentLanguage]["settings"]}</h1>
        
        <div className="mb-6">
          <p className="text-lg mb-2">Current Theme: {currentTheme}</p>
          <button 
            onClick={toggleTheme}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {translations[currentLanguage]["toggleTheme"]}
          </button>
        </div>

        <div>
          <p className="text-lg mb-2">Current Language: {currentLanguage}</p>
          <button 
            onClick={changeLanguage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {translations[currentLanguage]["selectLanguage"]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;