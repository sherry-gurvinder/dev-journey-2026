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
       
    
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
           <div className="bg-white w-96 p-6 rounded-4xl shadow-lg">
            <p className="font-bold text-xl text-gray-900">Name:</p>
            <p className="text-sm text-gray-500">Job Title:</p>
            <hr/>
            <p className="text-sm text-gray-500 uppercase">Email:</p>
            <p className="text-base text-gray-900">Value</p>
            <button className="bg-blue-600 w-full py-2 rounded-lg text-white font-medium mt-4 hover:bg-blue-700 transition-colors duration-200">
                View Profile
            </button>
          </div>
        </div>
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