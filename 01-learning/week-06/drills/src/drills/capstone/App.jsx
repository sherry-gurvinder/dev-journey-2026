import Home from "./pages/Home";
import Settings from "./pages/Settings"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";
import {BrowserRouter , Routes , Route, NavLink} from "react-router-dom";

const App = () =>
{
    return(
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* ... more routes */}
      </Routes>
    </BrowserRouter>)
}



export default App;