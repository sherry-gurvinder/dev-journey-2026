import {useState,useEffect} from "react";
import {getUserList} from "./services/api"

const UserList = () =>
{
    const [users,setusers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading,setloading] = useState(true);
    const [error,seterror] =useState("");
    const retry = () =>
    {
        console.log("Retry Function");
        fetchData();
        
    }
    const fetchData = async () => {
            // 2. Wrap the dangerous stuff in a try block
            seterror("");
        setloading(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                const result = await getUserList();
                setusers(result);
                setloading(false);

            } catch (err) {
                // 3. Catch the fire!
                seterror(err.message); // Save the error message
                setloading(false);     // Turn off the loading screen
            }
        }
   useEffect(() => {
        
        
        fetchData();
    }, []);

    const filteredUsers  = users.filter((user)=>
    
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    return(
        <>  
            <h1>Fetch User from List</h1>
            {loading && <h1>Loading...... Please Wait!</h1>}
            
            {/* 4. Show the error if it exists! */}
            {error && <h2 style={{color: "red"}}>{error}</h2>}
            <button onClick={retry}> Retry</button>
            <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            {!loading && !error && (
                filteredUsers.map((user) => (
                    <h4 key={user.id}>{user.name}</h4>
                ))
            )}
            {filteredUsers.length === 0 && <p>No users match your search.</p>}
        </>
    )
}

export default UserList;