import React from 'react'
import Navbar from './components/Navbar';
import RainEffect from './components/rain/RainAnimation';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar2 from './components/Navbar2';


const App = () => {
  return (
    <div id='intro' className='overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900 lg:pt-24'>

      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <RainEffect/>
        </div>
      </div>
       <Navbar/>
      <div className='container mx-auto px-8 pt-16 mt-16'>
        <Intro/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
      <Navbar2/>
    </div>
  )
}

export default App;