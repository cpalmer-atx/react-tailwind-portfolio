import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import resume from "../assets/resume.pdf"

const Navbar = () => {

  const [ nav, setNav ] = useState(false)

  const links = [ 'about', 'skills', 'projects', 'contact' ]

  const styles = {
    navComponent: 'fixed z-20 container mx-auto p-6 max-w-full bg-gradient-to-tl from-primary via-primary to-secondary',
    navContainer: 'flex items-center mx-auto justify-between max-w-5xl',
    desktopLogo: 'text-4xl px-4 font-logo cursor-pointer hover:scale-105 duration-300 text-transparent bg-clip-text bg-gradient-to-bl from-primaryTxt via-primaryTxt to-secondaryTxt',
    desktopLinks: 'hidden space-x-6 text-primaryTxt md:flex',
    desktopLink: 'cursor-pointer px-2 hover:text-secondaryTxt hover:scale-110',
    desktopBtn: 'hidden md:block p-3 px-6 pt-2 text-secondaryTxt border-2 border-primaryTxt hover:scale-105 hover:border-contrast duration-300 rounded-lg',
    mobileNavBtn: 'cursor-pointer pr-2 z-20 text-primaryTxt md:hidden',
    mobileContainer: 'flex flex-col md:hidden z-10 justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-primary via-primary to-secondary text-primaryTxt',
    mobileLogo: 'text-4xl py-3 my-4 px-10 border-b-2 cursor-pointer hover:text-secondaryTxt border-primaryTxt font-logo text-transparent bg-clip-text bg-gradient-to-bl from-primaryTxt via-primaryTxt to-secondaryTxt',
    mobileLinks: 'cursor-pointer py-4 text-2xl hover:text-secondaryTxt hover:scale-110',
    mobileBtn: 'p-3 px-16 pt-2 mt-8 text-secondaryTxt border-2 border-primaryTxt hover:scale-105 hover:border-contrast duration-300 rounded-lg'
  }
  const { navComponent, navContainer, desktopLogo, desktopLinks, desktopLink, desktopBtn, mobileNavBtn, mobileContainer, mobileLogo, mobileLinks, mobileBtn } = styles;

  return (
    // <div className="relative">
    <nav className={navComponent}>
      <div className={navContainer}>
        <div>
          <Link to='home' smooth duration={700}>
            <h1 className={desktopLogo}>CP</h1>
          </Link>
        </div>
        <ul className={desktopLinks}>
          {links.map( (link) => (
            <li key={link} className={desktopLink}>
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        <a 
          href={resume} 
          download={true} 
          target='_blank' 
          rel="noreferrer" 
          className={desktopBtn}
          >Résumé
        </a>

        {/* Hamburger button for mobile screens */}
        <div onClick={ () => setNav(!nav) } className={mobileNavBtn}>
          { nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
        </div>

        {/* Mobile menu */}
        { nav && (
          <ul className={mobileContainer}>
            <Link to='home' onClick={() => setNav(!nav)} smooth duration={700}>
              <h1 className={mobileLogo}>CP</h1>
            </Link>
            {links.map( (link) => (
              <li key={link} className={mobileLinks}>
                <Link to={link} onClick={() => setNav(!nav)} smooth duration={700}>{link}</Link>
              </li>
            ))}
            <a 
              href={resume} 
              download={true} 
              target='_blank' 
              rel="noreferrer" 
              className={mobileBtn}
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