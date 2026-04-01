import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Dashboard = () =>
{   
    const [UserId,setUserId] = useState("");
    const navigate = useNavigate();
    const handleSearch = () =>
    {
        navigate("users/"+UserId);
    }
    return(
        <div>
            <h1> Dashboard</h1>
        <input type="text" value={UserId} onChange={(e)=>setUserId(e.target.value)}/><hr/>
        <input type="button" value="Search User" onClick={handleSearch}/>
        </div>
    )
}
export default Dashboard;