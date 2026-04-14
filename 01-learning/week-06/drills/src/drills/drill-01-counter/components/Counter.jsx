import { useContext } from "react";
import {CounterContext } from "../contexts/CounterContext";
const Counter = () =>
{
    const {count, counter} = useContext(CounterContext );
    return ( 
            <div className="bg-gray-200 min-h-screen grid ml-6 mr-6 justify-center align-center">
                <div className="grid grid-gap-2">
                    <div className="grid "> 
                        <h1 className="text-8xl "> Counter Page</h1>
                    </div>
                    <div className="grid grid-cols-2">
                        <label className="text-5xl ">Count</label>
                        <p className="text-3xl "> {count} </p>
                    </div>
                    <div className="grid">
                         <button onClick={counter} className="border-1"> Count</button>
                    </div>
                </div>
               
            </div>
        )
}
export default Counter;