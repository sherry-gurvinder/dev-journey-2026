const ProfileCard = () =>
{
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
           <div className="bg-white w-96 p-6 rounded-4xl shadow-lg">
            <p className="font-bold text-xl text-gray-900">Name:</p>
            <p className="text-sm text-gray-500">Job Title:</p>
            <hr/>
            <p className="text-sm text-gray-500 uppercase">Email:</p>
            <p className="text-base text-gray-900">Value</p>
             <div className="flex gap-2 mt-2">
              <Badge text="Active" color="green" />
              <Badge text="Pending" color="blue" />
              <Badge text="Inactive" color="red" />
            </div>
            <div className="flex gap-2">
              <Button variant="primary">Save</Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="danger">Delete</Button>
            </div>
            <button className="bg-blue-600 w-full py-2 rounded-lg text-white font-medium mt-4 hover:bg-blue-700 transition-colors duration-200">
                View Profile
            </button>
            
          </div>
        </div>
    )
}