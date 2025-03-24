import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';

const images = ['./home1.jpg', './home2.jpg', './home3.jpg', './home4.jpg'];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative top-0  flex flex-col items-center justify-center w-full h-[70vh] md:h-screen px-7 md:px-0 text-center'>
      
      <div className='absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000' 
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, transition: 'background-image 2s ease-in-out' }}>
      </div>
      
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>
      
      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto space-y-5'>
        <h1 className='md:text-4xl text-2xl font-bold text-white drop-shadow-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing <span className='text-violet-400'> elit. Quos, asperiores.</span>
        </h1>
        <p className='md:block text-gray-200 max-w-2xl mx-auto drop-shadow-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi, ad corrupti officia consequatur praesentium!
        </p>
        <div className='w-full max-w-md flex justify-center'>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default Hero;
