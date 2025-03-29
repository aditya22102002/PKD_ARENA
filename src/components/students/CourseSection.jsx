// import React, { useContext, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import CourseCard from './CourseCard'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchCourses } from '../../features/courseSlice'

// function CourseSection() {
//   const dispatch=useDispatch()
//   const allCourses = useSelector((state) => state.courses.allCourses);
  
//   useEffect(()=>{
//     dispatch(fetchCourses())
//   },[dispatch])

//   return (
//     <div className='py-5 md:px-40 px-8 '>
//       <h2 className='text-3xl font-medium text-gray-800'>Learn From the Best</h2>
//       <p className='text-sm md:text-base text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quaerat dicta soluta, odio at consequuntur!</p>

//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
//         {allCourses.slice(0,4).map((course,index)=>(
          
//           <CourseCard  key={index} course={course} />
//         ))}
//       </div>

//       <Link to={'/course-list'} onClick={() => scrollTo(0, 0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded
//        transition-all duration-100 hover:px-11 hover:py-3.5 hover:text-lg hover:shadow-[0px_0px_15px_rgba(124,58,237,0.2)] hover:bg-violet-50
//       '  >Show All Courses</Link>
//     </div>
//   )
// }

// export default CourseSection


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../features/courseSlice';

function CourseSection() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.courses.allCourses);
  const isLoading = useSelector((state) => state.courses.isLoading);
  const isError = useSelector((state) => state.courses.isError);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  console.log('All Courses:', allCourses); // Debugging log

  return (
    <div className='py-5 md:px-40 px-8 '>
      <h2 className='text-3xl font-medium text-gray-800'>Learn From the Best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quaerat dicta soluta, odio at consequuntur!</p>

      {isLoading && <p className="text-center text-gray-600">Loading courses...</p>}
      {isError && <p className="text-center text-red-500">Error loading courses.</p>}

      {!isLoading && !isError && allCourses.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
          {allCourses.slice(0, 4).map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      ) : (
        !isLoading && !isError && <p className="text-center text-gray-500">No courses available.</p>
      )}

      <Link
        to={'/course-list'}
        onClick={() => scrollTo(0, 0)}
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded transition-all duration-100 hover:px-11 hover:py-3.5 hover:text-lg hover:shadow-[0px_0px_15px_rgba(124,58,237,0.2)] hover:bg-violet-50'
      >
        Show All Courses
      </Link>
    </div>
  );
}

export default CourseSection;

