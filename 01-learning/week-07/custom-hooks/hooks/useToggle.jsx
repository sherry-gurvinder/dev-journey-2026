import { useState } from "react"


const useToggle = (initialValue=false) =>
{
    const [value, setValue] = useState(initialValue)
    const setTrue = () =>
    {
        setValue(true);
    }
    const setFalse = () =>
    {
        setValue(false);
    }
    const toggle = () =>
    {
        setValue(prev=>!prev);
        
    }
    
    return [value, toggle, setTrue, setFalse];
}
export default useToggle;