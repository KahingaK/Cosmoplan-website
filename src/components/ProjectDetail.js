import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data"; // Import your data

function ProjectDetail() {
    const { titleName, projectId } = useParams();
    const title = projectsData.find((t) => t.title.toLowerCase() === titleName);
    const project = title.projects[projectId];
  return (
    <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col"> <p>{project.image}</p>
        </div>
        <div className="flex flex-col"> 
        <h2>{project.title}</h2>
          
          <p>{project.description}</p>
          <p>{project.budget}</p>
          </div>
    
      {/* Render other project details here */}
    </div>
  );
}

export default ProjectDetail;
