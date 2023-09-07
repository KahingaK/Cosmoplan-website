import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data"; // Import your data
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"


function ProjectDetail() {

  //Access route parameters from the URL
  const { titleName, projectId } = useParams();

   // Find the title by lowercase comparison
  const title = projectsData.find((t) => t.title.toLowerCase() === titleName);
  const project = title.projects[projectId];

   // Use the useNavigate hook
   const navigate = useNavigate(); 
  
   // Redirect to the home page
     const handleGoBack = () => {
       navigate("/"); 
     };

  return (
    <div className="flex flex-col lg:flex-row pt-16 ">
      <div className="flex flex-col lg:w-1/2">
        <div className=" rounde-md shadow-lg p-6">
          <img
            src={project.images[0]}
            alt={project.title}
            className=" rounded-lg lg:h-auto"
          />
        </div>
        <div className="rounded-lg shadow-lg p-6">
          <img
            src={project.images[1]}
            alt={project.title}
            className="rounded-md lg:h-auto"
          />
        </div>
       
      </div>
      <div className="flex flex-col lg:w-1/2 justify-center items-left p-6">
        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
        <div className="flex flex-row pb-4">
          <p className="pr-2 font-medium "> Location: </p>
          <p>{project.location}</p>
        </div>
        <div className="flex flex-row pb-4">
          <p className="pr-2 font-medium ">Budget: </p>
          <p>{project.budget}</p>
        </div>
        <p className="mb-2">{project.description}</p>
        
        
        <div className="flex flex-row">
        <div className="p-4">
      <button
          className="flex cursor-pointer hover:scale-110 items-center font-medium transition-all rounded-lg bg-[#c1121f] text-white py-2 px-6"
          onClick={handleGoBack}
        >
              Back to Home
        </button>
      </div>
      <div className="p-4">
     <Link to = "/contact" > <button
          className="flex cursor-pointer hover:scale-110 items-center font-medium transition-all rounded-lg bg-[#c1121f] text-white py-2 px-6"

        >
           Ask for a quote
        </button></Link>
      </div>

        </div>
        
      </div>
    </div>
  );
}

export default ProjectDetail;
