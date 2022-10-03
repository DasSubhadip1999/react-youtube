import React from 'react'
import {Link} from 'react-router-dom'
import SuggestionVideos from './SuggestionVideos'

function Header() {
  return (
    <>
    <nav className='flex justify-between items-center py-4 bg-base-300 w-full fixed top-[-1px] z-10'>
        <div className='flex mx-2 items-center'>
            <img className='w-6 h-6' src='https://cdn-icons-png.flaticon.com/512/1384/1384012.png' alt='YT-logo' />
            <p className='uppercase mx-2 mb-[0px] font-bold first-letter:text-2xl'>YOUTUBE</p>
        </div>
        <div className='w-[53%] lg:w-[40%] mx-2'>
            <ul className='flex justify-between items-center mx-auto'>
                <li className='text-xl lg:text-2xl cursor-pointer'><i className="fa-brands fa-chromecast"></i></li>
                <li className='cursor-pointer'>
                    <div className="indicator">
                        <span className="indicator-item badge badge-primary">new</span> 
                        <div className="grid w-8 h-8 bg-base-300 place-items-center rounded-full">
                            <i className="fa-solid fa-bell text-xl"></i>
                        </div>
                    </div>
                </li>
                <li className='text-xl flex items-center lg:hidden xl:hidden cursor-pointer'>
                    <Link to='/search'><i className="fa-solid fa-magnifying-glass"></i></Link>
                </li>
                {/* display on big screen */}
                <li className=''>
                    <div className='search w-[120%]'>
                        <div className='flex justify-between items-center mx-auto'>
                            <input className='w-[90%] rounded-sm px-2 py-1 outline-0 bg-base-300 border-[1px] border-gray-500 mx-3' type='text' placeholder='Search Youtube' />
                            <button  className='text-xl rounded-full bg-base-200'><i className="fa-solid fa-microphone"></i></button>
                        </div>
                    </div>
                </li>
                <li className='grid items-center cursor-pointer'>
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='profile' />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    <SuggestionVideos />
    </>
  )
}

export default Header