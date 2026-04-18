import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
const useAuth = () =>
{
    const {user,userLogin,userLogout} = useContext(AuthContext);
    return {user,userLogin,userLogout}
}

export default useAuth;