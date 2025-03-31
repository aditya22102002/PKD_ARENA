import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserButton from "../UserButton";
import { Menu } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../features/userSlice';

function NavBar() {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEducator, setIsEducator] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { userData } = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (userData && userData.isEducator === true) {
      setIsEducator(true);
    } else {
      setIsEducator(false);
    }
  }, [userData]);

  // Close menu when clicking outside
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
    <>
      {/* Navbar */}
      <div className="top-0 left-0 w-full z-[9999] flex items-center justify-between px-4 sm:px-10 md:px-5 lg:px-26 border-b border-gray-500 py-4 bg-violet-200 ">

        {/* Logo */}
        <Link to={'/'}>
          <img src="../asset/pkd_logo.png" alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
          
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          <Link className="hover:bg-white/20 hover:rounded-md text-black hover:px-2 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer" to="/">Home</Link>
          <Link className="hover:bg-white/20 hover:rounded-md text-black hover:px-2 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer" to="/course-list">Courses</Link>
          {user && (
            <>
              {isEducator && <Link to={'/educator'} className="text-black hover:text-white transition-all" onClick={() => setMenuOpen(false)}>Educator Dashboard</Link>}
              <Link
                className="hover:bg-white/20 hover:rounded-md text-black hover:px-2 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                to="/my-enrollments"
              >
                My Enrollments
              </Link>
            </>
          )}
          {user ? <UserButton /> :
            <button onClick={() => navigate('/sign-up')} className="bg-violet-500 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-violet-600 transition-all">Login/ Signup</button>
          }
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative" ref={menuRef}>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none bg-violet-500 p-2 shadow-lg">
            <Menu size={28} className="text-white" />
          </button>

          {/* Sidebar Menu (Fixed to Navbar) */}
          <div className={`absolute top-full right-0  w-56 bg-violet-300/80 shadow-lg transition-transform duration-300 ease-in-out origin-top-right p-4 flex flex-col items-start space-y-4 z-[9999]  ${menuOpen ? 'block' : 'hidden'}`}>
            {user ? <UserButton /> :
              <button onClick={() => { navigate('/sign-up'); setMenuOpen(false); }} className="bg-violet-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-violet-600 transition-all">Login/ Signup</button>
            }
            <Link to={'/'} className="text-black hover:text-white transition-all" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to={'/course-list'} className="text-black hover:text-white transition-all" onClick={() => setMenuOpen(false)}>Courses</Link>
            {user && (
              <>
                {/* <Link to={'/educator'} className="text-black hover:text-white transition-all" onClick={() => setMenuOpen(false)}>{isEducator ? 'Educator Dashboard' : ''}</Link> */}
                {isEducator && <Link to={'/educator'} className="text-black hover:text-white transition-all" onClick={() => setMenuOpen(false)}>Educator Dashboard</Link>}
                <Link to={'/my-enrollments'} className="text-black hover:text-white transition-all" onClick={() => setMenuOpen(false)}>My Enrollments</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
