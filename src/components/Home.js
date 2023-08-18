import React from "react";
import { useState, useEffect } from "react";
import { home } from "../data";
import Stats from "./Stats";
import { Link } from "react-scroll";
import "../Home.css";

function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Array of background images defined in your Tailwind CSS configuration
  const backgroundImages = ["bg-home", "bg-home2"];

  // Function to update the background image index
  const updateBackgroundImage = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  // Set interval to change the background image every 5 seconds (adjust as needed)
  useEffect(() => {
    const interval = setInterval(updateBackgroundImage, 8000);
    return () => clearInterval(interval);
  });

  // Get the current background image class name
  const currentBgClass = backgroundImages[currentBgIndex];

  // import data
  const { title, subtitle, buttonText } = home;

  return (
    <section
      name="home"
      className={`h-[638px] w-full ${currentBgClass} bg-right bg-cover bg-no-repeat text-white pt-[120px] pb-[140px] relative mb-12 lg:bg-center lg:mb-4 transition-all duration-1000`}
    >
      <div className="container mx-auto text-center">
      <div>
      <div className="border-t-8 border-x-4 w-[50%] h-12 m-auto"></div>
      <h1 className="text-2xl mx-auto font-semibold mt-[15px] mb-[15px] lg:text-[48px] leading-tight lg:max-w-[888px] text-shadow-lg fadeInScale">
          {title}
        </h1>
        <div className="fadeInScale flex flex-col ">
          {" "}
          <h2 className="mb-[10px] max-w-[627px] mx-auto lg:mb-[40px] lg:text-lg text-shadow-md">
            {subtitle}
          </h2>
          <Link to="projects" smooth duration={500}>
            <button className="bg-[rgba(225,225,225,0.4)] hover:bg-[rgba(225,225,225,0.5)] px-[35px] py-[9px] text-lg rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[12px] lg:mb-[5px] fadeInUp">
              {buttonText}
            </button>
          </Link>
        </div>
        <div className="border-b-8 border-x-4 w-[50%] h-12 center m-auto mb-10 "></div>
      </div>
        

        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
}

export default Home;
