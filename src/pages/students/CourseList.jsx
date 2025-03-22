import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Searchbar from '../../components/students/Searchbar'
import { useSelector } from 'react-redux'
import CourseCard from '../../components/students/CourseCard'
import Footer from '../../components/students/Footer'

function CourseList() {
  const navigate=useNavigate()
  const { input } = useParams()
  const allCourses = useSelector((state) => state.courses.allCourses)
  const [filteredCourse, setFilteredCourse] = useState([])
  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()
      input ?
        setFilteredCourse(
          tempCourses.filter(
            item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
        : setFilteredCourse(tempCourses)
    }
  }, [allCourses, input])
  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'><Link to={'/'} className='text-violet-700 cursor-pointer' >Home</Link> / <span> Course List</span></p>
          </div>
          <Searchbar data={input} />
        </div>
        {
          input && <div className='bg-gray-200 inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600'>
            <p>{input}</p>
            <img src="../asset/cross_icon.svg" alt="" className='cursor-pointer' onClick={()=>navigate('/course-list')}/>
          </div>
        }
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 my-16 gap-3 md:p-0'>
          {filteredCourse.map((course, index) => <CourseCard key={index} course={course} />)}
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default CourseList
