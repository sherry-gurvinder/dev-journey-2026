import Button from "../components/Button";
import { useState} from "react";
const Login = (props) =>
{   const [error, setError] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [LoginSuccess,setLoginSuccess] =useState("");
    const {Theme} = props;
    console.log(Theme,"Theme is ");
    const emailChange = (e) =>
    {
        setEmail(e.target.value)
        setError("");
        setLoginSuccess(false);

    }
    const passwordChange = (e) =>

        {
            setPassword(e.target.value)
            setError("");
            setLoginSuccess(false);

        }
    const handleSubmit =(e) =>
    {   
        setLoginSuccess(false);
        console.log("handle click")
        e.preventDefault();
        if(!Email.includes("@"))
        {
            console.log("error @ is missing ")
            setError("Invalid Email")
            return;
        }
        else if(Password.length<=5)
        {
            console.log("password is less than 5")
            setError("Password should be longer than 5 characters")
            return
        }
        else{
            console.log("no error")
            setLoginSuccess(true);
        }
    }
    return(
        <div className="grid">
            <form className={`${Theme} grid p-6 m-6 justify-center item-center`}>
                <div className="grid justify-center">
                {error && <p className="text-red-500">{error}</p>}
                {LoginSuccess && <p className="text-green-500">Login successful</p>}
                </div>
                <div className="grid gap-4 grid-cols-2">
                   

                    <label>Email</label>
                    <input 
                    className="border-2 border-gray-300 rounded-lg
                    px-2 py-2 m-2
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                    transition-colors" 
                    type="text" placeholder="Email" value={Email} onChange={emailChange}/>
                </div>
                <div className="grid gap-4 grid-cols-2">
                    <label>Password</label>
                    <input className="border-2 border-gray-300 rounded-lg
                    px-2 py-2 m-2
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                    transition-colors" 
                    type="password" placeholder="Password" value={Password} onChange={passwordChange}/>
                </div>
                <div className="grid grid-cols-2">
                    <input type="checkbox" placeholder="Password" className="justify-right"/>
                    <label>Remember me</label>
                </div>
                <div className="grid justify-center">
                    <button onClick={handleSubmit} className="p-4 rounded-full bg-orange-500 hover:bg-blue-400 border-4 border-blue-500 hover:border-blue-500 hover:text-white-500">Sign In </button>
                </div>
            </form>
            
            
        </div>
    )
}
export default Login;