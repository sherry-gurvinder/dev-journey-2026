import { useState,useEffect } from "react";
import {getUsers} from "../services/api";

const UserList = () =>

    {
        const [UserData,setUserData] = useState([]);
        const [isLoading,setisLoading] = useState(true);
        const [error,seterror] = useState(false);
        const [searchQuery, setSearchQuery] = useState("")
        
        const filterUser = UserData.filter((user)=>
        {   
            return user.name.toLowerCase().includes(searchQuery.toLowerCase());
        })

        const loadData = async() =>
        {
            setisLoading(true); 
                try {
                    const result  = await getUsers();
                setUserData(result);
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
            console.log("Run program ***");
           
            loadData();
           
        },[])
        return(
            <div>
                <h1> User List</h1>
                <input type="text" placeholder="Search User" onChange={(e)=>setSearchQuery(e.target.value)}/>
                {isLoading && <h3>User List Loading.......</h3>}
                {error && <h3 style={{color:"Red"}}>Error !!!</h3>}
                {filterUser.map((user)=>(
                    <h4 key={user.id}>{user.name}</h4>
                ))
                }
            </div>
        )
    }
export default UserList;