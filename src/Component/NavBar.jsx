// import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

  return (
    <div>
     <nav className= "navbar bg-green-700/50  z-20 top--0 start-0 w-full border-default border-green-400">
      <div className="max-w-screen-xl flex flex wrap items-center justify-between mx-auto p-5">
        <button 
          onClick={() => setIsOpen(!isOpen)} // Toggle the state
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-green-600 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Nav Links - Toggled by isOpen state on mobile */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-green-900 md:bg-transparent md:flex-row md:space-x-8 md:mt-0">
            <li>
              <NavLink 
                to="/" 
                className={({isActive}) => `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-white' : 'text-green-200 hover:text-white'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/AddGamePage" 
                className={({isActive}) => `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-white' : 'text-green-200 hover:text-white'}`}
              >
                Add Game
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/MyGames" 
                className={({isActive}) => `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-white' : 'text-green-200 hover:text-white'}`}
              >
                My Games
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
)
}
