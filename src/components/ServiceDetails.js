import React from 'react';
import { useParams } from 'react-router-dom';
import { ourServices } from '../data'; // Import your data

function ServiceDetails() {
  const { serviceName } = useParams();
  const service = ourServices.services.find(
    (service) => service.name.toLowerCase() === serviceName
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      {/* Display the service project details */}
      <h2>Service: {service.name}</h2>
      {/* Iterate through service.projects and display project details */}
    </div>
  );
}

export default ServiceDetails;
