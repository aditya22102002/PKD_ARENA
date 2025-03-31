import React, { useEffect, useState } from 'react';
import { dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/students/Loading';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    setDashboardData(dummyDashboardData);
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="space-y-5">
        
        {/* Stats Section */}
        <div className="flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-3 shadow-card border border-violet-700 p-4 w-66 rounded-md">
            <img src="../asset/patients_icon.svg" alt="Enrollments" />
            <div>
              <p className="text-2xl font-medium text-gray-600">{dashboardData.enrolledStudentsData.length}</p>
              <p className="text-base text-gray-500">Total Enrollments</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-violet-700 p-4 w-66 rounded-md">
            <img src="../asset/appointments_icon.svg" alt="Courses" />
            <div>
              <p className="text-2xl font-medium text-gray-600">{dashboardData.totalCourses}</p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-violet-700 p-4 w-66 rounded-md">
            <img src="../asset/earning_icon.svg" alt="Earnings" />
            <div>
              <p className="text-2xl font-medium text-gray-600">₹{dashboardData.totalEarnings}</p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>

        {/* Latest Enrollments Section */}
        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>

          {/* Table View for Large Screens */}
          <div className="hidden lg:block">
            <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/70">
              <table className="table-fixed md:table-auto w-full overflow-hidden pb-4">
                <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
                    <th className="px-4 py-3 font-semibold">Student Name</th>
                    <th className="px-4 py-3 font-semibold">Course Title</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-500">
                  {dashboardData.enrolledStudentsData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-500/20">
                      <td className="px-4 py-3 text-center hidden sm:table-cell">{index + 1}</td>
                      <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                        <img src={item.student.imageUrl} alt="Profile" className="w-9 h-9 rounded-full" />
                        <span className="truncate">{item.student.name}</span>
                      </td>
                      <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card View for Small & Medium Screens */}
          <div className="lg:hidden space-y-4 w-full p-4">
            {dashboardData.enrolledStudentsData.map((item, index) => (
              <div key={index} className="p-4 border rounded-md shadow-sm bg-gray-50 w-full flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <img src={item.student.imageUrl} alt="Profile" className="w-9 h-9 rounded-full" />
                  <p className="font-medium truncate">{item.student.name}</p>
                </div>
                <p className="text-gray-600">Course: {item.courseTitle}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Dashboard;
