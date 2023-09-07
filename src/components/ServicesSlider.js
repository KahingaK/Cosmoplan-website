import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination } from 'swiper/modules';
// Import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow'




// Import data
import { ourServices } from "../data";



function ServicesSlider() {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
    {ourServices.services.map((service, index) => {
      return (
        <SwiperSlide className="max-w-[256px]" key={index}>
          <Link to={`/service/${service.name.toLowerCase()}`}>
            <div className="relative transition duration-300 hover:scale-95">
              <img src={service.image.type} alt="" className="rounded-lg"/>
              <div className="absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize text-shadow-md ">
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
