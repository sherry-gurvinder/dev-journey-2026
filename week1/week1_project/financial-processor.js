const fetchTransactions =() =>{   
    return new Promise ((resolve)=>
    {
        setTimeout(()=>
        {
            resolve([ 
                { id: 1, type: "deposit", amount: 100 }, 
                { id: 2, type: "withdrawal", amount: 50 }, 
                { id: 3, type: "deposit", amount: 200 } 
              ])
        },1500);
    });
}
const processTransactions = async()=>{
   const accountDetails = await fetchTransactions();
    console.log("accountDetails:", accountDetails);
    const acceountWithDeposit = accountDetails.filter((currentItem)=>
    {
        return currentItem.type==="deposit";
    });
    console.log("acceountWithDeposit: ", acceountWithDeposit)
    const accountTotal = acceountWithDeposit.reduce((sum,currentItem)=>
    {
        return sum+currentItem.amount;
    },0);
    console.log("Total Of Deposit Account: ", accountTotal);
}   
processTransactions();