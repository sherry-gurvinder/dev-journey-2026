import { useContext } from "react";
import {CounterContext } from "./contexts/CounterContext";
const Counter = () =>
{
    const {count, counter} = useContext(CounterContext );
    return ( <>
            <h1> Counter Page</h1>
            {count}
            <button onClick={counter}> Count</button>
    </>)
}
export default Counter;