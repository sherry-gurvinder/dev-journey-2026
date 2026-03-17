import { useState } from "react";



const Login = () =>
{

const [username,Setusername] = useState("");
const [password,setpassword] = useState("");
    const handlesubmit = (e)=>
    {   
         alert("Login");
        e.preventDefault();
       
    }
    return(
        <>
        <h1> Welcome To Guard Portal</h1>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="USER NAME" value={username} onChange={(e)=>Setusername(e.target.value)}/><hr/>
            <input type="password" placeholder="PASSWORD" value={password} onChange={(e)=>setpassword(e.target.value)} /><hr/>
            <input type="submit" VALUE="LOGIN"/>
            
        </form>
        </>
    )
}
export default Login;