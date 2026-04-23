import useLocalStorage from "../hooks/useLocalStorage";
const NameInput = () =>
{   
    const [value, setvalue] = useLocalStorage('name', '');
   console.log("")
    return(
        <>
        <input type="text" placeholder="Name" onChange={(e)=>setvalue(e.target.value)} value={value}/>
        <p>{value}</p>
        </>
    )
}
export default NameInput;