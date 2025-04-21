import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div>
        <div className='flex w-full'>
            <div className='w-1/4 bg-red-600 text-white px-4 py-2'>
                Enjoy the Beso while we fix your car
            </div>
            <div className='w-3/4 bg-blue-950 text-white flex justify-between items-center px-4 py-2'>
                <span>Monday - Saturday 7:00AM - 6:00PM</span>
                <span className='font-semibold'>Welcome Admin</span>
            </div>
        </div>
        <div className='flex w-full items-center py-2 px-2 justify-around'>
                <img className='' src={logo} alt="logo"/>
                <div className='flex w-full  items-center justify-end gap-8 px-3'>
                    <nav className='flex gap-2 text-sm text-gray-950 font-bold'>
                        <Link to="/"><span className=''>HOME</span></Link>
                        <Link to="/About"><span>ABOUT US</span></Link>
                        <Link to="/Services"><span>SERVICES</span></Link>
                        <Link to="/contact"><span>CONTACT US</span></Link>
                        <Link to="/Admin"><span>ADMIN</span></Link>
                    </nav>
                    <span className='text-xl font-light text-gray-400'>|</span>
                    <button className='bg-gray-900 px-2 py-2 w-[100px] h-10'>
                        <span className='text-white'>LOG OUT</span>
                    </button>
                </div>

        </div>
    </div>



  )
}

export default Header
