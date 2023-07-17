import React from "react";
import { home } from "../data";
import Stats from "./Stats";

function Home() {
// import data
   const {title, subtitle, buttonText} = home

//    import stats component
  return (
   <section className="h-[638px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[120px] pb-[140px] relative mb-12 lg:bg-center lg:mb-28">
  <div className="container mx-auto text-center">
    <h1 className="text-2xl mx-auto font-semibold mb-[50px] lg:text-[48px] leading-tight lg:max-w-[888px] shadow-lg text-shadow-lg">{title}</h1>
    <h2 className="mb-[20px] max-w-[627px] mx-auto lg:mb-[40px] lg:text-lg text-shadow-md box-shadow-md">{subtitle}</h2>

    <button className="bg-[rgba(225,225,225,0.4)] hover:bg-[rgba(225,225,225,0.5)] px-[35px] py-[9px] mb-[60px] text-lg rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[12px] lg:mb-[70px]">{buttonText}</button>
    
    {/* stats */}
    <div><Stats/></div>

  </div>
</section>

  );
}

export default Home;
