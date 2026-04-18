import { createContext, useContext } from "react"
import { CounterContext } from "../contexts/CounterContext";
import useCounter from "../hooks/useCounter";


const Counter = () =>
{
    //const [count,dispatch] = useContext(CounterContext);
    const [count,dispatch] = useCounter();
    return(
        <div className="grid bg-gray-100 min-h-screen">
            <div className="grid justify-center items-center">
                <p className="text-4xl"> { count===0 && "Counter is at 0" }{ count!=0 && `Counter ${count}` } </p>
                
            </div>
            <div className="grid grid-cols-3 h-35">
                <div className="grid">
                    <button className="bg-blue-300 p-4 m-4 rounded-full" onClick={()=>{dispatch({type:"Increment"})}}> Increment</button>
                </div>
                <div className="grid">
                    <button className="bg-red-300 p-4 m-4 rounded-full" onClick={()=>{dispatch({type:"Decrement"})}}> Increment</button>
                </div>
                <div className="grid">
                    <button className="bg-gray-300 p-4 m-4 rounded-full" onClick={()=>{dispatch({type:"Reset"})}}> Reset</button>
                </div>
            </div>
            
        </div>
        
    )
}
export default Counter;