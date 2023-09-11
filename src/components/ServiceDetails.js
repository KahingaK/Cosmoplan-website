import React from "react";
import { useParams } from "react-router-dom";
import { ourServices } from "../data"; // Import your data
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"


function ServiceDetails() {
  // Use the useNavigate hook
  const navigate = useNavigate();

  // Redirect to the home page
  const handleGoBack = () => {
    navigate("/");
  };

  const { serviceName } = useParams();
  const service = ourServices.services.find(
    (service) => service.name.toLowerCase() === serviceName
    
  );
 

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section className="section ">
      <div className="container mx-auto  ">
        {/* {image} */}
        <div className="flex flex-col lg:flex-row lg:gap-x-10 pt-8">
          <div className="flex-1 order-2 lg:order-1">
            <img src={service.projectImage} alt="" className=" rounded-3xl " />
          </div>

          {/* {text} */}
          <div className="flex-1 flex flex-col justify-end order-1 lg:order-2 mt-6 lg:mt-0">
            <h2 className="title text-2xl lg:text-4xl mb-4">{service.name}</h2>
            <p className="subtitle text-base lg:text-lg mb-6">
            {service.projectDescription}              
            </p>
            
            <div className="flex flex-row">
              <div className="p-4">
                <button
                  className="flex cursor-pointer hover:scale-110 items-center font-medium transition-all rounded-lg bg-[#c1121f] text-white py-2 px-6"
                  onClick={handleGoBack}
                >
                  &lt; back to home
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
      </div>
    </section>
  );
}

export default ServiceDetails;
