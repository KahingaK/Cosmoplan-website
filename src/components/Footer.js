import React from 'react';
import Logo from '../assets/img/logo1.png';
import { footer } from '../data';

function Footer() {
  return (
    <footer className='section bg-[#4B5B84] text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <a className='mb-6 lg:mb-0 lg:self-center' href='https://github.com/'>
            <img className = " h-16 lg:h-18" src={Logo} alt="" />
          </a>
          <div className='flex gap-x-4 justify-center lg:justify-end'>
            {footer.social.map((item, index) => {
              return (
                <div
                  className='w-10 h-10 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition'
                  key={index}
                >
                  <a href='https://github.com/'>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <p className='text-center'>
          &copy; Cosmoplan 2023 - All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
