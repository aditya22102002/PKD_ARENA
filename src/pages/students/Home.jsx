import React from 'react'
import Hero from '../../components/students/Hero'
import CourseSection from '../../components/students/CourseSection'
import CallToAction from '../../components/students/CallToAction'
import Footer from '../../components/students/Footer'


function Home() {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <CourseSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
