import { useState } from "react";
import {createPost} from "../services/api"
import { useNavigate } from "react-router-dom";

const CreatePost = () =>
{   const [formData,setformData] = useState({title:"",body:""});
    const [isLoading, setisLoading] = useState(false);
    const [error,seterror] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async(e) =>
    {
        e.preventDefault();
        console.log("SUBMIT");
         setisLoading(true);
        try {
             await createPost(formData);
             navigate("/users");
        } catch (error) {
            seterror(true)
        }
        finally
        {
             setisLoading(false);
             setformData({title:"",body:""});
        }

    }
    return(
        <div>
            <h1>
                Create Post
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="TITLE" name="title" onChange={(e)=>setformData({...formData, title: e.target.value})} value={formData.title} /> <hr/>
                <input type="text" placeholder="body" name="body" onChange={(e)=>setformData({...formData,body:e.target.value})} value={formData.body}/>  <hr/>
                <input type="submit" value={isLoading ? "Saving..." : "Submit"}/>
            </form>
        </div>
    )
}
export default CreatePost;