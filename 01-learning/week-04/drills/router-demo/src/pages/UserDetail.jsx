import { useParams } from "react-router-dom"

const UserDetails = () =>
{
    const {id} = useParams();
    return(
        <>
        <h1>User Detail Page</h1>
        <p>User ID from URL: {id}</p>
        </>
    )
}
export default UserDetails;