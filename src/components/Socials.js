import React, {useState , useEffect} from 'react'
import { FaWhatsapp, FaLinkedinIn ,FaAddressCard, FaPhone, FaMapMarkerAlt} from "react-icons/fa";



function Socials() {
    // State to track visibility
    const [isVisible, setIsVisible] = useState(false); 
    const [isScroll, setIsScroll] = useState(true)

    const links = [
        {
          id: 1,
          child: (
            <>
               <FaLinkedinIn size={30} /> linkedIn
            </>
          ),
          href: "https://linkedin.com",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
               <FaMapMarkerAlt size={30} /> location
            </>
          ),
          href: "https://www.google.com/maps/place/View+Park+Towers,+Utalii+St,+Nairobi/@-1.2827958,36.8134942,17z/data=!3m1!4b1!4m6!3m5!1s0x182f10d23912632b:0xa3e642f1ab7822a8!8m2!3d-1.2828012!4d36.8160691!16s%2Fg%2F11dykx5sv?entry=ttu",
        },
        {
          id: 3,
          child: (
            <>
              <FaWhatsapp size={30}/> whatsapp
            </>
          ),
          href: "mailto:ikahinga@gmail.com",
        },
        {
          id: 4,
          child: (
            <>
               <FaAddressCard size={30} /> Card
            </>
          ),
          href: "/Ivan kahinga CV, 2023 (1).docx.pdf",
          style: "rounded-br-md",
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
        <button className="lg:flex flex-col top-[80%] right-2 fixed bg-[#c1121f] hover:bg-[#386480] text-white font-semibold py-4 px-4 rounded-full" onClick={() => setIsVisible(!isVisible)}>
          <FaPhone size={24} className="mr-2" />
        </button>
      )}

      {isVisible && (
        <div className="lg:flex flex-col top-[35%] right-0 fixed">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] bg-[#386480] hover:mr-[-10px] hover:rounded-md duration-300 " +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
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