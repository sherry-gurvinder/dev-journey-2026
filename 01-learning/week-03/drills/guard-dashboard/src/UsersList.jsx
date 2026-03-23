import {useState,useEffect} from "react";


const UserList = () =>
{
    const [users,setusers] = useState([]);
    const [loading,setloading] = useState(true);
    const [error,seterror] =useState("");
   useEffect(() => {
        const fetchData = async () => {
            // 2. Wrap the dangerous stuff in a try block
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                
                // I BROKE THE URL ON PURPOSE ("users123")
                const response = await fetch('https://jsonplaceholder.typicode.com/users123'); 
                
                // Advanced check: if the server says "404 Not Found", throw an error manually!
                if (!response.ok) {
                    throw new Error("Could not fetch the data!");
                }

                const result = await response.json();
                setusers(result);
                setloading(false);

            } catch (err) {
                // 3. Catch the fire!
                seterror(err.message); // Save the error message
                setloading(false);     // Turn off the loading screen
            }
        }
        
        fetchData();
    }, []);
    
    return(
        <>  
            <h1>Fetch User from List</h1>
            {loading && <h1>Loading...... Please Wait!</h1>}
            
            {/* 4. Show the error if it exists! */}
            {error && <h2 style={{color: "red"}}>{error}</h2>}
            
            {!loading && !error && (
                users.map((user) => (
                    <h4 key={user.id}>{user.name}</h4>
                ))
            )}
        </>
    )
}

export default UserList;