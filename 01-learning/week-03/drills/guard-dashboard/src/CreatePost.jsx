
import {useState, useEffect} from "react";
 const CreatePost = () =>
 {
    const [title,settitle] = useState("");
    const handleSubmit = async() =>
    {
        console.log("Title:",title);
        e.preventDefault();
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{ 
            METHOD :    'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ title: title })
        });

        console.log("Response",response);
    }
 

 return(
    <>
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit} method="POST">
        <input type="text" name="title" value={title}  onChange={(e)=>settitle(e.target.value)} placeholder="Title"/><hr/>
        <input type="submit" value="Submit"/>
    </form>
    </>
 )
}
 export default CreatePost;