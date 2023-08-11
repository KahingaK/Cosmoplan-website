import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectsData } from "../data";
import {Link} from "react-router-dom"

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

function ProjectSlider() {
  return (
    <div className="flex flex-col items-center">
    {projectsData.map((title) => (
      <div key={title.id} className="w-full">
        <h2 className="text-lg font-semibold text-left  my-4">
          {title.title}
        </h2>
        <Swiper
          grabCursor={true}
          pagination={{ clickable: true }}
          effect="fade"
          loop={true}
          loopedSlides={title.projects.length}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={title.projects.length}
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 20,
            },
          }}
        >
          {title.projects.map((project, index) => (
            <SwiperSlide key={index}>
              {/* Wrap each project with a Link */}
              <Link to={`/project/${title.title.toLowerCase()}/${index}`}>
                <div className="">
                  <div
                    className="relative flex flex-col items-center justify-center shadow-md rounded-md p-4"
                    style={{
                      backgroundImage: `url('${project.images[0]}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="w-40 h-40 relative z-10">
                      <img src={project.images[0]} alt="" />
                    </div>
                    <div className="mt-4 relative z-10">
                      <h2 className="text-lg font-semibold text-black">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    ))}
  </div>
  );
}

export default ProjectSlider;
