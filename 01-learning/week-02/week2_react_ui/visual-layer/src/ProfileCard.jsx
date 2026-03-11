// 1. We must import useState from React
import { useState } from "react";

const ProfileCard = ({ name = "Classified", role = "Awaiting Orders", days = 0 }) => {
  
  // 2. The State Hook: [currentValue, functionToUpdateIt] = useState(initialValue)
  const [commendations, setCommendations] = useState(0);

  // 3. The Logic to change the state
  const handleAward = () => {
    setCommendations(commendations + 1);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>Operative: {name}</h2>
      <p>Current Mission: {role}</p>
      <p>Timeline: {days} days</p>
      <hr />
      
      {/* 4. The UI Layer */}
      <p>Commendations: {commendations}</p>
      <button onClick={handleAward} style={{ padding: "5px 10px", cursor: "pointer" }}>
        Award Commendation
      </button>
    </div>
  );
};

export default ProfileCard;