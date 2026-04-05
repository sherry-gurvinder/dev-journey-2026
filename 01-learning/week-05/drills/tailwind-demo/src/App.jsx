import Badge from './components/Badge'
import Button from './components/Button';
import Login from './pages/Login';
const App = () =>
{
  return(   
      <div>
       
        <nav className="bg-gray-900 text-white px-6 py-4">
         <div className="flex justify-between items-center">
           <div >Logo</div>
         <div className="flex gap-6">
         <a href=""> Link 1</a>
          <a href=""> Link 1</a>
          <a href=""> Link 1</a>
         </div>
          </div>
        </nav>
       
        <Login/>
       

        <div className="bg-white-900 ">
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