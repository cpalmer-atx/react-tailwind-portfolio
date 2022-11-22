import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
// import Experience from './components/Experience'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </>
  )
}

export default App
