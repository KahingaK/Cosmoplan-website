// import icons
import {
   
    IoLogoFacebook,
    
   
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';

  import { FaWhatsapp, FaLinkedinIn , FaMapMarkerAlt} from "react-icons/fa";
  
  // import images
 
  import Features1Img from './assets/img/about.jpg';
  import Features2Img from './assets/img/footer.png';
  import ArchImg from './assets/img/arch.jpg';
  import MasterImg from './assets/img/master.jpg';
  import IntImg from './assets/img/int.jpg';
  import LandImg from "./assets/img/land.jpg"
  import EnvImg from './assets/img/envia.jpg';
  import fImage1 from './assets/img/jpgs/family/Bung-2.jpg';
   import fImage2 from './assets/img/jpgs/family/Bung-1.jpg';
   import f3Image1 from './assets/img/jpgs/family/mansionettes-2.jpg';
   import f3Image2 from './assets/img/jpgs/family/mansionettes-1.jpg';
   import f1Image1 from './assets/img/jpgs/family/flat-1.jpg';
   import f1Image2 from './assets/img/jpgs/family/flat-1.jpg';
   import f2Image1 from './assets/img/jpgs/family/man-1.jpg';
   import f2Image2 from './assets/img/jpgs/family/man-2.jpg';
   import cImage1 from './assets/img/jpgs/comm/ruiru-1.jpg';
   import cImage2 from './assets/img/jpgs/comm/ruiru-2.jpg';
   import c1Image1 from './assets/img/jpgs/comm/hotel-1.jpg';
   import c1Image2 from './assets/img/jpgs/comm/hotel-2.jpg';
   import c2Image1 from './assets/img/jpgs/comm/apt-1.jpg';
   import c2Image2 from './assets/img/jpgs/comm/apt-2.jpg';
   import iImage1 from './assets/img/jpgs/inst/church-1.jpg';
   import iImage2 from './assets/img/jpgs/inst/church-2.jpg';
   import Foot from './assets/img/footer.png';
   import SerArchImg from './assets/img/architecture.jpg';
   import SerMaster from './assets/img/master2.jpg';
   import SerInter from './assets/img/inter.jpg';

  

  

  
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
        projectName: 'Project 1',
        projectImage: <SerMaster/>,
        projectDescription: 'We specialize in master planning, a dynamic and strategic approach to shaping the future of communities and spaces. Our master planning services encompass a comprehensive process that involves the thoughtful integration of urban, architectural, and environmental design principles. Whether envisioning the development of a new neighborhood, a corporate campus, or revitalizing an existing urban area, our team of expert planners collaborates closely with clients to craft visionary, sustainable, and practical plans. By considering a wide range of factors, including land use, infrastructure, transportation, sustainability, and community engagement, we create blueprints that not only meet your goals but also promote long-term success and positive impact.',
         
      },
      {
        name: 'Architectural design',
        image: <ArchImg />,
        projectName: 'Project 1',
        projectImage: <SerArchImg/>,
        projectDescription: 'we are passionate about architectural design, where artistry meets functionality to create stunning and purposeful spaces. Our architectural design services embody a harmonious blend of creativity, innovation, and functionality. Be it a new home, commercial building, or a renovation project, our dedicated team of architects and designers collaborates closely with clients to bring visions to life. We believe that great design should not only inspire but also serve the needs of its occupants. With a deep commitment to sustainability, aesthetics, and the latest technological advancements, we craft architectural designs that are not just visually striking but also environmentally responsible and efficient. Explore our portfolio to see how we transform ideas into extraordinary structures that stand as testaments to design excellence',
       
      },
      {
        name: 'Landscaping',
        image: <LandImg />,
        projectName: 'Project 3',
        projectImage: '',
        projectDescription: 'We understand that outdoor spaces should be an extension of your personality and lifestyle, and our designs reflect this ethos. From selecting the perfect plantings and hardscape elements to incorporating sustainable practices and creating inviting outdoor living areas, we transform outdoor spaces into breathtaking and functional landscapes.',
        
      },
      {
        name: 'Interior Design',
        image: <IntImg />,
        projectName: 'Project 3',
        projectImage: <SerInter />,
        projectDescription: 'we are dedicated to the art of interior design, where every space tells a unique story. Our interior design services are crafted to transform ordinary spaces into captivating, functional, and personalized environments. Whether envisioning the interior of your home, office, or commercial establishment, our team of experienced interior designers works closely with clients to understand their tastes, needs, and aspirations. We believe that the aesthetics and ambiance of a space profoundly influence the well-being of its occupants, and our designs reflect this philosophy. From selecting the perfect color palette and furnishings to optimizing spatial flow and integrating sustainable materials, we create interiors that are not only visually stunning but also harmoniously functional. ',
         
      },
      
      {
        name: 'Environmental Audit',
        image: <EnvImg />,
        projectName: 'Project 3',
        projectImage: '',
        projectDescription: 'EIAs are a crucial component of responsible development and decision-making, and we excel in evaluating and mitigating the environmental consequences of various projects.  Our assessments not only fulfill regulatory requirements but also contribute to creating projects that are environmentally responsible, socially beneficial, and economically viable',
        
      },
      
    ],
  };
  export const projects = {
    title: 'Our Projects',
    subtitle:
      'Sample projects handpicked to for their simplicity in design. Need a home just like this? Contuct us today! Architectural plan downloads available.',
   
        
      
    
  };

  export const projectsData = [
    {
      id: 1,
      
      title: 'Family homes',
     
      projects: [
        {
          title: '4-Bedroom Mansionette',
          images: [fImage2, fImage1],
          description: "This 4-bedroom mansionette offers a spacious and comfortable living experience. This home provides ample room for family living. The main floor welcomes you into the cozy living area, a modern kitchen and a dining space that opens up to a private backyard, perfect for outdoor gatherings.Upstairs, you'll find four well-appointed bedrooms, each with its own closet space. The master bedroom boasts an ensuite bathroom for added convenience. The lower level can be customized to suit your needs, whether it's transformed into a home office, a gym, or a recreational space. With its simple yet functional design and roomy layout, this 4-bedroom mansionette is an ideal choice for those seeking a comfortable and stylish home.",
           budget: '$100,000',
          location: 'Kenya',
        },
        {
          title: '5-bedroom Townhouse ',
          images: [f1Image2, f1Image1],
          description: `This exquisite 5-bedroom townhouse offers the perfect blend of elegance and convenience in a sought-after urban setting. Flexibility is key in this townhouse, with the lower level offering a versatile space that can be used as a home office, a media room, or a play area for kids.A highlight of this property would be its private outdoor space, whether it's a landscaped garden, a terrace, or the rooftop deck, providing an oasis of tranquility amidst the urban hustle and bustle.`,
          budget: '$100,000',
          location: 'Kenya',
        },
        {
          title: '6-bedroom, 2-DSQ mansion',
          images: [f2Image1, f2Image2],
          description: `This magnificent 6-bedroom mansion stands as a testament to grandeur and sophistication, offering unparalleled living in a prestigious neighborhood.The main level boasts an expansive layout, seamlessly connecting the formal living room, dining area, and a gourmet kitchen outfitted with top-of-the-line appliances. Oversized windows flood the space with natural light and provide panoramic views of the meticulously landscaped grounds. For added convenience, this mansion includes two domestic staff quarters (DSQs) that can be customized to suit the needs of your household staff or used as guest accommodations.

          `,
          budget: '$100,000',
          location: 'Runda, Kenya',
        },
        {
          title: '4-Bedroom mansionettes(duplex)',
          images: [f3Image1, f3Image2],
          description: `Nestled within a contemporary enclave, these 4-bedroom flat-roofed duplex mansionettes redefine modern living with their sleek design and efficient use of space.
          Each mansionette boasts a minimalist and chic exterior, characterized by clean lines, large windows, and a distinctive flat roof`,
          budget: '$100,000',
          location: 'Syokimau, Kenya',
        },
       
      ],
    },
    {
      id: 2,
      title: 'Commercials',
     
      projects: [
        {
          title: '1-bedroomed and 2-bedroomed units',
          images: [cImage1, cImage2],
          description: 'Re-imagine community living. Choose from a range of apartment layouts, from cozy one-bedroom units to expansive penthouses with breathtaking views. Each unit boasts well-appointed bedrooms, modern bathrooms, and ample storage space. Accompany the apartment blocks with a range of amenities for residents to enjoy, including a fitness center, a rooftop terrace with panoramic city views, and secure parking facilities. A dedicated concierge service ensures that residents needs are met with the utmost care and efficiency.',
          budget: '$200,000',
          location: 'Ruiru, Kenya',
        },
        {
          title: 'Hotel',
          images: [c1Image2, c1Image1],
          description: 'We take pride in our eco-conscious initiatives. This is applied in the design of commercial building to maximize our clients investment as well their guesta. With interventions from energy-saving technologies to modern building technologies,to responsible sourcing, we strive to minimize our environmental impact while delivering an exceptional experience.',
          budget: '$200,000',
          location: 'City B',
        },
        {
          title: 'Typical apartment buildfing',
          images: [c2Image1, c2Image2],
          description: 'Re-imagine community living. Choose from a range of apartment layouts, from cozy one-bedroom units to expansive penthouses with breathtaking views. Each unit boasts well-appointed bedrooms, modern bathrooms, and ample storage space. Accompany the apartment blocks with a range of amenities for residents to enjoy, including a fitness center, a rooftop terrace with panoramic city views, and secure parking facilities. A dedicated concierge service ensures that residents needs are met with the utmost care and efficiency.',
          budget: '$200,000',
          location: 'City B',
        },
       
      ],
    },
    {
      id: 3,
      title: 'Institutions',
      
      projects: [
        {
          title: 'Church',
          images: [iImage1, iImage2],
          description: 'We take pride in our eco-conscious initiatives. This is applied in the design of commercial building to maximize our clients investment as well their guesta. With interventions from energy-saving technologies to modern building technologies,to responsible sourcing, we strive to minimize our environmental impact while delivering an exceptional experience.',
          budget: '$200,000',
          location: 'City B',
        },
        
      ],
    },
    
  ];

  export const contact = {
    image: <Foot/>,
    
        
      
    
  };
  
  
  
  export const footer = {
    social: [
      {
        icon: <FaWhatsapp/>,
        href: '#',
      },
      {
        icon: <FaMapMarkerAlt/>,
        href: '#',
      },
      {
        icon: <FaLinkedinIn  />,
        href: 'https://www.linkedin.com/company/cosmoplan-consultants/',
      },
      {
        icon: <IoLogoFacebook />,
        href: 'https://www.facebook.com/profile.php?id=61551637924199&mibextid=ZbWKwL',
      },
    ],
    copyright: 'cosmoplan 2023 - All Rights Reserved.',
  };
  