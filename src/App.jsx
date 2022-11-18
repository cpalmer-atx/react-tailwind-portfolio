import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-primary via-primary to-secondary text-primaryTxt'>
      <Navbar />
      {/* <Home />
      <About />
      <Experience />
      <Projects />
      <Contact /> */}
    </div>
  )
}

export default App
