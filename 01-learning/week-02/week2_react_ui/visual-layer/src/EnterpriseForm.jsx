
import {useState} from 'react';
const EnterpriseForm = () =>
{
    const [formData,setformData] = useState({guardName:"",zone:""});
    const [error,setError] = useState("");
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
    }
   
    return(
        <div>
            <h1>Guard Form</h1>
            <form name="GuardData">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input placeholder="Guard Name" name="guardName" onChange={handleChange} value={formData.guardName}/><hr/>
                <input placeholder="Zone" name="zone" onChange={handleChange} value={formData.zone}/><hr/>  
                <button type="button" onClick={hanleSubmit}>Submit</button>   
            </form>
        </div>
        
    )
}
export default EnterpriseForm;