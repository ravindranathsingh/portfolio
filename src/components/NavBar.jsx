import React, { useState } from 'react'
import links from '../helpers/links'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [ nav, setNav ] = useState(false)
  return (
    <div className="flex justify-between items-center w-11/12 h-20 p-10 my-10 mx-12 text-black bg-white rounded-lg shadow-sm fixed">

      <div>
        {/* <h1 className="text-5xl font-signature ml-2 font-bold cursor-default">Ravi</h1> */}
      </div>

      <ul className="hidden md:flex">
       {links.map(({id, link}) => (
        <li key={id} className="px-4 capitalize font-medium text-gray-500 cursor-pointer hover:scale-105 duration-200">
          {link}
        </li>
       ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-200 via-blue-300 to-indigo-500">
          {links.map(({id, link}) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
          {link}
        </li>
       ))}
        </ul>
      )}

    </div>
  )
}

export default NavBar