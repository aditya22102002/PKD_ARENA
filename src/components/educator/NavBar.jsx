import React from 'react'
import { Link } from 'react-router-dom';
import UserButton from '../UserButton';

function NavBar() {
  const user = localStorage.getItem("token");

  return  (
    <div className='bg-violet-300/30 flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3'>
      <Link to={'/'}>
        <img className='w-28 lg:w-32 cursor-pointer ' src="../asset/pkd_logo.png" alt="" />
      </Link>
      <div className='flex items-center gap-5 text-gray-500 relative'>
        <p>Welcome! {user? user.fullName:'Admin'}</p>
        {user? <UserButton/>: <img className='max-w-8' src='../asset/user_icon.svg' />}
      </div>
    </div>
  )
}

export default NavBar
