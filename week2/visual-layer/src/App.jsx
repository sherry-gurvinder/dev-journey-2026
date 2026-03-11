import ProfileCard from "./ProfileCard";
import IncidentBox from "./IncidentBox";
const App = () =>
{ 

  const operativeData = [
    { id: 1, name: "SG", role: "Mid-Level Full Stack", days: 240 },
    { id: 2, name: "Alice", role: "Senior Architect", days: 90 },
    { id: 3, name: "John", role: "Database Admin", days: 400 },
    { id: 4, name: "Sarah", role: "UI Designer", days: 120 }
  ];


  // 2. The UI Zone (JSX)
  return (
    <div>
      <h1>Control Panel: Online</h1>
      <IncidentBox/>
      <hr />
      {
      operativeData.map((currentItem) =>{
         return(  
         <ProfileCard 
         key={currentItem.id} 
         role={currentItem.role} 
         name={currentItem.name}
         days={currentItem.days} />
         );
      })
    }
    
     
    
    </div>
  );
};

export default App;