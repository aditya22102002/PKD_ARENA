import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  return (
    <footer className='bg-violet-200/90 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col lg:flex-row items-start px-8 lg:px-0 justify-center gap-10 lg:gap-32 py-10 border-b border-violet-700/30'>
        <div className='lg:w-3/2 flex flex-col lg:items-center w-full'>
          <img src="../asset/pkd_logo.png" alt="PKD Logo" />
          <p className='mt-6 text-center lg:text-left text-sm text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta ipsa nostrum expedita et nesciunt earum magnam nisi ea atque.
          </p>
        </div>

        {/* Company Links */}
        <div className='lg:border-none border-t border-violet-700/30 flex flex-col lg:item-start items-center w-full'>
          <h2 className='lg:text-center lg:mt-5 mt-6 lg:w-full font-semibold text-black mb-5'>Company</h2>
          <ul className='flex flex-wrap gap-x-9 gap-y-2 lg:grid grid-col-5 lg:flex-none justify-center text-sm lg:space-y-2 text-black'>
            {[
              { name: "Home", path: "/" },
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms & Condition", path: "/terms&condition" },
              { name: "Refund and Returns Policy", path: "/refund-policy" },
              { name: "About Us", path: "/about-us" }
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className={`hover:underline hover:scale-110 hover:font-bold transition-all 
                    ${location.pathname === link.path ? "font-bold underline" : ""}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscription & Contact */}
        <div className='lg:pr-10 lg:border-none border-t border-violet-700/30 flex flex-col lg:item-start items-center w-full'>
          <div className='flex items-center gap-1 pb-4 mt-5'>
            <input
              type="email"
              placeholder='Enter your email'
              className='border border-violet-700/30 bg-white text-gray-500 placeholder-gray-300 outline-none w-64 h-9 rounded px-2 text-sm shadow-violet-800'
            />
            <button className='bg-violet-800 w-24 h-9 text-violet-200 rounded cursor-pointer 
              hover:bg-violet-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-violet-600'>
              Subscribe
            </button>
          </div>
          <ul className='w-full text-sm text-black'>
            <li className='flex justify-between lg:m-5'>
              <span className='md:w-full text-left font-semibold'>Email:</span>
              <span className='md:w-full text-right'>pkdarena@mypkd.co.in</span>
            </li>
            <li className='flex lg:m-5 justify-between'>
              <span className='md:w-full text-left font-semibold'>Mobile:</span>
              <span className='md:w-full text-right'>+91 9263883729</span>
            </li>
            <li className='flex justify-between lg:m-5'>
              <span className='md:w-full text-left font-semibold'>Working Hours:</span>
              <span className='md:w-full text-right'>09:00am - 06:00pm</span>
            </li>
          </ul>
        </div>
      </div>
      <p className='text-center py-4 text-xs md:text-sm'>Copyright © 2023 PKD Arena. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
