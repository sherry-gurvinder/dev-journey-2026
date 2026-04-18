import { createContext, useState } from "react";

// TODO: Create AuthContext using createContext()
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // TODO: Create state with user object (name, email, role, token)
  // Initial value: null (not logged in)
    const [user,setUser] = useState(null);
    const userLogin = (userData) =>
    {
        setUser(userData);
    }
    const userLogout = () =>
    {
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{ user, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    )

  // TODO: Create login function
  // TODO: Create logout function
  
  // TODO: Return Provider with value
};

// TODO: Export both
export {AuthContext,AuthProvider}