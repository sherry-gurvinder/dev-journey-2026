import { createContext , useReducer} from "react"

const CounterContext = createContext();
 const counterReducer = (state,action) =>
    {
        if(action.type ==="INCREMENT")
        {
            return state + 1;
        }
        if(action.type==="DECREMENT")
        {
            return state - 1;
        }
         if(action.type==="RESET")
        {
            return 0;
        }
         else
        {
            return "No a valid option";
        }
    }
const CounterProvider = ({children}) =>
{
   const [count,dispatch] = useReducer(counterReducer,0);
    return(<CounterContext.Provider value = {[count,dispatch]}>
        {children}
    </CounterContext.Provider>)
}

export { CounterContext, CounterProvider };