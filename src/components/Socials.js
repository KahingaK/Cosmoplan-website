import React, {useState , useEffect} from 'react'
import { FaGithub, FaLinkedinIn , FaPhone} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

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
               <FaGithub size={30} /> github
            </>
          ),
          href: "https://github.com",
        },
        {
          id: 3,
          child: (
            <>
              <HiOutlineMail size={30}/> mail 
            </>
          ),
          href: "mailto:ikahinga@gmail.com",
        },
        {
          id: 4,
          child: (
            <>
               <BsFillPersonLinesFill size={30} /> resume
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
        <button className="lg:flex flex-col top-[65%] right-0 fixed bg-[#386480] hover:bg-[#c1121f] text-white font-semibold py-4 px-4 rounded-full" onClick={() => setIsVisible(!isVisible)}>
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