 // --- WEEK 1: ARRAY METHODS (.map) ---

 const bootcampWeeks = [1, 2, 3, 4];

 const printArray = bootcampWeeks.map((currentItem)=>{
     return `week ${currentItem}`;
 });
 
 console.log(printArray);
 
 const totalWeeks = bootcampWeeks.reduce((snowball, currentItem) => {
     return snowball + currentItem; 
   }, 0);
   
   console.log("FINAL TOTAL:", totalWeeks);
 
   const weekFilter = bootcampWeeks.filter((currentItem) => {
     // This is pure boolean! It evaluates to either TRUE or FALSE.
     return currentItem > 2; 
   });
   
   console.log("FILTERED WEEKS (Greater than 2):", weekFilter);