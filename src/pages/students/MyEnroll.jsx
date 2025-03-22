import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Footer from '../../components/students/Footer';
import { calculateCourseDuration } from '../../global_functions/Utility';


function MyEnroll() {
  const navigate = useNavigate()
  const allCourses = useSelector((state) => state.courses.allCourses)
  const [enrolledCourses,setEnrolledCourses]=useState([])
  const fetUserEnrolledCourses=async()=>{
    setEnrolledCourses(allCourses)
  }

  useEffect(()=>{
    fetUserEnrolledCourses()
  },[allCourses])

  
  return (
    <>
      <div className='md:px-36 px-8 pt-10 text-gray-800'>
        <h1 className='text-2xl font-bold'>My Enrollments</h1>
        <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
          <thead className='text-gray-900 bg-violet-100 border border-gray-500/20 text-sm text-left max-sm:hidden'>
            <tr>
              <th className='px-4 py-3 font-semibold truncate'>Course</th>
              <th className='px-4 py-3 font-semibold truncate'>Duration</th>
              {/* <th className='px-4 py-3 font-semibold truncate'>Completed</th> */}
              <th className='px-4 py-3 font-semibold truncate'></th>
            </tr>
          </thead>
          <tbody  className='text-gray-700 '>
            {enrolledCourses.map((course,index)=>(
              <tr  key={index} className='border border-gray-500/20'>
                <td className='sm:px-4 pl-2 sm:pl-4 py-3 flex items-center space-x-3'>
                  <img className='w-14 sm:w-24 md:w-28' src={course.courseThumbnail} alt="" />
                  <div className='flex-1 '>
                    <p className='mb-1 max-sm:text-sm'> {course.courseTitle}</p>
                  </div>
                </td>
                <td className='px-4 py-3 max-sm:hidden'>
                  {calculateCourseDuration(course)}
                </td>
                {/* <td className='px-4 py-3 max-sm:hidden'>
                  4/10 <span>Lectures</span>
                </td> */}
                <td className='px-4 py-3 max-sm:text-right'>
                  <button onClick={()=>navigate('/player/'+course._id)} className=' rounded-full cursor-pointer px-3 sm:px-5 py-1.5 sm:py-2 bg-violet-800 max-sm:text-xs text-white'>Show Lectures</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  )
}

export default MyEnroll
