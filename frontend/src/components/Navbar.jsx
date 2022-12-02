import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import resume from "../assets/resume.pdf"

const Navbar = () => {

  const [ nav, setNav ] = useState(false)
  const links = [
    'about', 'skills', 'projects', 'contact'
  ]

  return (
    // <div className="relative">
    <nav className="fixed z-20 container mx-auto p-6 max-w-full bg-gradient-to-tl from-primary via-primary to-secondary">
      <div className="flex items-center mx-auto justify-between max-w-5xl">
        <div>
          <Link to='home' smooth duration={700}>
            <h1 className="text-4xl px-4 font-logo cursor-pointer hover:scale-105 duration-300 text-transparent bg-clip-text bg-gradient-to-bl from-primaryTxt via-primaryTxt to-secondaryTxt">CP</h1>
          </Link>
        </div>
        <ul className="hidden space-x-6 text-primaryTxt md:flex">
          {links.map( (link) => (
            <li key={link} className="cursor-pointer px-2 hover:text-secondaryTxt hover:scale-110">
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        <a 
          href={resume} 
          download={true} 
          target='_blank' 
          rel="noreferrer" 
          className="hidden md:block p-3 px-6 pt-2 text-secondaryTxt border-2 border-primaryTxt hover:scale-105 hover:border-contrast duration-300 rounded-lg"
          >Résumé
        </a>

        {/* Hamburger button for mobile screens */}
        <div onClick={ () => setNav(!nav) } className="cursor-pointer pr-2 z-20 text-primaryTxt md:hidden">
          { nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
        </div>

        {/* Mobile menu */}
        { nav && (
          <ul className="flex flex-col md:hidden z-10 justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-primary via-primary to-secondary text-primaryTxt">
            <Link to='home' onClick={() => setNav(!nav)} smooth duration={700}>
              <h1 className="text-4xl py-3 my-4 px-10 border-b-2 cursor-pointer hover:text-secondaryTxt border-primaryTxt font-logo text-transparent bg-clip-text bg-gradient-to-bl from-primaryTxt via-primaryTxt to-secondaryTxt">CP</h1>
            </Link>
            {links.map( (link) => (
              <li key={link} className="cursor-pointer py-4 text-2xl hover:text-secondaryTxt hover:scale-110">
                <Link to={link} onClick={() => setNav(!nav)} smooth duration={700}>{link}</Link>
              </li>
            ))}
            <a 
              href={resume} 
              download={true} 
              target='_blank' 
              rel="noreferrer" 
              className="p-3 px-16 pt-2 mt-8 text-secondaryTxt border-2 border-primaryTxt hover:scale-105 hover:border-contrast duration-300 rounded-lg"
              >Résumé
            </a>
          </ul> 
        )}
      </div>
    </nav>
    // </div>
  )
}

export default Navbar