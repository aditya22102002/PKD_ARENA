import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess2 } from './toast';
import { User, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/userSlice';

function UserButton() {
  const user = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  
  const [loggedInUser, setLoggedInUser] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser') || 'User');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setTimeout(() => {
      handleSuccess2("Log Out Success");
      navigate('/login');
    }, 1000);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center cursor-pointer" ref={menuRef}>
      <div
        className="flex flex-col items-center cursor-pointer bg-violet-300 rounded-md hover:bg-violet-400 transition-all"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        
        <img className='w-10 h-10' src={`http://localhost:4000${userData.profilePicture}`} alt="" />
        <span className="sm:hidden text-black font-semibold mt-1">Hi, {loggedInUser}</span>
      </div>

      {/* Sidebar Menu for Medium and Large Screens */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-violet-200/80 shadow-lg p-5 transform transition-transform ${menuOpen ? "translate-x-0" : "translate-x-full"} md:block hidden`}>
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <X className="w-6 h-6 text-black" />
        </button>
        <div className="flex flex-col items-center space-y-4 mt-10">
          <h2 className="text-lg font-semibold">Hi, {loggedInUser}</h2>
          <button
            className="w-full px-4 py-2 bg-gray-100 text-black rounded-md hover:bg-violet-300"
            onClick={() => { navigate('/update-user'); setMenuOpen(false); }}
          >
            Update Profile
          </button>
          <button
            className="w-full px-4 py-2 bg-gray-100 text-red-600 rounded-md hover:bg-red-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dropdown for Small Screens */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 mt-2 bg-white shadow-lg rounded-lg p-3 w-48 z-[9999]">
          <button
            className="w-full px-4 py-2 bg-gray-100 text-black rounded-md hover:bg-violet-300"
            onClick={() => { navigate('/update-user'); setMenuOpen(false); }}
          >
            Update Profile
          </button>
          <button
            className="w-full px-4 py-2 bg-gray-100 text-red-600 rounded-md hover:bg-red-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserButton;
