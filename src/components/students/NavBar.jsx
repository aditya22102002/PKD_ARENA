import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';


function NavBar() {

  const { openSignIn } = useClerk()
  const { user } = useUser()
  const [isEducator, setIsEducator] = useState(true)


  return (
    <div className='flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-violet-200/70' >
      <Link to={'/'}>
        <img src="../asset/pkd_logo.png" alt="Logo" className='w-28 lg:w-32 cursor-pointer ' />
      </Link>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5 ' >
          {
            user && <>
              <button className='hover:bg-violet-400 
            hover:rounded-md hover:p-0.5 hover:text-white  transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(0,0,0,0)] hover:shadow-violet-600 cursor-pointer' onClick={'/educator'} >{isEducator ? 'Educator DashBoard' : ''}</button>
              |  <Link className='hover:bg-violet-400 
            hover:rounded-md hover:p-0.5 hover:text-white  transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(0,0,0,0)] hover:shadow-violet-600' to='/my-enrollments'>My Enrollments</Link>
            </>}
        </div>
        {
          user ? <UserButton /> :
            <button onClick={() => openSignIn()} className='bg-violet-700 text-white px-5 py-2 rounded-full cursor-pointer 
            hover:bg-violet-900 
            hover:rounded-4xl hover:text-white  transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_5px_rgba(0,0,0,0)] hover:shadow-violet-600
            ' >Create Account</button>}
      </div>
      {/* for phone screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-grey-500' >
        <div className='flex items-center gap-2 text-xs' >

          {
            user && <>
              <Link   to={'/educator'} >{isEducator ? 'Educator DashBoard' : ''}</Link>
              |  <Link  to='/my-enrollments'>My Enrollments</Link>
            </>}
        </div>
        {
          user ? <UserButton /> :
            <button onClick={() => openSignIn()} className='cursor-pointer' ><img src="./asset/user_icon.svg" alt="" className='
            hover:rounded-4xl hover:text-white  transition-all duration-300 hover:scale-130 hover:shadow-[0px_0px_20px_rgba(0,0,0,0)] hover:shadow-violet-600'/></button>}
      </div>
    </div>
  )
}

export default NavBar
