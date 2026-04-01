import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import CreatePost from "./pages/CreatePost";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
const App = () =>
{
  return(
    <div>
      <h1> API Dashboard</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/users/:id" element={<UserDetail/>}/>
        <Route path="/create" element={<CreatePost/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}
export default App;