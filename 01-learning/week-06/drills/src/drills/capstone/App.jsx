import useTheme from "./hooks/useTheme";


const App = () =>
{
    const {currentTheme,toggleTheme} = useTheme();
    return (
    <div className={currentTheme === "light" ? "bg-white text-black" : "bg-black text-white"}>
      <div className="p-8 min-h-screen">
        <h1 className="text-4xl mb-4">Theme Switcher</h1>
        <p className="text-lg mb-4">Current Theme: {currentTheme}</p>
        <button 
          onClick={toggleTheme}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
export default App;