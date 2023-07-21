import React, { useState } from 'react'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className='navbar p-8 w-screen bg-white flex justify-between items-center'>
        <div className='logo text-xl flex items-center cursor-pointer text-blueColor hover:text-blue-300'>
            <span className='font-bold'>Word</span>Search
        </div>
        <ul className='hidden navbar-links text-textColor lg:flex gap-4'>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Games</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        <i onClick={() => setShowMobileMenu(true)} className="fa-solid fa-bars text-textColor flex lg:hidden"></i>
        {showMobileMenu && 
         <div className='flex flex-col lg:hidden mobileMenu absolute top-[3%] right-[4%] p-4 rounded-lg bg-blueColor'>
            <div onClick={() => setShowMobileMenu(false)} 
                className='flex justify-end text-white mb-4'>
                <i class="fa-solid fa-x"></i>
            </div>
            <ul className='navbar-links text-white flex flex-col gap-6'>
                <li>
                    <a href="#">Dictionary</a>
                </li>
                <li>
                    <a href="#">Culture Words</a>
                </li>
            </ul>
         </div>
        }
    </div>
  )
}

export default Navbar