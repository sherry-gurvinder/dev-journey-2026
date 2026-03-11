import {useState} from 'react';
const IncidentBox = () =>
{
    const [notes, setNotes] = useState("Final Result");
    const getPromt = () =>
    {
        setNotes(textPromt.value);
    }
    return(
        <div>
        <h1> Welcome to Security Help Centre</h1>
         <p>Type Below </p>
       <textarea onChange={getPromt} id="textPromt">  </textarea>
       <p id="resultDisplay"> {notes}</p>
    </div>
    
    )
}
export default IncidentBox