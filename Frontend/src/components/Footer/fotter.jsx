import React from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiFacebook, CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { TiSocialTwitterCircular, TiSocialGooglePlusCircular } from "react-icons/ti";

const Fotter = () => {
  return (
    <div className='bg-[#0b1437] text-white font-light text-sm'>
      
      {/*  Contact Top Section */}
      <div className='flex flex-col md:flex-row justify-around items-center md:divide-x divide-white/50 px-10 '>
        {/*  Location */}
        <div className='flex items-center gap-3 w-full md:w-1/3 justify-center md:mb-0 pt-4'>
          <CiLocationOn className='text-red-800 text-3xl' />
          <div>
            <p>54B, Tailstoi Town 5238 MT,</p>
            <p className='font-semibold'>La city, IA 522364</p> 
          </div>
        </div>

        {/* Email */}
        <div className='flex items-center gap-3 w-full md:w-1/3 justify-center  md:mb-0 px-4 pt-4'> 
          <TfiEmail className='text-red-800 text-3xl' />
          <div>
            <p>Email us :</p>
            <p className='font-semibold'>contact@autorex.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className='flex items-center gap-3 w-full md:w-1/3 justify-center px-4 pt-4'>
          <FiPhone className='text-red-800 text-3xl' />
          <div>
            <p>Call us on :</p>
            <p className='font-semibold'>+1800 456 7890</p>
          </div>
        </div>
      </div>
      <div className='border-gray-400  border-b-1'></div>

      {/* Main Section */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-10 py-10 max-w-7xl mx-auto'> 
        
        {/* Description */}
        <div>
          <p className="text-sm text-gray-300 font-normal">
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
            Override the digital divide additional clickthroughs.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className='text-lg text-gray-300 font-semibold mb-3'>Usefull Links</h3> 
          <ul className='space-y-2'>
            <li><Link to="/" className='text-gray-400 font-normal hover:text-white'>Home</Link></li>
            <li><Link to="/" className='text-gray-400 font-normal hover:text-white'>About Us</Link></li>
            <li><Link to="/" className='text-gray-400 font-normal hover:text-white'>Appointment</Link></li>
            <li><Link to="/" className='text-gray-400 font-normal hover:text-white'>Testimonials</Link></li>
            <li><Link to="/" className='text-gray-400 font-normal hover:text-white'>Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className='text-lg text-gray-300 font-semibold mb-3'>Our Services</h3>
          <ul className='space-y-2'>
            <li><Link to="/" className='text-gray-400 font-normal hover:text-white'>Performance Upgrade</Link></li>
            <li><Link to="/" className='text-gray-400 font hover:text-white'>Transmission Service</Link></li>
            <li><Link to="/" className='text-gray-400 font-normal hover:text-white'>Break Repair & Service</Link></li>
            <li><Link to="/" className='text-gray-400 font-normal hover:text-white'>Engine Service & Repair</Link></li>
            <li><Link to="/" className='text-gray-400 font-normal hover:text-white'>Tyre & Wheels</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className='text-lg text-gray-300 font-semibold mb-3'>Newsletter</h3>
          <p className='mb-4 font-normal text-gray-300'>Get latest updates and offers.</p>
          <div className='flex gap-3 text-4xl'> 
            <CiFacebook />
            <CiLinkedin />
            <TiSocialTwitterCircular />
            <TiSocialGooglePlusCircular />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Fotter;
