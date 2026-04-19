import useAuth from "../hooks/useAuth"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
const Login = () =>
{   
    //const {user,userLogin,logout} = useContext(AuthContext);
    const {user,userLogin,userLogout} = useAuth();
    const handleLogin = () =>
    {
        const userdata =
        {  
        name: "Sherry",
        email: "sherry@example.com",
        role: "admin",
        token: "abc123xyz"
        };
        userLogin(userdata);
    }
    return(
        <div className="grid justify-center bg-gray-400 min-h-screen items-center">
            <div>welcome {user?.name}</div>
            {!user 
            ? 
            ( <button className="bg-blue-400 p-2 " onClick={handleLogin}> Login</button>) 
            :
            ( <div>
                <p>{user.name}</p> 
                <button className="bg-blue-400 p-2 " onClick={userLogout}> LogOut</button>
            </div>) } 
           
            
        </div>
    )
}
export default Login;