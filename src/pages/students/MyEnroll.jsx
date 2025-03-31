import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/students/Footer';
import { calculateCourseDuration } from '../../global_functions/Utility';

function MyEnroll() {
  const navigate = useNavigate();
  const allCourses = useSelector((state) => state.courses.allCourses);
  const userData = useSelector((state) => state.user.userData); // Get user data from Redux store
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    if (!userData) {
      navigate('/login'); // Redirect to login if user is not logged in
      return;
    }
    
    const userId = userData._id;
    const userEnrolledCourses = allCourses.filter((course) =>
      course.enrollledStudents.some((studentId) => studentId === userId)
    );
    
    setEnrolledCourses(userEnrolledCourses);
  }, [allCourses, userData, navigate]);

  return (
    <>
      <div className='md:px-36 px-8 pt-10 text-gray-800'>
        <h1 className='text-2xl font-bold'>My Enrollments</h1>
        {enrolledCourses.length > 0 ? (
          <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
            <thead className='text-gray-900 bg-violet-100 border border-gray-500/20 text-sm text-left max-sm:hidden'>
              <tr>
                <th className='px-4 py-3 font-semibold truncate'>Course</th>
                <th className='px-4 py-3 font-semibold truncate'>Duration</th>
                <th className='px-4 py-3 font-semibold truncate'></th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              {enrolledCourses.map((course, index) => (
                <tr key={index} className='border border-gray-500/20'>
                  <td className='sm:px-4 pl-2 sm:pl-4 py-3 flex items-center space-x-3'>
                    <img className='w-14 sm:w-24 md:w-28' src={course.courseThumbnail} alt='' />
                    <div className='flex-1'>
                      <p className='mb-1 max-sm:text-sm'> {course.courseTitle}</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 max-sm:hidden'>
                    {calculateCourseDuration(course)}
                  </td>
                  <td className='px-4 py-3 max-sm:text-right'>
                    <button
                      onClick={() => navigate('/player/' + course._id)}
                      className='rounded-full cursor-pointer px-3 sm:px-5 py-1.5 sm:py-2 bg-violet-800 max-sm:text-xs text-white
                      transition-all duration-300 hover:scale-105 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.6)] hover:shadow-violet-600/50'
                    >
                      Show Lectures
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className='mt-10 text-center'>
            <p className='text-lg text-gray-600'>No courses enrolled yet.</p>
            <button
              onClick={() => navigate('/course-list')}
              className='mt-5 px-5 py-2 bg-violet-800 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.6)] hover:shadow-violet-600/50'
            >
              Explore Courses
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MyEnroll;
