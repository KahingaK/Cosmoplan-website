import React, {useState , useEffect} from 'react'
import { FaWhatsapp, FaLinkedinIn ,FaAddressCard, FaMapMarkerAlt} from "react-icons/fa";



function Socials() {
    // State to track visibility
    const [isScroll, setIsScroll] = useState(true)

    const links = [
        {
          id: 1,
          logo: (
            <>
               <FaLinkedinIn size={30} />
            </>
          ),
          href: "https://www.linkedin.com/company/cosmoplan-consultants",
          style: "rounded-tl-md",
        },
        {
          id: 2,
          logo: (
            <>
               <FaMapMarkerAlt size={30} />
            </>
          ),
          href: "https://www.google.com/maps/place/View+Park+Towers,+Utalii+St,+Nairobi/@-1.2827958,36.8134942,17z/data=!3m1!4b1!4m6!3m5!1s0x182f10d23912632b:0xa3e642f1ab7822a8!8m2!3d-1.2828012!4d36.8160691!16s%2Fg%2F11dykx5sv?entry=ttu",
        },
        {
          id: 3,
          logo: (
            <>
              <FaWhatsapp size={30}/>
            </>
          ),
          href: "tel:+254712000200",
        },
        {
          id: 4,
          logo: (
            <>
               <FaAddressCard size={30} />
            </>
          ),
          href: "/Ivan kahinga CV, 2023 (1).docx.pdf",
          style: "rounded-tr-md",
          download: true,
        },
      ];

      useEffect(() => {
        let prevScrollY = window.scrollY;
    
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          if (currentScrollY > prevScrollY) {
            // Scrolling down, hide the button
          
            setIsScroll(false)
          } else {
            // Scrolling up, show the button
          
            setIsScroll(true)
          }
    
          prevScrollY = currentScrollY;
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          // Clean up the scroll event listener when the component unmounts
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
  return (
    <div>
    {isScroll && (
      <div className="flex flex-row justify-end items-end fixed bottom-0 w-full">
        <ul className="flex ">
          {links.map(({ id, logo, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center h-14 px-4 bg-[#386480] lg:hover:mb-[-10px] hover:rounded-md duration-300 " +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {logo}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  
   
  
  )
}

export default Socials