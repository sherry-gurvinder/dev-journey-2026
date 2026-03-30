import { useState } from "react";
// 1. Added curly braces for the named import!
import { createPost } from "./services/api"; 

const CreatePost = () => {
    const [title, settitle] = useState("");
    const [postSuccess, setpostSuccess] = useState(false);
    const [postFail,setpostFail] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // 2. Added 'await' to pause until the Waiter comes back with the receipt
            const response = await createPost(title);
            console.log("RESPONSE", response);
            // 3. If the Waiter is successful, update the UI!
            settitle(""); // Clear the input box
            setpostFail(false);
            setpostSuccess(true);
            
            
        } catch (error) {
            // 4. Catch any errors thrown by our handleResponse helper in api.js
            console.error("Failed to create post:", error.message);
            setpostFail(true);
             setpostSuccess(false);
        }
    }

    return(
        <>
            <h1>Create Post</h1>
            {/* Tweaked the HTML slightly so you don't have a <p> inside an <h2> */}
            {postSuccess && <h2 style={{ color: "green" }}>Post created!</h2>}
            {postFail && <h2 style={{ color: "red" }}>Post Can not create!</h2>}
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    value={title}  
                    onChange={(e) => settitle(e.target.value)} 
                    placeholder="Title"
                />
                <hr/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default CreatePost;