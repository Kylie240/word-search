import React from 'react'

const Footer = () => {
  return (
    <div className='header flex justify-center rounded-t-lg bg-blueColor p-4 mt-8'>
        <div className='search-container text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-start p-4 max-w-[1300px]'>
            <div className='logo flex flex-col text-white items-center gap-2'>
                <p className='text-2xl'>
                    <span className='font-bold'>Word</span>Search
                </p>
                <p className='w-2/3 text-center text-sm'>We are a handy reverse dictionary app that lets you look up a word based on its definition.</p>
            </div>
            <ul className='flex flex-col justify-center items-center gap-2'>
            <h5 className='font-bold mb-1'>Company</h5>
                <li>
                <a className='hover:text-blue-300' href="#">About</a>
                </li>
                <li>
                <a className='hover:text-blue-300' href="#">Careers</a>
                </li>
                <li>
                <a className='hover:text-blue-300' href="#">Shop</a>
                </li>
            </ul>
            <ul className='flex flex-col justify-center items-center gap-2'>
                <h5 className='font-bold mb-1'>Additional Info</h5>
                <li>
                <a className='hover:text-blue-300' href="#">Contact Us</a>
                </li>
                <li>
                <a className='hover:text-blue-300' href="#">Cookies, terms, & privacy</a>
                </li>
                <li>
                <a className='hover:text-blue-300' href="#">More Infor</a>
                </li>
            </ul>
            <div className='text-white flex flex-col justify-start items-center'>
                <h6 className='font-bold mb-2'>Follow Us</h6>
                <div className='flex gap-2 p-2'>
                    <i class="fa-brands cursor-pointer fa-xl fa-square-facebook hover:text-blue-300"></i>
                    <i class="fa-brands cursor-pointer fa-xl fa-square-instagram hover:text-blue-300"></i>
                    <i class="fa-brands cursor-pointer fa-xl fa-square-twitter hover:text-blue-300"></i>
                    <i class="fa-brands cursor-pointer fa-xl fa-square-pinterest hover:text-blue-300"></i>
                    <i class="fa-brands cursor-pointer fa-xl fa-linkedin hover:text-blue-300"></i>
                </div>
                <p className='py-2'>Get the Word of the Day every day!</p>
                <div className='flex'>
                    <input type="email" placeholder='Enter your email' className='rounded-l-lg p-3 outline-none text-textColor' />
                    <div className='bg-textColor p-2 text-sm flex justify-center items-center cursor-pointer rounded-r-lg'>Sign Up</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer