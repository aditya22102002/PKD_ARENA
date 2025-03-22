import React from 'react'
import Searchbar from './Searchbar'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-violet-200/70'>
      <h1 className='md:text-4xl text-2xl relative font-bold text-gray-800 max-w-3xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing <span className='text-violet-600'> elit. Quos, asperiores.</span></h1>

      <p className='md:block text-gray-500 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi, ad corrupti officia consequatur praesentium!        
      </p>
      <div>
        <Searchbar/>
      </div>
    </div>
  )
}

export default Hero
