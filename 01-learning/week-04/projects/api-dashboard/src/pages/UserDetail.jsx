import { useParams } from "react-router-dom";
const UserDetail = () =>
{
    const {id} = useParams();
   
    return(
        <div>
            <h1>User Details</h1>
            <h2>ID : {id}</h2>
        </div>
    )
}
export default UserDetail;