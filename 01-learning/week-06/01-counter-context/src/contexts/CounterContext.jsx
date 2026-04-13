import {createContext,useState} from "react";

const CounterContext  =  createContext();

const CounterProvider = ({children}) =>
{
    const [count ,setcount] = useState(0);
    const counter = () =>
    {
        setcount(count+1);
    }

    return(
        <CounterContext.Provider value={{ count, counter }}>
            {children}
        </CounterContext.Provider>
    )
}

export  { CounterContext,CounterProvider };