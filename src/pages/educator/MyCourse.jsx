import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/students/Loading';
import { fetchCourses } from '../../features/courseSlice';

function MyCourse() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.courses.allCourses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return allCourses ? (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>

        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          {/* Table View for Large Screens Only */}
          <table className="lg:table hidden w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="w-60 px-4 py-3 font-semibold truncate">All Courses</th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">Published On</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {allCourses.length > 0 ? (
                allCourses.map((course) => (
                  <tr key={course._id} className="border-b border-gray-500/20">
                    <td className="md:px-4 pl-2 md:pl-4 py-3 truncate">{course.courseTitle}</td>
                    <td className="px-4 py-3">
                      ₹{Math.floor(course.enrollledStudents.length * (course.coursePrice - (course.discount * course.coursePrice) / 100))}
                    </td>
                    <td className="px-4 py-3">{course.enrollledStudents.length}</td>
                    <td className="px-4 py-3">{new Date(course.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">No courses available</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Card View for Small & Medium Screens */}
          <div className="lg:hidden space-y-4 w-full p-4">
            {allCourses.length > 0 ? (
              allCourses.map((course) => (
                <div key={course._id} className="p-4 border rounded-md shadow-sm bg-gray-50 w-full">
                  <p className="text-lg font-medium truncate">{course.courseTitle}</p>
                  <p className="text-gray-600">Earnings: ₹{Math.floor(course.enrollledStudents.length * (course.coursePrice - (course.discount * course.coursePrice) / 100))}</p>
                  <p className="text-gray-500">Students: {course.enrollledStudents.length}</p>
                  <p className="text-gray-500">Published: {new Date(course.createdAt).toLocaleDateString()}</p>
                </div>
              ))
            ) : (
              <p className="text-center py-4">No courses available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default MyCourse;
