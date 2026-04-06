export const Navbar = () =>
{
    return(
        <nav className="flex border-1 border-blue-700 grid-cols-2 p-4 m-4 bg-blue-100">
          <img className="border-1 border-blue-700 p-4 m-4 " alt="Logo"/>
          <h1 className="border-1 border-red-700 p-4 m-4 items-end">Weather Check</h1>
          <button className="border-1 border-blue-700 p-4 m-4 bg-blue-700 p-4 m-4 text-white flex justify-end"> Dark Mode / Light Mode</button>
        </nav>
    );
}
