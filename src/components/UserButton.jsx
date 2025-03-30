import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSuccess2 } from './toast'

function UserButton() {
  const [loggedInUser, setLoggedInUser]=useState('')
  const navigate=useNavigate()
  const handleLogout=(e)=>{
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')

    setTimeout(()=>{
      handleSuccess2("Log Out Success")
      navigate('/login')
    },1000)
  }
  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])
  return (
    <div className='text-black bg-violet-300 p-1 rounded'>
      Hi, <span onClick={handleLogout} className='font-semibold cursor-pointer hover:text-red-700'>{loggedInUser}</span>
    </div>
  )
}

export default UserButton
