import React from 'react'
import Home from '../components/Home';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from "../components/About"


function LandingPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-[fdf0d5]">
        
   
    <Home/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
  
    
</div>
  )
}

export default LandingPage