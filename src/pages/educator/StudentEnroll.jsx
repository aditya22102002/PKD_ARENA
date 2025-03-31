import React, { useEffect, useState } from 'react';
import { dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/students/Loading';

function StudentEnroll() {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  useEffect(() => {
    setEnrolledStudents(dummyStudentEnrolled);
  }, []);

  return enrolledStudents ? (
    <div className="min-h-screen flex flex-col items-center justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">

        {/* Table View for Large Screens Only */}
        <table className="lg:table hidden w-full overflow-hidden pb-4">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
              <th className="px-4 py-3 font-semibold">Student Name</th>
              <th className="px-4 py-3 font-semibold">Course Title</th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell">Date</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-500">
            {enrolledStudents.map((item, index) => (
              <tr key={index} className="border-b border-gray-500/20">
                <td className="px-4 py-3 text-center hidden sm:table-cell">{index + 1}</td>
                <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                  <img src={item.student.imageUrl} alt="Profile" className="w-9 h-9 rounded-full" />
                  <span className="truncate">{item.student.name}</span>
                </td>
                <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                <td className="px-4 py-3 hidden sm:table-cell">{new Date(item.purchaseDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Card View for Small & Medium Screens */}
        <div className="lg:hidden space-y-4 w-full p-4">
          {enrolledStudents.map((item, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm bg-gray-50 w-full flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <img src={item.student.imageUrl} alt="Profile" className="w-9 h-9 rounded-full" />
                <p className="font-medium truncate">{item.student.name}</p>
              </div>
              <p className="text-gray-600">Course: {item.courseTitle}</p>
              <p className="text-gray-500">Date: {new Date(item.purchaseDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default StudentEnroll;
