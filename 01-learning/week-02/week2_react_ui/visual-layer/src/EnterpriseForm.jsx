
import {useState , useEffect} from 'react';
const EnterpriseForm = () =>
{
    const [formData,setformData] = useState({guardName:"",zone:""});
    const [error,setError] = useState("");

    useEffect(()=>
    {
        const savedDraft = localStorage.getItem("guardDraft");
       if (savedDraft!==null)
        {    
            const unwrappedData = JSON.parse(savedDraft);
           setformData(unwrappedData);
        }
       
    },[]);
    const handleChange = (e)=>
    {   
        setformData({...formData,[e.target.name]:e.target.value});
    }
    const hanleSubmit = (e) =>
    {
        e.preventDefault();
        if(formData.guardName==="")
        {   
            setError("Alret: Guard Name cannot be blank!");
            return;
        }
        if(formData.zone==="")
        {   
            setError("Alret: Zone cannot be blank!");
            return;
        }
        setError("");
        alert("Submit Successfully!");
        setformData({guardName:"",zone:""});
    }

   const handleSaveDraft = () => {
        // 1. Shrink-wrap the living React state (formData) into plain text
        const shrinkWrappedData = JSON.stringify(formData);
        
        // 2. Save it to the notebook. ("guardDraft" is the label, shrinkWrappedData is the file)
        localStorage.setItem("guardDraft", shrinkWrappedData);
        
        alert("Draft Saved! 💾");
    }

    const handleClearDraft = () => {
        // 1. Tell the browser exactly which label to delete
        localStorage.removeItem("guardDraft");
        
        // 2. Wipe the React state to clear the screen
        setformData({ guardName: "", zone: "" });
        
        alert("Draft Cleared! 🗑️");
    }

    return(
        <div>
            <h1>Guard Form</h1>
            <form name="GuardData">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input placeholder="Guard Name" name="guardName" onChange={handleChange} value={formData.guardName}/><hr/>
                <input placeholder="Zone" name="zone" onChange={handleChange} value={formData.zone}/><hr/>  
                <button type="submit" onClick={hanleSubmit}>Submit</button>   
                <button type="button" onClick={handleSaveDraft}>Save Draft</button>
                <button type="button" onClick={handleClearDraft}>Clear Draft</button>
            </form>
        </div>
        
    )
}
export default EnterpriseForm;