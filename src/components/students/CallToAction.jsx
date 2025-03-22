import React from 'react'

function CallToAction() {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempore a ipsam ipsum atque. Tempore!
      </p>
      <div className='flex items-center font-medium gap-6 mt-4'> 
        <button className='cursor-pointer px-10 py-3 rounded-md text-white bg-violet-700'>Get Started</button>
        <button className='cursor-pointer flex items-center gap-2'>Learn More <img src="./asset/arrow_icon.svg" alt="" /></button>

      </div>
    </div>
  )
}

export default CallToAction
