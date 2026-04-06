import { useState } from "react";
import {Bottom} from './component/Bottom';
import {Header} from './component/Header';
import {Navbar} from './component/Navbar';
const App = () =>
{
  

  return(
    <div className="grid border-1 border-red-700 p-4 m-4 bg-green-100">
      <Navbar/>
      <Header/>
      <Bottom/>
       
    </div>
  )
}
export default App;