const getUserData = () =>{
return new Promise((resolve)=>{
    setTimeout(()=>
    {
        resolve([
            { user: "SG", active: true, posts: 12 },
            { user: "John", active: false, posts: 4 },
            { user: "Alice", active: true, posts: 20 }
          ]);
    },1000)
})}
const analyzeEngagement = async () =>{
    const userData =  await getUserData();
    console.log("User Data: ", userData);
    const activeUser = userData.filter((currentItem)=>
    {
        return currentItem.active===true;
    });
    console.log("Active Users Are: ", activeUser);

    const totalPostByActiveUser = activeUser.reduce((total,currentItem)=>
    {
        return total+currentItem.posts;
    },0)
    console.log("Total Post By Active User: "+ totalPostByActiveUser);
}
analyzeEngagement();