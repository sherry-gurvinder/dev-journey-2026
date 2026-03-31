import { useState } from "react";

const Dashboard = () => {

    const [userId,setuserID] = useState("");
    const handleUserid = () =>
    {

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