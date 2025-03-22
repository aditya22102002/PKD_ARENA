import React from 'react'

function Footer() {
  return (
    <footer className='bg-violet-200/90 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col lg:flex-row items-start px-8 lg:px-0 justify-center gap-10 lg:gap-32 py-10 border-b border-violet-700/30'>
        <div className='lg:w-3/2 flex flex-col lg:items-center w-full'>
          <img cl src="../asset/pkd_logo.png" alt="" />
          <p className='mt-6 text-center lg:text-left text-sm text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta ipsa nostrum expedita et nesciunt earum magnam nisi ea atque.</p>
        </div>
        <div className='lg:border-none border-t border-violet-700/30  flex flex-col lg:item-start items-center w-full'>
          <h2 className='lg:text-center lg:mt-5 mt-6 lg:w-full font-semibold text-black mb-5 '>Company</h2>
          <ul className='flex flex-wrap gap-x-9 gap-y-2 lg:grid grid-col-5 lg:flex-none justify-center text-sm lg:space-y-2 text-black '>
            <li><a href="#">Home</a></li>
            <li><a href="/privacy-policy">Privacy policy</a></li>
            <li><a href="/terms&condition">Terms & Condition</a></li>
            <li><a href="/refund-policy">Refund and Returns Policy</a></li>
            <li><a href="about-us">About us</a></li>
          </ul>
        </div>
        <div className='lg:pr-10  lg:border-none border-t border-violet-700/30 flex flex-col lg:item-start items-center w-full'>

          <div className='flex items-center gap-1 pb-4 mt-5' >
            <input type="email" placeholder='Enter your email' className='border border-violet-700/30 bg-white text-gray-500 placeholder-gray-300 outline-none w-64 h-9 rounded px-2 text-sm'/>
            <button className='bg-violet-800 w-24 h-9 text-violet-200 rounded cursor-pointer'>Subscribe</button>
          </div>
          <ul className=' w-full text-sm  text-black '>
            <li className='flex justify-between lg:m-5'>
              <span className='md:w-full  text-left font-semibold' >Email:- </span>
              <span className='md:w-full text-right' >pkdarena@mypkd.co.in</span>
            </li>
            <li className='flex lg:m-5 justify-between'>
              <span className='md:w-full  text-left font-semibold' >Mobile:- </span>
              <span className='md:w-full  text-right' >+91 9263883729</span>
            </li>
            <li className='flex justify-between lg:m-5'>
              <span className='md:w-full text-left font-semibold' >Working Hours:- </span>
              <span className='md:w-full text-right' >09:00am - 06:00pm</span>
            </li>
          </ul>

        </div>
      </div>
      <p className='text-center py-4 text-xs md:text-sm '>Copyright © 2023 PKD Arena. All Rights Reserved</p>
    </footer>
  )
}

export default Footer
