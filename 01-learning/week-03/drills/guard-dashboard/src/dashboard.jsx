import { useEffect, useState } from "react";
import GuardCard from './GuardCard';
const Dashboard = () => {
    const [incidentRawData, setincidentRawData] = useState({ Gname: "", badge: "", supervisor: "", shift: "", incidentdrat: "" });
    const [error, seterror] = useState("");
    const [roster, setRoster] = useState([]);
    const formData = (e) => {
        setincidentRawData({
            ...incidentRawData, [e.target.name]: e.target.value
        });
    }
    useEffect(()=>
    {
        const formatdraft =JSON.parse(localStorage.getItem("formdraft"));
        if ( formatdraft!=null) {
            // 3. Drop the whole box in (no spread operator)
            setincidentRawData(formatdraft);
        }
    },[]);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(incidentRawData.Gname);
        if (incidentRawData.Gname == "") {
            seterror("GuardName can not empty");
            return;
        }

        setRoster([...roster,incidentRawData]);
        alert("SAVE USER")
        resetForm();
    }
    const saveDraft = (e) => {
        localStorage.setItem("formdraft", JSON.stringify(incidentRawData));
    }
    const clearDraft = (e) => {
        localStorage.removeItem("formdraft");
        setincidentRawData({ Gname: "", badge: "", supervisor: "", shift: "", incidentdrat: "" });
    }
    const resetForm = () =>
    {   
         
        setincidentRawData({ Gname: "", badge: "", supervisor: "", shift: "", incidentdrat: "" })
    }
    const deleteGuard = (data) =>
    {

        const updateRoster = roster.filter((current,index)=>
        {
            return index!== data;
            
        })
        setRoster(updateRoster);


    }
    return (
        <>
            <h2>Incident Report Assistance</h2>
            <form onSubmit={handleSubmit} name="incidentRawData">
                {error && <h3><p>{error}</p></h3>}
                <input type="text" placeholder="Guard Name" name="Gname" value={incidentRawData.Gname} onChange={formData} /><hr />
                <input type="text" placeholder="Badge No" name="badge" value={incidentRawData.badge} onChange={formData} /><hr />
                <input type="text" placeholder="Supervisor Name" name="supervisor" value={incidentRawData.supervisor} onChange={formData} /><hr />
                <select name="shift" value={incidentRawData.shift} onChange={formData}>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Night</option>
                </select><hr />
                <textarea cols="15" rows="10" name="incidentdrat" value={incidentRawData.incidentdrat} onChange={formData} placeholder="Just enter What you know? ">
                </textarea>
                <hr />
                <input type="button" value="Clear Draft" onClick={clearDraft} />
                <input type="button" value="Save Draft" onClick={saveDraft} />
                 <input type="button" value="Reset" onClick={resetForm} />
                <input type="submit" value="Generate" />
            </form>
           {/* The Roster Assembly Line */}
            <div style={{ marginTop: "30px" }}>
               
                <h3>Active Guard Roster ({roster.length})</h3>
                
                {roster.map((guard, index) => (
                  
                    <GuardCard 
                        key={index} /* React requires a unique key for every item in a list */
                        name={guard.Gname} 
                        badge={guard.badge} 
                        id={index}             // 1. We pass down the ID so the employee knows it //
                        removeGuard={deleteGuard}   // 2. THE STICKY NOTE! We pass the function down and call it 'remove' 
                    />
                ))}
            </div>
           
        </>
    )
}
export default Dashboard;