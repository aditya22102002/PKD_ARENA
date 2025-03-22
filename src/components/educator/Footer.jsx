import React from 'react'

function Footer() {
  return (
    <footer className=" bg-violet-300/50 flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t">
      <div className='flex items-center gap-4'>
        <img className="hidden md:block w-20" src="../asset/pkd_logo.png" alt="" />
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
        <p className='py-4 text-center text-xs md:text-sm text-black'>Copyright © 2023 PKD Arena. All Rights Reserved</p>

      </div>
      <div className='flex items-center gap-3 max-md:mt-4'>
        <a href="#">
          <img src="../asset/instagram_icon.svg" alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
