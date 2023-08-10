import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projectsData } from '../data';

import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import SwiperCore, { Navigation } from 'swiper'; // Import Swiper modules
SwiperCore.use([Navigation]); // Initialize Navigation module

function ProjectSlider() {


  return (
    <div className="flex justify-center">
      <Swiper
        grabCursor={true}
        navigation={true} // Enable navigation arrows
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 }, // Adjust spaceBetween as needed
          // Add more breakpoints if necessary
        }}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <div
                className="relative flex flex-col items-center justify-center shadow-md rounded-md p-4"
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="w-40 h-40 relative z-10">
                  <img
                    src={project.image}
                    alt=""

                  />
                </div>
                <div className="mt-4 relative z-10">
                  <h2 className="text-lg font-semibold text-black">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
