import { useState, useEffect } from "react";
const TestGet = () =>
{   
    const [UserList,setUserList] = useState([]);
    const [ErrorMsg, setErrorMsg] = useState(false);
    const [Loading,setLoading] = useState("Loading....");

    useEffect(()=>
    {   
        console.log("Screen is Loading using use Effect")
            setLoading("fetching Data...")
            const loadUser = async( ) =>
            {
                try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users1");
            if (!response.ok) {
                    throw new Error("Could not fetch the data!");
                }
            const result = await response.json();
            setUserList(result);
            console.log("result:",result);
            
        
                }
             catch(e)
                {
                setErrorMsg(e.message); 
                console.log("ERROR***",e.message);
                setLoading("data not found"); // Clear the loading text so the error can be shown
            }
            }
       
        
        loadUser();
        
    },[]);

    return(
        <div>
            <h1>This is Get Test</h1>
            <h2>User List</h2>
            <p>{Loading}</p>
            {ErrorMsg && ErrorMsg}
            {!ErrorMsg && 
           <p>
            {UserList.map((current,count)=>
            (
                <h1>{current.name} </h1>
               
            ))
            }
            </p>}

        </div>
    )
}
export default TestGet;