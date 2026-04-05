import Badge from './components/Badge'
import Button from './components/Button';
import Login from './pages/Login';
import { useState } from 'react';
const App = () =>
{
  const [isdarkMode,setisdarkmode] = useState(false);
  const [Theme,setTheme] = useState("bg-blue-100 text-black");

  const color=
  { 
    dark:"bg-gray-900 text-white",
    light:"bg-blue-100 text-black"
  }
  const Changemode = () =>
  {
    setisdarkmode(!isdarkMode);
    const result = !isdarkMode?color['dark']:color['light'];
    setTheme(result);
    console.log(result,"Theme");
    
  }
  return(   
      <div className={Theme}>
        <nav className={`px-6 py-4 ${Theme}`}>
         <div className="flex justify-between items-center">
           <div >Logo</div>
         <div className="flex gap-6">
         <a href=""> Link 1</a>
          <a href=""> Link 1</a>
          <a href=""> Link 1</a>
          <button onClick={Changemode} className={Theme}> {!isdarkMode?"Darkmode":"Lightmode"}

          </button>
         </div>
          </div>
        </nav>
       
        <Login Theme={Theme}/>
       

        <div className={Theme}>
            <div className="grid justify-center p-6">
              <h1 className="text-2xl">Our Services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-6">
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <h1>Title</h1>
                <h3>Descriptions</h3>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-md p-6"><h1>Title</h1>
                <h3>Descriptions</h3></div>
              <div className="bg-gray-100 rounded-lg shadow-md p-6"> <h1>Title</h1>
                <h3>Descriptions</h3></div>
            </div>
        </div>
      </div>      
  )
}
export default App;