import React, { useState, useEffect } from 'react';
import { Camera, Pencil } from 'lucide-react';

function Update() {
  const [user, setUser] = useState({
    profilePicture: '',
    name: '',
    mobile: '',
    email: '',
    password: ''
  });

  const [editField, setEditField] = useState(null);
  const [newValue, setNewValue] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, profilePicture: URL.createObjectURL(file) });
  };

  const handleEdit = (field) => {
    setEditField(field);
    setNewValue(user[field]);
  };

  const handleUpdate = () => {
    setUser({ ...user, [editField]: newValue });
    setEditField(null);
  };

  return (
    <div className="min-h-screen flex items-start p-10 bg-gray-100">
      <div className="w-1/3 flex flex-col space-y-6">
        {/* Profile Picture Section */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <Camera className="w-12 h-12 text-gray-500" />
            </div>
          )}
        </div>
        <label className="px-4 py-2 bg-violet-600 text-white rounded-md font-semibold hover:bg-violet-700 transition cursor-pointer">
          Update Profile Picture
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>

        {/* User Info Section */}
        {['name', 'mobile', 'email', 'password'].map((field, index) => (
          <div key={index} className="flex items-center space-x-4">
            <label className="text-lg font-semibold text-gray-700 capitalize">{field}</label>
            {editField === field ? (
              <input 
                type={field === 'password' ? 'password' : 'text'} 
                value={newValue} 
                onChange={(e) => setNewValue(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500"
              />
            ) : (
              <span className="text-gray-800">{field === 'password' ? '********' : user[field]}</span>
            )}
            {editField === field ? (
              <button 
                className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                onClick={handleUpdate}
              >
                Update
              </button>
            ) : (
              <button 
                className="text-violet-600 hover:text-violet-800"
                onClick={() => handleEdit(field)}
              >
                <Pencil className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Update;
