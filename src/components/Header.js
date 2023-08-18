import React from "react";
import { useState, useEffect } from "react";
import Logo from "../assets/img/logo1.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
import NavMobile from "./NavMobile";
import {  Link  } from "react-scroll";

function Header() {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-[#386480] py-4 lg:py-6" : "bg-none"
      } fixed left-0 w-full py-8 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto  lg:px-4 ">
        <div className=" flex justify-between items-center lg:px-5">
          <a href="https://github.com/">
            <div className="h-6 lg:h-8">
            
              <img
                src={Logo}
                alt=""
                className="logo"
              />
            </div>
          </a>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) =>  (
                  <li key={index}
                  className={`capitalize cursor-pointer hover:scale-105 duration-200 ${
                  index === navigation.length - 1 ? "text-white  bg-[#c1121f] px-5 py-0.5 rounded-md " : "text-white"
                  }`}> <Link
                      
                      to={item.href} smooth duration={500}>
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
