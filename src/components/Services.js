import React from "react";
import { newInStore } from "../data";
import ServicesSlider from "./ServicesSlider";

function Services() {
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* [text] */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-y-6 md:gap-y-12 mb-6 lg:mb-0 lg:items-baseline lg:gap-x-6 lg:max-w-[245px] lg:mt-[30px] lg:mb-[90px]">
            <h2 className="title text-2xl lg:text-4xl">{title}</h2>
            <p className="text-base lg:text-lg max-w-[360px]">{subtitle}</p>
            <div className="flex items-center mt-6 lg:mt-0">
              <a
                className="hover:border-b border-primary items-center font-medium transition-all"
                href="#"
              >
                {link}
              </a>
              <div className="text-3xl ml-2">{icon}</div>
            </div>
          </div>
          {/* {slider} */}
          <div className="flex-1 max-w-[600px] xl:max-w-[990px]">
            <ServicesSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
