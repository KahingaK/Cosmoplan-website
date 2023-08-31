import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data"; // Import your data

function ProjectDetail() {
  const { titleName, projectId } = useParams();
  const title = projectsData.find((t) => t.title.toLowerCase() === titleName);
  const project = title.projects[projectId];

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col lg:w-1/2">
      <div>
      <img src={project.images[0]} alt={project.title} className="h-64 lg:h-auto" />
     </div>
         </div>
      <div className="flex flex-col lg:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="mb-2">{project.description}</p>
        <p className="mb-2">Budget: {project.budget}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;
