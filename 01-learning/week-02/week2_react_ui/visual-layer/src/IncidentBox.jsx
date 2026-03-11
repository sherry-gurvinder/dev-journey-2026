import {useState} from 'react';
const IncidentBox = () =>
{
    const [notes, setNotes] = useState("");
    const [finalReport,setFinalReport] = useState("");
    const [floorNumber,setfloorNumber] = useState("");
    const handleGenerate =()=>
    {
        const combinedString = `Location: Floor ${floorNumber} | Details: ${notes}`;
        setFinalReport(combinedString);
         setNotes("");
         setfloorNumber("");
    }
    return(
        <div>
        <h1> Welcome to Security Help Centre</h1>
        <input 
            value={floorNumber}
            placeholder='Floor Number'
            onChange={(e)=>setfloorNumber(e.target.value)}
        ></input>
       <textarea onChange={(e)=> setNotes(e.target.value)}  value={notes}>  </textarea>
       <button onClick={handleGenerate}>Generate Official Report</button>
       { finalReport && ( <>
    <h2>Official Log:</h2> 
    <h3>{finalReport}</h3> 
  </> ) }
    </div>
    
    )
}
export default IncidentBox