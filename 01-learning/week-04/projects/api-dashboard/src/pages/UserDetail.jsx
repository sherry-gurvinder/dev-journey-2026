import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import getUsers, {getUserById} from "../services/api";
const UserDetail = () =>
{
    const {id} = useParams();
    const [userFiltered,setuserFiltered] = useState(null);
    const [isLoading,setisLoading] = useState(true);
    const [error,seterror] = useState(false);
    const LoadUserById = async() =>
    {
        try {
             const result = await getUserById(id);
             console.log(result);
             setuserFiltered(result);
             console.log("userFiltered",userFiltered)
            /*setuserFiltered ( result.filter((user)=>user.id.toString()===id.toString()))*/
       } catch (error) {
                    seterror(error)
                }
                finally
                {
                    setisLoading(false);
                }
    }
    useEffect(()=>
    {
        console.log("user is :" ,id);
        LoadUserById();
    },[]) 
    return(
        <div>
            <h1>User Details</h1>
            <h2>ID : {id}</h2>
            {isLoading && <h3>User List Loading.......</h3>}
            {error && <h3 style={{color:"Red"}}>Error !!!</h3>}
            {userFiltered 
    ? <p>Username: {userFiltered.name} Email: {userFiltered.email} Phone: {userFiltered.phone}</p>
    : <h2>No data found</h2>
}
            
            
        </div>
    )
}
export default UserDetail;