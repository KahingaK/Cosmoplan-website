import React from "react";
import { projects } from "../data"
import ProjectSlider from "./ProjectSlider";
import { projectsData } from "../data"; // Import your data



function Projects() {
  const { title, subtitle } = projects;

    

  return (
    <section name = "projects"  className="section text-center">
      <div  className="container mx-auto pt-6">
        <div>
          <h2 className="title">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
            {subtitle}
          </p>
        </div>
       <ProjectSlider projectsData = {projectsData}/>
      </div>
    </section>
  );
}

export default Projects;


