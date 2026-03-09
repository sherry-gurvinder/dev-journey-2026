// --- WEEK 1: ASYNC / AWAIT ---

// 1. This is a fake database that takes exactly 2 seconds to reply
const fetchUserBankData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ accountName: "SG", balance: 250000, status: "Cleared" });
      }, 2000); 
    });
  };
  
  // 2. The Senior way to handle time
  const loginUser = async () => {
    console.log("1. Requesting bank data...");
    
    // The 'await' keyword pauses THIS function, but lets the rest of the app keep running!
    const data = await fetchUserBankData(); 
    console.log(`3. Data received! Welcome ${data.accountName}. Balance: $${data.balance}`);
  };
  
  // 3. Run the function
  loginUser();
  console.log("2. Loading the website UI while we wait for the database...");






  


