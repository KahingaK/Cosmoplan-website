import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'; 
import { projectsData } from "../data";

function ProjectSlider() {
  const [activeCategory, setActiveCategory] = useState(projectsData[0].title);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const activeCategoryData = projectsData.find((category) => category.title === activeCategory);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <h2 className="text-lg font-semibold text-left my-4">
          {activeCategory}
        </h2>
         <div className="mt-4">
        {projectsData.map((category) => (
          <button
            key={category.title}
            className={`mx-2 px-4 py-2 rounded-md ${
              activeCategory === category.title ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => handleCategoryChange(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>
        <Swiper
          grabCursor={true}
          pagination={{ clickable: true }}
          effect="fade"
          loop={true}
          loopedSlides={activeCategoryData.projects.length}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={activeCategoryData.projects.length}
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 20,
            },
          }}
        >
          {activeCategoryData.projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Link to={`/project/${activeCategory.toLowerCase()}/${index}`}>
                <div className="">
                  <div
                    className="relative flex flex-col items-center justify-center shadow-md rounded-md p-4"
                    style={{
                      backgroundImage: `url('${project.images[0]}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="w-40 h-40 relative z-10">
                      <img src={project.images[0]} alt="" />
                    </div>
                    <div className="mt-4 relative z-10">
                      <h2 className="text-lg font-semibold mb-4 text-black">
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
     
    </div>
  );
}

export default ProjectSlider;
