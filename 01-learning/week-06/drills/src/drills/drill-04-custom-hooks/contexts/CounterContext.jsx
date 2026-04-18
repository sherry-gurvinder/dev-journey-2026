import {useReducer,createContext} from "react";

const reducerfn = (state,action) =>
{
    if(action.type==="Increment")
    {
        return state+1;
    }
    if(action.type==="Decrement")
    {
        return state-1;
    }
    if(action.type==="Reset")
    {
        return 0;
    }
}
 const CounterContext = createContext();
const CounterProvider = ({children}) =>
{
   
    const [counter,dispatch] = useReducer(reducerfn,0);
    return(
    <CounterContext.Provider value={[counter,dispatch]}>
        {children}
    </CounterContext.Provider>
    )
}

export {CounterProvider,CounterContext}