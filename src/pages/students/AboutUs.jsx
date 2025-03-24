import React from 'react';

function AboutUs() {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 px-5 py-10 mt-25'>
      <h1 class="text-3xl font-bold text-left text-violet-800 mb-10">About Us</h1>
      <div className='max-w-3xl text-center'>
        <h1 className='text-2xl font-bold text-gray-800 mb-5 text-left'>Our Story of PKD Arena</h1>
        <p className='text-gray-600 text-lg leading-relaxed text-left'>
          At PKD Arena, we are passionate about bringing creativity, organization, and the joy of reading to life. Our journey began with a simple idea: to provide individuals, students, professionals, and book lovers with top-quality stationery and handpicked books that inspire, empower, and connect people in meaningful ways.
        </p>
        <p className='text-gray-600 text-lg leading-relaxed mt-4 text-left'>
          Founded in 2023, PKD Arena started as a small dream that blossomed into a full-fledged stationery, book & all-your-needs destination. We believe in the power of words, the beauty of well-crafted stationery, and the transformative magic of a good book.
        </p>
      </div>

      <div className='max-w-3xl mt-15 '>
        <img src="./about1.png" alt="error" />
      </div>

      <div className='max-w-3xl mt-10'>
        <div className='text-left '>
          <h2 className='text-2xl font-semibold text-gray-800 mb-3'>Our Mission</h2>
          <p className='text-gray-600 text-lg leading-relaxed'>
            PKD Arena’s mission is to foster creativity, nurture knowledge, and inspire individuals to write, draw, sketch, and read without boundaries. We strive to make the world a more creative, organized, and well-read place.
          </p>
        </div>
      </div>

      <div className='max-w-3xl mt-10 '>
        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>What Sets Us Apart</h2>
        <ul className='text-gray-600 text-lg leading-relaxed text-left list-disc list-inside mx-auto'>
          <li><strong>Curated Selection:</strong> Our bookshelves are filled with carefully chosen titles, spanning various genres, to cater to diverse tastes and preferences.</li>
          <li><strong>Quality Stationery:</strong> We offer a wide range of high-quality stationery products, from elegant notebooks to innovative writing tools, designed to elevate your creative and professional endeavors.</li>
          <li><strong>Exceptional Service:</strong> Our team is dedicated to providing exceptional customer service, ensuring that your experience with us is as remarkable as the products we offer.</li>
          <li><strong>Community Building:</strong> We believe in building a community of stationery enthusiasts and book lovers. Through events, workshops, and online interactions, we foster connections among our customers.</li>
        </ul>
      </div>

      <div className='text-left mt-10'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>OUR TEAM MEMBER</h2>
      </div>
      <div className='max-w-3xl mt-10 text-center'>
        <div className='grid grid-cols-2 gap-20'>
          <div>
            <img src="../asset/profile_img_1.png" alt="" />
            <h2 className='text-lg font-semibold text-gray-800 my-3'>Anshu Kumar Mishra</h2>
            <h1 className='text-xl font-bold text-gray-800 my-3'>Founder</h1>
          </div>
          <div>
            <img src="../asset/profile_img_1.png" alt="" />
            <h2 className='text-lg font-semibold text-gray-800 my-3'>Sudhanshu Singh</h2>
            <h1 className='text-xl font-bold text-gray-800 my-3'>Co-Founder</h1>
          </div>
        </div>
      </div>

      <div className='mt-15'>
        <a
          href='https://mypkd.co.in/'
          className='text-violet-600 font-semibold hover:underline'
          target='_blank' rel='noopener noreferrer'
        >
          Visit Our Website
        </a>
      </div>
    </div>
  );
}

export default AboutUs;