import { CounterContext } from "../contexts/CounterContext";
import { useContext } from "react";

const Counter = () =>
{   
    const [count,dispatch] = useContext(CounterContext);
        return(
            <div className="grid min-h-screen min-w-screen bg-gray-100">
                <div className="grid justify-center align-center">
                    <div className="grid justify-center items-center text-4xl">
                        <p> Counter Is At</p>
                        <p>{count}</p>
                    </div>
                    <div className="grid">
                        <button className="p-2 bg-green-200 m-4 w-2xl" onClick={()=>dispatch({type:'INCREMENT'})}> Increment</button>
                    </div>
                    <div className="grid">
                        <button  className="p-2 bg-red-200 m-4 w-2xl"  onClick={()=>dispatch({type:'DECREMENT'})} >Decrement </button>
                    </div>
                    <div className="grid">
                        <button  className="p-2 bg-gray-200 m-4 w-2xl"  onClick={()=>dispatch({type:'RESET'})}>Reset</button>
                    </div>
                </div>
            </div>
        )
}
export default Counter;