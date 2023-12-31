import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectSlider({ projectsData }) {
  // Set active cattegory
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
        <div>
          <div className="mt-4 mb-4 flex flex-grow-1 flex-nowrap mx-auto">
            <select
              className="mx-2 px-4 py-2 rounded-md "
              onChange={(e) => handleCategoryChange(e.target.value)}
              value={activeCategory}
            >
              {projectsData.map((category, index) => (
                <option
                  key={category.title}
                  value={category.title}
                  className={`mx-2 px-4 py-2 rounded-md ${
                    activeCategory === category.title
                      ? "bg-[#c1121f] text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {category.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCategoryData.projects.map((project, index) => (
          <div key={index}>
            <Link to={`/project/${activeCategory.toLowerCase()}/${index}#top`}>
              <div className="relative shadow-md rounded-md p-2 bg-[]">
                <img
                  src={project.images[0]}
                  alt=""
                  className="rounded-lg"
                />
                <div className="absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize text-shadow-md ">
                  {project.title}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSlider;
