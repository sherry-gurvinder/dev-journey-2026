import { useState } from "react";

export const Header = () =>
{
    const [city,setcity] = useState("");
    const [error,seterror] = useState("");
    const [iserror,setiserror] = useState(false);
     const API_key = import.meta.env.VITE_API_KEY;
    const [cityData,setcityData] = useState([]);
    const [citytemp,setcitytemp] = useState("");
    const searchWeather = async (e) =>
  {
    console.log("City is ",city);
    e.preventDefault();
    if(city.length<=0)
    {
        seterror("Please Enter City Name");
        setiserror(true);
        return;
    }
    const resultlon_lat= await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_key}`);
    const res = await resultlon_lat.json();
    const fetch_city = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=${API_key}`)
    const city_data = await fetch_city.json();
    setcityData(city_data);
    console.log(fetch_city);
    setcitytemp(cityData.main.temp-273.15);


  }
    return(
         <header className="grid border-1 border-green-700 p-4 m-4 bg-yellow-100">
          <div className="border-1 border-orange-700 p-4 m-4 grid-rows-3">
            <p>{iserror && error}</p>
            <h1 className="border-1 border-purple-700 p-4 m-4 grid justify-center"> {city}</h1>
            <form className="border-1 border-pink-700 p-4 m-4 grid justify-center">
              <input  type="text" placeholder="Enter City Name"
                      className="border-1 border-pink-700 p-4 m-4 grid justify-center"
                      onChange={(e)=>setcity(e.target.value)} value={city}
              />
              <button className="bg-blue-700 p-4 m-4 text-white" onClick={searchWeather}>Search</button>
            </form>
            <div className="border-1 border-yellow-700 p-4 m-4 grid justify-center">
                <h1 className="justify-center grid grid[3]">Weather Card</h1>
               <div className="grid grid-cols-3 border-1 border-yellow-700 p-4 m-4 grid justify-center ">
                <p> {citytemp} Celcius</p>
                {/*cityData.map((current,id)=>
                (
                    <div key={id} className="grid grid-cols-3 border-1 border-yellow-700 p-4 m-4 grid justify-center" >
                      <p>Name:</p>
                    
                  </div>
              )
                )*/}
               </div>
          </div>
          </div>
        </header>
    )
}