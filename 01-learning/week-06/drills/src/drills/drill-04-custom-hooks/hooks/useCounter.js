import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const useCounter = () =>
{
    return useContext(CounterContext);
}

export default useCounter;