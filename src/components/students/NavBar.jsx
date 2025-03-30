import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserButton from "../UserButton"

function NavBar() {
  const user=localStorage.getItem("token")
  const navigate=useNavigate()
  const [isEducator, setIsEducator] = useState(true);

  return (
    <>
      {/* Injecting @keyframes inside JSX */}
      <style>
        {`
          @keyframes moveGlare {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>

      <div className="relative top-0 z-10 w-full flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-violet-200 overflow-hidden">

        <Link to={'/'}>
          <img src="../asset/pkd_logo.png" alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
        </Link>

        <div className="hidden md:flex items-center gap-5 text-white">
          <div className="flex items-center gap-5">
            {user && (
              <>
                <button 
                  className="hover:bg-white/20 hover:rounded-md text-black hover:px-2 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer" 
                  onClick={() => console.log('Educator Dashboard')}
                >
                  {isEducator ? 'Educator DashBoard' : ''}
                </button>
                |  
                <Link 
                  className="hover:bg-white/20 hover:rounded-md text-black hover:px-2 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg" 
                  to="/my-enrollments"
                >
                  My Enrollments
                </Link>
              </>
            )}
          </div>
          {user ? 
            <UserButton /> :
            <button 
              onClick={() => navigate('/sign-up')} 
              className="bg-violet-500 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-violet-600  hover:rounded-4xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Create Account
            </button>
          }
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2 sm:gap-5 text-white">
          <div className="flex items-center gap-2 text-xs">
            {user && (
              <>
                <Link to={'/educator'} className="text-black hover:text-white/70">{isEducator ? 'Educator DashBoard' : ''}</Link>
                |  
                <Link to="/my-enrollments" className="hover:text-white/70 text-black">My Enrollments</Link>
              </>
            )}
          </div>
          {user ? 
            <UserButton /> :
            <button onClick={() => navigate('/sign-up')} className="cursor-pointer">
              <img src="./asset/user_icon.svg" alt="" className="hover:scale-110 transition-all duration-300 hover:shadow-lg" />
            </button>
          }
        </div>
      </div>
    </>
  );
}

export default NavBar;
