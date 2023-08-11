import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data"; // Import your data

function ProjectDetail() {
    const { titleName, projectId } = useParams();
    const title = projectsData.find((t) => t.title.toLowerCase() === titleName);
    const project = title.projects[projectId];
  return (
    <div>
      <h2>{project.title}</h2>
      {/* Render other project details here */}
    </div>
  );
}

export default ProjectDetail;
