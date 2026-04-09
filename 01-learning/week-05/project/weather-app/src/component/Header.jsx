import { useState } from "react";

export const Header = ({pagetheme,changeTheme,isdark}) =>
{
    const [city,setcity] = useState("");
    const [error,seterror] = useState("");
    const [iserror,setiserror] = useState(false);
    const API_key = import.meta.env.VITE_API_KEY;
    const [city_data,setcity_data] = useState({});

    const get_Lat_Lon = async(e) =>
    {
        e.preventDefault();
        if(city.length<=0)
        {
            seterror("Please Enter City Name");
            setiserror(true);
           return;
        }
        setiserror(false);
        const resultlon_lat = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_key}`);
        const res = await resultlon_lat.json();
        
        if(!res.length) {
            seterror("City not found");
            setiserror(true);
            return;
        }
        
        const result = await searchWeather(res);
        setcity_data(result);
    }

    const searchWeather = async (res) =>
    {
        const fetch_city = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=${API_key}`)
        return fetch_city.json();
    }

    const getWeatherBackground = (weatherType) => {
        if (!weatherType) return "bg-gray-300";
        
        const weatherMap = {
            "Clear": "bg-gradient-to-b from-blue-400 to-blue-200",
            "Clouds": "bg-gradient-to-b from-gray-400 to-gray-200",
            "Rain": "bg-gradient-to-b from-blue-600 to-gray-500",
            "Drizzle": "bg-gradient-to-b from-blue-500 to-gray-400",
            "Thunderstorm": "bg-gradient-to-b from-gray-700 to-gray-600",
            "Snow": "bg-gradient-to-b from-blue-100 to-white",
            "Mist": "bg-gradient-to-b from-gray-300 to-gray-200",
            "Smoke": "bg-gradient-to-b from-gray-400 to-gray-300",
            "Haze": "bg-gradient-to-b from-gray-300 to-gray-100",
            "Dust": "bg-gradient-to-b from-yellow-300 to-orange-200",
            "Fog": "bg-gradient-to-b from-gray-300 to-gray-200",
            "Sand": "bg-gradient-to-b from-yellow-400 to-orange-300",
            "Ash": "bg-gradient-to-b from-gray-500 to-gray-400",
            "Squall": "bg-gradient-to-b from-gray-600 to-gray-500",
            "Tornado": "bg-gradient-to-b from-gray-800 to-gray-600",
        };
        
        return weatherMap[weatherType] || "bg-gray-300";
    }

    return(
        <header className={`min-h-screen p-8 ${pagetheme}`}>
            <div className="max-w-2xl mx-auto">
                
                {/* SEARCH SECTION */}
                <div className="mb-8">
                    {iserror && <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>}
                    <form onSubmit={get_Lat_Lon} className="flex gap-4 justify-center">
                        <input  
                            type="text" 
                            placeholder="Enter City Name"
                            className="px-4 py-3 border-2 border-gray-300 rounded-lg flex-1 max-w-xs focus:border-blue-500 focus:outline-none"
                            onChange={(e)=>setcity(e.target.value)} 
                            value={city}
                        />
                        <button 
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* WEATHER CARD SECTION */}
                {city_data.main ? (
                    <div className={`rounded-lg shadow-2xl p-8 text-white ${getWeatherBackground(city_data.weather?.[0]?.main)}`}>
                        
                        {/* City Name */}
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            {city_data.name}, {city_data.sys?.country}
                        </h2>

                        {/* Main Temperature */}
                        <div className="text-center mb-8">
                            <div className="text-7xl font-bold mb-2">
                                {Math.round(city_data.main.temp - 273.15)}°C
                            </div>
                            <p className="text-2xl capitalize">
                                {city_data.weather?.[0]?.description || "No description"}
                            </p>
                        </div>

                        {/* Weather Details Grid */}
                        <div className="grid grid-cols-2 gap-6 bg-white bg-opacity-20 rounded-lg p-6 text-black">
                            
                            <div className="text-center">
                                <p className="text-sm opacity-80 mb-2">Feels Like</p>
                                <p className="text-3xl font-bold">
                                    {Math.round(city_data.main.feels_like - 273.15)}°C
                                </p>
                            </div>

                            <div className="text-center">
                                <p className="text-sm opacity-80 mb-2">Max Temp</p>
                                <p className="text-3xl font-bold">
                                    {Math.round(city_data.main.temp_max - 273.15)}°C
                                </p>
                            </div>

                            <div className="text-center">
                                <p className="text-sm opacity-80 mb-2">Min Temp</p>
                                <p className="text-3xl font-bold">
                                    {Math.round(city_data.main.temp_min - 273.15)}°C
                                </p>
                            </div>

                            <div className="text-center">
                                <p className="text-sm opacity-80 mb-2">Humidity</p>
                                <p className="text-3xl font-bold">
                                    {city_data.main.humidity}%
                                </p>
                            </div>

                            <div className="text-center">
                                <p className="text-sm opacity-80 mb-2">Wind Speed</p>
                                <p className="text-3xl font-bold">
                                    {Math.round(city_data.wind.speed)} m/s
                                </p>
                            </div>

                            <div className="text-center">
                                <p className="text-sm opacity-80 mb-2">Pressure</p>
                                <p className="text-3xl font-bold">
                                    {city_data.main.pressure} hPa
                                </p>
                            </div>

                        </div>

                    </div>
                ) : (
                    <div className="text-center py-16 text-gray-600">
                        <p className="text-xl">Search for a city to see the weather</p>
                    </div>
                )}

            </div>
        </header>
    )
}