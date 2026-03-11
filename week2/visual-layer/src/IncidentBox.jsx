import {useState} from 'react';
const IncidentBox = () =>
{
    const [notes, setNotes] = useState("");
    const [finalReport,setFinalReport] = useState("Final Result");
    const getPromt = (e) =>
    {
        setNotes(e.target.value);
    }
    const handleGenerate =()=>
    {
        setFinalReport(notes);
    }
    return(
        <div>
        <h1> Welcome to Security Help Centre</h1>
         <p>Type Below </p>
       <textarea onChange={getPromt} >  </textarea>
       <p> {notes}</p>
       <button onClick={handleGenerate}>Generate Official Report</button>
       <h3>{finalReport}</h3>
    </div>
    
    )
}
export default IncidentBox