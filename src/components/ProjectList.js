import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data';

function ProjectsList() {
  const { title } = useParams(); // Get the selected title from URL params

  // Find the selected title's projects from projectsData
  const selectedTitle = projectsData.find((item) => item.title === title);

  if (!selectedTitle) {
    return <div>Project title not found.</div>;
  }

  return (
    <div>
      <h1>{selectedTitle.title} Projects</h1>
      <div>
        {selectedTitle.projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>Description: {project.description}</p>
            <p>Budget: {project.budget}</p>
            <p>Location: {project.location}</p>
            {/* Display project images */}
            {project.images.map((image, imageIndex) => (
              <img key={imageIndex} src={image} alt={`Project ${index + 1} Image`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
