const BASE_URL = "https://jsonplaceholder.typicode.com";


export const getUsers = async () =>
        {
            const response = await fetch(`${BASE_URL}/users`)
            if(!response.ok)
            {
               throw new Error("Failed to fetch users");
            }
            return await response.json();

        }
export const getUserById = async(id)=>
{
    const response = await fetch(`${BASE_URL}/users/${id}`)
    if(!response.ok)
            {
               throw new Error("Failed to fetch users");
            }
            return await response.json();


}
export const createPost = async (data) =>
{
    const response = await fetch(`${BASE_URL}/posts`,
                {
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(data)
                })

        if(!response.ok)
        {
            throw new Error("Failed to add users");
            
        }
         return await response.json();
    
}