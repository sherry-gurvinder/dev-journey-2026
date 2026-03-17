import { useEffect, useState } from "react";

const Dashboard = () => {
    const [incidentRawData, setincidentRawData] = useState({ Gname: "", badge: "", supervisor: "", shift: "", incidentdrat: "" });
    const [error, seterror] = useState("");
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
        }
    }
    const saveDraft = (e) => {
        localStorage.setItem("formdraft", JSON.stringify(incidentRawData));
    }
    const clearDraft = (e) => {
        localStorage.removeItem("formdraft");
        setincidentRawData({ Gname: "", badge: "", supervisor: "", shift: "", incidentdrat: "" });
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
                <input type="button" value="Clear" onClick={clearDraft} />
                <input type="button" value="Save Draft" onClick={saveDraft} />
                <input type="submit" value="Generate" />
            </form>
        </>
    )
}
export default Dashboard;