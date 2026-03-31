import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();
    const [userId,setuserID] = useState("");
    const handleUserid = () =>
    {
        navigate("/users/"+userId);
    }

  return( 
        <div>
            <h1>Dashboard Page</h1>
            <input type="text" value={userId} onChange={(e)=>setuserID(e.target.value)}/>
            <input type="button" onClick={handleUserid} value="Search User By ID"/>
        </div>
       
        );
}

export default Dashboard;