// import React from 'react'


// const projectsData = [
//     {
//       id: 1,
//        title: 'Family homes',
//        image: 'src/components/Family.js',
//      },
//      {
//        id: 2,
//        title: 'Commercial buildings',
//        image: '/path/to/image2.jpg',
//      },
//      {
//       id: 3,
//       title: 'Institutions',
//       image: '/path/to/image2.jpg',
//     },
//    // Add more project data as needed
//    ];
  

// return (
//   <section className="section text-center">
//     <div className="container mx-auto">
//       <div>
//         {" "}
//         <h2 className="title">{title}</h2>
//         <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
//           {subtitle}
//         </p>
//       </div>
//       <div>
//         <div className="items-centre space-y-6">
//         {projectsData.map((project, index) => (
//           <div
//             key={project.id}
//             className={`flex flex-col md:flex-row items-center justify-center shadow-md rounded-md  p-4 "
//             }`}
//           >
//             {/* Image */}
//             <div className="md:w-1/2 ">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-auto"
//               />
//             </div>
//             {/* Text */}
//             <div className="md:w-1/2 px-4 py-8 md:py-0 text-left">
//               <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
//               <p className="text-lg mb-4">{project.description}</p>
//               <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         ))}
//         </div>
        
//       </div>
//     </div>
//   </section>
// );
// }

// export default Family