import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from '../../components/educator/NavBar'
import SideBar from '../../components/educator/SideBar'
import Footer from '../../components/educator/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../features/userSlice';


function Educator() {
  const user = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [isEducator, setIsEducator] = useState(true);
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
      setIsEducator(true);
    }
  }, [userData]);
  return isEducator&&user ? (
    <div className='text-default min-h-screen bg-white' >
      <NavBar />
      <div className='flex'>
        <SideBar />
        <div className='flex-1'>
          {<Outlet />}

        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div >
      <div>
        <h2 className=' font-bold text-center m-10 text-3xl'>You do Not have Access to this page. <Link className='text-blue-700 hover:text-blue-900 hover:underline'  to='/'>Click me to go back to homepage</Link></h2>
      </div>
    </div>)
}

export default Educator
