import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom"

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import data
import { ourServices } from "../data";

function ServicesSlider() {
  return (
    <Swiper grabCursor= {true} breakpoints= {{
        320: {
            slidesPerView: 1,
            spaceBetween:20,
        }
    }}>
      {ourServices.services.map((service, index) => {
        return <SwiperSlide className="max-w-[256px]" key={index}>
        <Link to={`/service/${service.name.toLowerCase()}`}>
            <div className="relative transition duration-300 hover:scale-75">
              <img src={service.image.type} alt="" />
              <div className="absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize ">
                {service.name}
              </div>
            </div>
          </Link>
        </SwiperSlide>;
      })}
    </Swiper>
  );
}

export default ServicesSlider;
