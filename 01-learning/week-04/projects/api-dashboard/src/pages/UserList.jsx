import { useState } from "react";
const UserList = () =>

    {
        const [UserData,setUserData] = useState([]);
        const [isLoading,setisLoading] = useState(true);
        const [error,seterror] = useState(false);
        const getUserData = async () =>
        {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok)
            {
                seterror(true);
                return
            }
            const result = await response.json();
            console.log("Response:",result);
            setUserData(result);

        }
        return(
            <div>
                <h1> User List</h1>
                <input type="text" placeholder="Search User" onChange={getUserData}/>
                {isLoading && <h3>User List Loading.......</h3>}
                {error && <h3 style={{color:Red}}>Error !!!</h3>}
                {UserData.map((user,key)=>(
                    <h4>{user.name}</h4>
                ))
                }
            </div>
        )
    }
export default UserList;