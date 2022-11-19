import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

  const [ nav, setNav ] = useState(false)

  return (
    <nav className="relative container mx-auto p-6 bg-gradient-to-b from-black via-black to-transparent min-w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl px-4 font-logo text-transparent bg-clip-text bg-gradient-to-bl from-primaryTxt via-primaryTxt to-secondaryTxt">C.Palmer</h1>
        </div>
        <ul className="hidden space-x-6 text-primaryTxt md:flex">
          <li className="cursor-pointer px-2 hover:text-secondaryTxt hover:scale-110">About</li>
          <li className="cursor-pointer px-2 hover:text-secondaryTxt hover:scale-110">Experience</li>
          <li className="cursor-pointer px-2 hover:text-secondaryTxt hover:scale-110">Projects</li>
          <li className="cursor-pointer px-2 hover:text-secondaryTxt hover:scale-110">Contact</li>
        </ul>
        <a href="./" className="hidden md:block p-3 px-6 pt-2 text-secondaryTxt border-2 border-primaryTxt hover:scale-105 hover:border-contrast duration-300 rounded-lg">Résumé</a>

        {/* Hamburger button for mobile screens */}
        <div onClick={ () => setNav(!nav) } className="cursor-pointer text-primaryTxt md:hidden">
          { nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
        </div>
      </div>
    </nav>
  )
}

export default Navbar