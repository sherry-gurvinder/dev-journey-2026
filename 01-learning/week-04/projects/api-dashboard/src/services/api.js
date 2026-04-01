const BASE_URL = "https://jsonplaceholder.typicode.com";


const getUsers = async () =>
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
export default getUsers;