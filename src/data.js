// import icons
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';
  
  // import images
  import Family from './assets/img/family-home.png';
  import Commercial from './assets/img/commercial.png';
  import Institution from './assets/img/institution.png';
  import Features1Img from './assets/img/features-1.png';
  import Features2Img from './assets/img/features-2.png';
  import ArchImg from './assets/img/arch.png';
  import MasterImg from './assets/img/master.png';
  import CupboardImg from './assets/img/cupboard.png';
  import LightingImg from './assets/img/lighting.png';

  

  
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'projects',
      href: 'projects',
    },
    {
      name: 'contact us',
      href: 'contact',
    },
  ];
  
  export const home = {
    title: 'Designing Dreams, Building Realities',
  subtitle: 'We strive to surpass our clients expectations and cater to their needs through meticulously crafted and innovative architectural designs.',
  buttonText: 'Our projects',
  };
  
  export const stats = [
   
    {
      value: "25+",
      text: 'Years of Experience',
    },
    {
      value: '300+',
      text: 'Projects built',
    },
    {
      value: '2014',
      text: 'Year of Incorporation',
    },
    
    {
      value: '2',
      text: 'Countries, Global reach',
    },
    
  ];
  
  export const features = {
    image: <Features1Img />,
    title: 'About Us',
    subtitle:
      'Cosmoplan Consultant is a locally registered firm of architects, planners and interior designers. We boast of extensive experience in both (the) public and private sectors of the construction industry and have consulted for the central government, private firms and NGOs in the greater East African region.',
    buttonText: 'Show Now',
    items: [
      {
        icon: <IoIosCheckmarkCircle />,
        title: 'Vision Statement',
        subtitle:
          'To positively interpret and meet the expectations and accommodation needs of our clients,       through efficient, pleasant and thoroughly researched architectural designs with a view to  positioning ourselves as the consultancy firm of choice in the region.',
      },
      {
        icon: <IoIosCheckmarkCircle />,
        title: 'Mission Statement',
        subtitle:
          'To create beautiful buildings for a beautiful environment',
      },
    ],
    feature2: {
      image: <Features2Img />,
      title: 'Construction',
      subtitle:
        'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
    },
  };
  
  export const ourServices = {
    title: 'Our Services',
    subtitle: 'Our core business is building and related consultancy services within the country and in the region',
    link: 'About Us',
    icon: <IoIosArrowRoundForward />,
    services: [
      {
        name: 'Master planning',
        image: <MasterImg />,
        // projects: [
        //   {
        //     projectName: 'Project 1',
        //     projectImage: <YourProjectImageComponent1 />,
        //     projectDescription: 'Description for Project 1',
        //   },
        //   // Add more projects for Master planning
        // ],
      },
      {
        name: 'Architectural design',
        image: <ArchImg />,
        // projects: [
        //   {
        //     projectName: 'Project 2',
        //     projectImage: <YourProjectImageComponent2 />,
        //     projectDescription: 'Description for Project 2',
        //   },
        //   // Add more projects for Architectural design
        // ],
      },
      {
        name: 'Interior Design',
        image: <CupboardImg />,
        // projects: [
        //   {
        //     projectName: 'Project 3',
        //     projectImage: <YourProjectImageComponent3 />,
        //     projectDescription: 'Description for Project 3',
        //   },
        //   // Add more projects for Interior Design
        // ],
      },
      {
        name: 'Landscaping',
        image: <LightingImg />,
        // projects: [
        //   {
        //     projectName: 'Project 4',
        //     projectImage: <YourProjectImageComponent4 />,
        //     projectDescription: 'Description for Project 4',
        //   },
        //   // Add more projects for Landscaping
        // ],
      },
      {
        name: 'Environmental Impact Assessment',
        image: <LightingImg />,
        // projects: [
        //   {
        //     projectName: 'Project 4',
        //     projectImage: <YourProjectImageComponent4 />,
        //     projectDescription: 'Description for Project 4',
        //   },
        //   // Add more projects for Landscaping
        // ],
      },
      
    ],
  };
  export const projects = {
    title: 'Our Projects',
    subtitle:
      'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
   
        
      
    
  };

  export const projectsData = [
    {
      id: 1,
      image: <Family/>,
      title: 'Family homes',
     
      projects: [
        {
          title: 'Project 1',
          images: [
            '../assets/img/project1-1.jpg',
            '../assets/img/project1-2.jpg',
            '../assets/img/project1-3.jpg',
          ],
          description: 'This is the description of project 1.',
          budget: '$100,000',
          location: 'City A',
        },
        // Add more projects for 'Family homes' as needed
      ],
    },
    {
      id: 2,
      title: 'Commercials',
      image: <Commercial/>,
      projects: [
        {
          title: 'Project 1',
          images: [
            '../assets/img/project2-1.jpg',
            '../assets/img/project2-2.jpg',
            '../assets/img/project2-3.jpg',
          ],
          description: 'This is the description of project 1.',
          budget: '$200,000',
          location: 'City B',
        },
        {
          title: 'Project 2',
          images: [
            '../assets/img/project2-1.jpg',
            '../assets/img/project2-2.jpg',
            '../assets/img/project2-3.jpg',
          ],
          description: 'This is the description of project 1.',
          budget: '$200,000',
          location: 'City B',
        },
        {
          title: 'Project 3',
          images: [
            '../assets/img/project2-1.jpg',
            '../assets/img/project2-2.jpg',
            '../assets/img/project2-3.jpg',
          ],
          description: 'This is the description of project 1.',
          budget: '$200,000',
          location: 'City B',
        },
        // Add more projects for 'Commercials' as needed
      ],
    },
    {
      id: 3,
      title: 'Institutions',
      image: <Institution/>,
      projects: [
        {
          title: 'Project 1',
          images: [
            '../assets/img/project3-1.jpg',
            '../assets/img/project3-2.jpg',
            '../assets/img/project3-3.jpg',
          ],
          description: 'This is the description of project 1.',
          budget: '$300,000',
          location: 'City C',
        },
        // Add more projects for 'Institutions' as needed
      ],
    },
    // Add more titles and projects as needed
  ];
  
  
  
  export const footer = {
    social: [
      {
        icon: <IoLogoYoutube />,
        href: '#',
      },
      {
        icon: <IoLogoInstagram />,
        href: '#',
      },
      {
        icon: <IoLogoGithub />,
        href: '#',
      },
      {
        icon: <IoLogoFacebook />,
        href: '#',
      },
    ],
    copyright: 'cosmoplan 2023 - All Rights Reserved.',
  };
  