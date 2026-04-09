import { useState } from "react"
export const Navbar = ({pagetheme,changeTheme,isdark}) =>
{
    return(
        <nav className={`flex p-4 m-4 ${pagetheme}`}>
          <img className="border-1 border-blue-700 p-4 m-4 " alt="Logo"/>
          <h1 className="border-1 border-red-700 p-4 m-4 items-end">Weather Check </h1>
          <button className="border-1 border-blue-700 p-4 m-4 bg-blue-700 p-4 m-4 text-white flex justify-end" onClick={changeTheme}> { isdark ?  "Light Mode" :"Dark Mode"}</button>
        </nav>
    );
}
