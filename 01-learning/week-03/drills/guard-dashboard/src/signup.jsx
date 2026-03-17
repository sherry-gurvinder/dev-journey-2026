import { useState } from "react";
const Signup = () =>
{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [Cpassword,setCPassword] = useState("");
    const handleSubmit = (e)=>
    {
         e.preventDefault();
    }
   
    return(
        <>
            <h2>Sign Up!</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username"  onChange={(e)=>setUsername(e.target.value)} value={username} /> <hr/>
                <input type="text" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} value={password}/> <hr/>
                <input type="text" placeholder="Confirm Password"  onChange={(e)=>setCPassword(e.target.value)} value={Cpassword}/> <hr/>
               
                <input type="submit"value="Submit"/>
            </form>
        </>
    )
}
export default Signup;