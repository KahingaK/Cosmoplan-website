import React from "react";
import { features } from "../data";


function About() {
  const { title, subtitle, image,  items } = features;

 

  return (
    <section className="section ">
    
      <div className="container mx-auto  ">
      
     
     
        {/* {image} */}
        <div className="flex flex-col lg:flex-row lg:gap-x-10 pt-8">
        <div className="flex-1 order-2 lg:order-1">
            <img src={image.type} alt="" className="w-full h-auto rounded-3xl " />
          </div>
         
          
          {/* {text} */}
          <div className="flex-1 flex flex-col justify-end order-1 lg:order-2 mt-6 lg:mt-0">
            <h2 className="title text-2xl lg:text-4xl mb-4">{title}</h2>
            <p className="subtitle text-base lg:text-lg mb-6">{subtitle}</p>
            {/* {items} */}
            <div>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div className="flex mb-4 lg:mb-6" key={index}>
                    <div className="text-2xl mr-4 lg:text-3xl">{icon}</div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">{title}</h4>
                      <p className="text-sm lg:text-base">{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
