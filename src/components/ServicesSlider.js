import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper modules
import SwiperCore, { Pagination } from "swiper";

// Import data
import { ourServices } from "../data";

// Initialize Swiper modules
SwiperCore.use([Pagination]);

function ServicesSlider() {
  return (
    <Swiper
      grabCursor={true}
      pagination={{ clickable: true }} // Enable pagination
      breakpoints={{
        320: {
          slidesPerView: "auto", // Display all slides
          centeredSlides: true, // Centered slides
          spaceBetween: 20,
        },
      }}
    >
      {ourServices.services.map((service, index) => {
        return (
          <SwiperSlide className="max-w-[256px]" key={index}>
            <Link to={`/service/${service.name.toLowerCase()}`}>
              <div className="relative transition duration-300 hover:scale-75">
                <img src={service.image.type} alt="" />
                <div className="absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize ">
                  {service.name}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ServicesSlider;
