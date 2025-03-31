import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../features/allUserSlice';
import { CheckCircle, XCircle } from 'lucide-react';

function Admin() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUser.allUsers);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return users ? (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">Admin Panel - All Users</h2>
        
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          {/* Table View for Large Screens Only */}
          <table className="lg:table hidden w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="w-40 px-4 py-3 font-semibold">Profile</th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Phone</th>
                <th className="px-4 py-3 font-semibold">Educator</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="border-b border-gray-500/20">
                    <td className="px-4 py-3">
                      <img
                        src={`http://localhost:4000${user.profilePicture}` || '/default-avatar.png'}
                        alt={user.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.phone || 'N/A'}</td>
                    <td className="px-4 py-3">
                      {user.isEducator ? (
                        <CheckCircle className="text-green-500" size={20} />
                      ) : (
                        <XCircle className="text-red-500" size={20} />
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {!user.isEducator && (
                        <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-green-600 hover:cursor-pointer transition">
                          Make Educator
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Card View for Small & Medium Screens */}
          <div className="lg:hidden space-y-4 w-full p-4">
            {users.length > 0 ? (
              users.map((user) => (
                <div key={user._id} className="p-4 border rounded-md shadow-sm bg-gray-50 w-full">
                  <div className="flex items-center space-x-4">
                    <img
                      src={`http://localhost:4000${user.profilePicture}` || '/default-avatar.png'}
                      alt={user.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-medium">{user.name}</p>
                      <p className="text-gray-500 text-sm">{user.email}</p>
                      <p className="text-gray-600">{user.phone || 'N/A'}</p>
                      <p className="flex items-center">
                        {user.isEducator ? (
                          <CheckCircle className="text-green-500 mr-1" size={16} />
                        ) : (
                          <XCircle className="text-red-500 mr-1" size={16} />
                        )}
                        {user.isEducator ? 'Educator' : 'Not an Educator'}
                      </p>
                    </div>
                  </div>
                  {!user.isEducator && (
                    <button className="mt-3 bg-red-500 text-white px-3 py-1 rounded-md w-full hover:bg-green-600 transition hover:cursor-pointer">
                      Make Educator
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center py-4">No users found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Admin;
