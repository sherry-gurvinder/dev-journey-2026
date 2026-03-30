const handleResponse = async (res) =>
{
    console.log("Response:*************", res)
    if(!res.ok)
    {
        throw new Error(`Server Error`)
    }
    return await res.json();
}
 export const createPost = async (titleData) =>
{
    console.log("Call to API")
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify({title:titleData})
    })
    console.log("call to handle response");
     return await handleResponse(response);
}
export const getUserList = async() =>
{   
     console.log("Call to API Get User List")
    const response = await fetch("https://jsonplaceholder.typicode.com/usercs");
    return await handleResponse(response);
}
