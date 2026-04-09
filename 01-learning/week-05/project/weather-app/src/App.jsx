import { useState } from "react";
import {Bottom} from './component/Bottom';
import {Header} from './component/Header';
import {Navbar} from './component/Navbar';




const App = () =>
{
 
    const [isdark,setisdark] = useState(false)
    const theme = {
        light : "bg-gray-100 ",
        dark : " bg-black text-white "
    }
    const [pagetheme,setpagetheme] = useState(theme.light);
    const changeTheme =(e) =>
    {
           setisdark(!isdark);
           setpagetheme(isdark?theme.light:theme.dark)
    }
  return(
    <div className="grid ">
      <Navbar pagetheme={pagetheme} changeTheme={changeTheme}  isdark={isdark}  />
      <Header pagetheme={pagetheme} changeTheme={changeTheme}  isdark={isdark} />
      <Bottom pagetheme={pagetheme} changeTheme={changeTheme}  isdark={isdark} />
       
    </div>
  )
}
export default App;