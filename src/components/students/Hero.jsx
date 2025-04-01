import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Searchbar from "./Searchbar";

const images = ["./home1.jpg", "./home2.jpg", "./home3.jpg", "./home4.jpg"];

function Hero() {
  return (
    <div className="w-full">
      {/* Swiper Background Slider - Fullscreen for lg and larger */}
      <div className="relative hidden lg:block h-[70vh] lg:h-screen">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 4000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
            pauseOnMouseEnter: true, // Pause autoplay when mouse enters the slider area
          }}
          loop={true} // Loop the slides infinitely
          navigation={true} // Enable navigation arrows
          className="absolute inset-0 w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Text Overlay for lg and larger */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10  px-7 sm:px-10 mx-20">
          <h1 className="md:text-4xl text-3xl font-bold text-white drop-shadow-lg text-center mx-7 sm:mx-25 lg:mx-48">
            Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            <span className="text-violet-400">elit. Quos, asperiores.</span>
          </h1>
          <p className="mt-2 mx-5 md:mx-20 text-gray-200 max-w-2xl text-center drop-shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi, ad corrupti officia consequatur praesentium!
          </p>
          <div className="mt-5 w-full max-w-md flex justify-center">
            <Searchbar />
          </div>
        </div>
      </div>

      {/* Swiper Image for below large (text below image) */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 4000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
            pauseOnMouseEnter: true, // Pause autoplay when mouse enters the slider area
          }}
          loop={true} // Loop the slides infinitely
          navigation={true} // Enable navigation arrows
          className="w-full h-auto"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index}`} className="w-full h-auto" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Text Below Image for below lg */}
        <div className="flex flex-col items-center text-center px-5 sm:px-10 pt-5 bg-gradient-to-b from-violet-300 via-violet-200 to-transparent">
          <h1 className="mx-7 sm:mx-25 lg:mx-78 text-3xl font-bold text-gray-900 ">
            Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            <span className="text-violet-600">elit. Quos, asperiores.</span>
          </h1>
          <p className="mt-2 mx-5 sm:mx-20 text-gray-700 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi, ad corrupti officia consequatur praesentium!
          </p>
          <div className="mt-5 w-full max-w-md flex justify-center">
            <Searchbar />
          </div>
        </div>
      </div>

      {/* Custom CSS for the Swiper navigation buttons */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black !important; 
          font-size: 4rem; 
          padding: 10px; 
          z-index: 50; /* Increased z-index to be above text */
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          color: black !important; 
          font-size: 4rem;
          font-weight: bold;
          z-index: 50; /* Increased z-index to be above text */
        }

        /* Position the navigation buttons */
        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-prev {
          left: 10px;
        }
      `}</style>
    </div>
  );
}

export default Hero;
