import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
  const [isEducator, setIsEducator] = useState(true)
  const menuItems = [
    { name: 'DashBoard', path: '/educator', icon: 'home_icon.svg' },
    { name: 'Add Courses', path: '/educator/add-course', icon: 'add_icon.svg' },
    { name: 'My Courses', path: '/educator/my-courses', icon: 'my_course_icon.svg' },
    { name: 'Student Enrolled', path: '/educator/student-enrolled', icon: 'person_tick_icon.svg' },
    { name: 'Admins', path: '/educator/admin', icon: 'user_icon.svg' },
  ]
  return isEducator && (
    <div className='bg-violet-100/50 md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col'>
      {menuItems.map((items) => 
        (
          <NavLink key={items.name} to={items.path} end={items.path === '/educator'} className={({isActive})=> `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 ${isActive ? 'bg-violet-200 border-r-[6px] border-violet-500/70':'hover:bg-violet-200/90 border-r-[6px] border-white hover:border-violet-500/70'}` }>
            <img src={`../asset/${items.icon}`} alt="" className='w-6 h-6' />
            <p className='md:block hidden text-center'>{items.name}</p>
          </NavLink>
        )
      )}
    </div>
  )
}

export default SideBar
