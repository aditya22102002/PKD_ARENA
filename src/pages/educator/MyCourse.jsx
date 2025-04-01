import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/students/Loading';
import { fetchCourses } from '../../features/courseSlice';

function MyCourse() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.courses.allCourses);
  const URL='http://localhost:4000'
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return allCourses ? (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0 w-full">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>

        {/* Scrollable Container for All Courses */}
        <div className="overflow-y-auto max-h-[700px] w-full space-y-4 p-4 bg-white rounded-md border border-gray-300">
          {allCourses.length > 0 ? (
            allCourses.map((course) => (
              <div className='sm:flex sm:flex-row p-4 border rounded-lg shadow-sm bg-gray-50 w-full'>
                <div>
                  <img className='w-60 sm:w-50' src={URL +course.courseThumbnail} alt="" />
                </div>
                <div
                  key={course._id}
                  className="p-2"
                >
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{course.courseTitle}</h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Earnings:</span> ₹
                    {Math.floor(
                      course.enrollledStudents.length *
                      (course.coursePrice - (course.discount * course.coursePrice) / 100)
                    )}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-medium">Students:</span> {course.enrollledStudents.length}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-medium">Published On:</span>{' '}
                    {new Date(course.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

            ))
          ) : (
            <p className="text-center py-4">No courses available.</p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default MyCourse;
