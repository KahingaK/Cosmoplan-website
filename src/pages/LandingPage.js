import React from 'react'
import Home from '../components/Home';
import Services from '../components/Services';
import Projects from '../components/Projects';


function LandingPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
        
   
    <Home/>
    <Services/>
    <Projects/>
    
    
</div>
  )
}

export default LandingPage