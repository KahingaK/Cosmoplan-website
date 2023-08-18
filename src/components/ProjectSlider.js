import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { projectsData } from "../data";

function ProjectSlider() {
  const [activeCategory, setActiveCategory] = useState(projectsData[0].title);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const activeCategoryData = projectsData.find(
    (category) => category.title === activeCategory
  );

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <div className="mt-4">
          {projectsData.map((category) => (
            <button
              key={category.title}
              className={`mx-2 px-4 py-2 rounded-md ${
                activeCategory === category.title
                  ? 'bg-[#c1121f] text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
              onClick={() => handleCategoryChange(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        
          {activeCategoryData.projects.map((project, index) => (
            <div key={index}>
              <Link
                to={`/project/${activeCategory.toLowerCase()}/${index}`}
                className="block"
              >
                <div className="shadow-md rounded-md p-4">
                  <div
                    className="w-40 h-40 mb-4"
                    style={{
                      backgroundImage: `url('${project.images[0]}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <h2 className="text-lg font-semibold text-black">
                    {project.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
       
      </div>
    </div>
  );
}

export default ProjectSlider;
