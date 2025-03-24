import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Searchbar({data}) {

  const navigate=useNavigate()
  const [input,setInput]=useState(data ? data:'')
  const onSearchHandler=(e)=>{
    e.preventDefault()
    navigate('/course-list/'+input)
  }

  return (
      <form onSubmit={onSearchHandler} action="" className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-800/20 rounded 
      '>
        <img src="./asset/search_icon.svg" alt="" className='md:w-auto w-10 px-3'/>
        <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Search for Courses' className='outline-none w-full h-full  text-gray-500/80 
        
        '/>
        <button type='submit' className='cursor-pointer bg-violet-700 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1
        hover:bg-violet-800 
            hover:rounded-md hover:text-white  transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(0,0,0,0)] hover:shadow-violet-600
        '>Search</button>
      </form>
  )
}

export default Searchbar
