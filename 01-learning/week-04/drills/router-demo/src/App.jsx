import { Routes,Route,Link } from "react-router-dom";
import CreatePost from './pages/CreatePost'
import Dashboard from './pages/Dashboard'
import UserList from './pages/UserList'
function App() {
  return (
    <div>
      <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/createpost">Create Post</Link>
      <Link to="/userlist">User List</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="createpost" element={<CreatePost/>}></Route>
        <Route path="userlist" element={<UserList/>}></Route>
      </Routes>
      <h1>Week 4 - React Router</h1>
    </div>
  );
}

export default App;