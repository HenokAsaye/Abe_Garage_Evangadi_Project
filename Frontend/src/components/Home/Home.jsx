import React from 'react'
import homeEngine from "../../assets/home-engine.jpg"
import aboutPage from "../../assets/about-us.png"
import aboutPage2 from "../../assets/about-us1.png"
import {Link} from "react-router-dom"
import  one from "../../assets/1.png"
import two from "../../assets/2.png"
import three from "../../assets/3.png"
import four from "../../assets/4.png"
import five from "../../assets/5.png"
import six from "../../assets/6.png"
import seven from "../../assets/7.png"
import eight from "../../assets/8.png"
import nine from "../../assets/9.png"
import ten from "../../assets/10.png"
import tires from "../../assets/tires.png"
import radar from "../../assets/radar.png"
import oldies from "../../assets/oldies.png"
import { FaPlayCircle } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div>
        {/* HeroSection */}
        <div className='w-full relative'>
            <div className='absolute pt-4 flex flex-col w-1/2 h-3/4 justify-center items-start'>
                <span className='text-gray-50 font-semibold text-[15px] w-full md:px-20 md:py-6 flex items-end gap-2'>Working since 1992 <span className='inline-block w-16 h-[1.8px] bg-red-600'></span></span>
                <span className='text-gray-50 font-bold text-2xl md:text-5xl md:px-20'>Tune Up Your Car for the next level</span>
            </div>
            <img className="w-full object-cover" src={homeEngine} alt="engine"/>
        </div>



        {/* AboutSection */}

        <div className='flex flex-col md:flex-row gap-4 md:gap-10 w-full items-center justify-center mt-10 mb-10 '>

                {/* Image Section */}
                <div className='flex gap-4 md:w-1/3 justify-center'>
                    <img src={aboutPage} alt="About 1" className="w-40 md:w-64 object-cover rounded" />
                    <img src={aboutPage2} alt="About 2" className="w-40 md:w-64 object-cover rounded" />
                </div>

                {/* Text Section */}
                <div className='flex flex-col gap-4 md:w-1/3 justify-baseline'>
                    <h2 className='textsm text-gray-800 '>Welcome to Our Workshop </h2>
                    <p className='text-gray-700 text-sm'>
                        <strong className='block mb-2 text-xl md:text-4xl'>We have 24 years of experience <span className='block bg-red-700 w-16 h-[2px] mt-2'></span></strong>
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,
                        a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
                         User generated content in real-time will have multiple touchpoints for offshoring.
                    </p>
                    <p className='text-gray-700 text-sm'>
                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.
                    </p>
                    <button className='bg-red-700 text-white px-6 py-2 rounded w-fit hover:scale-110 hover:cursor-pointer'>
                        About Us
                    </button>
                </div>
        </div>



        {/* ////////About Section End////// */}
        {/* ourServices Section */}
            <div className='flex flex-col w-full min-h-[700px] justify-center gap-6 items-center  md:mt-9 bg-gray-200 '>
                <div className='text-center  w-full md:px-45 md:text-left'>
                    <span className='text-2xl text-gray-900 md:text-2xl font-bold'>Our Services <span className='inline-block w-10 h-[2px] bg-red-500'></span></span>
                </div>
                <div className='w-3/4 text-gray-500 text-[15px]'>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
                </div>
                <div className='grid grid-row-1 gap-3 justify-center md:grid-cols-3 md:gap-6'>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' >
                        <div>
                            <h4 className='text-blue-950 text-[12px]'>SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-red-500'>READ MORE +</span>
                            <img  clasName="mb-10 py-10" src={one} alt="" /> 
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-800'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' > 
                        <div>
                            <h4 className="text-blue-950 text-[12px]">SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-red-500'>READ MORE +</span>
                            <img className='' src={two} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-800'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col gap-2 justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' >
                        <div>
                            <h4 className='text-blue-950 text-[12px]'>SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-red-500'>READ MORE +</span>
                            <img src={three} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-800'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col gap-2 justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' >
                        <div>
                            <h4 className='text-blue-950 text-[12px]'>SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>

                        <div className='flex justify-between'>
                            <span className='text-red-500'>READ MORE +</span>
                            <img src={four} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-800'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col gap-2 justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' >
                        <div>
                            <h4 className='text-blue-950 text-[12px]'>SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-red-500'>READ MORE +</span>
                            <img src={five} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-800'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col gap-2 justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' >
                        <div>
                            <h4 className='text-blue-950 text-[12px]'>SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-red-500 text-[15px]'>READ MORE +</span>
                            <img  src={six} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-800'></span>
                    </div>
                </div>
            </div>
        {/* ////// Our_Service_end Section ///// */}

        <div>
            {/* Quality service section */}
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-1/2 bg-red-600 flex-col items-end justify-center pl-50 pt-20'>
                    <h2 className='text-white font-bold text-2xl md:text-3xl mb-10'>Quality Service And customer Satisfaction !!</h2>
                    <p className='text-white text-sm'>
                        We utlize the most recent symtomatic gear to ensur your vechile is fixed or adjusted appropriatley and in an opportune manner.
                        We are an individual from Proffesional Auto servoce, a first classs excution of arrange, where free assistance offices share objective
                        of being world-class car adminstration focuses.
                    </p>
                </div>
                <div className='w-1/2 px-0'>
                    <img className='object-cover w-full' src={radar} alt="time" />
                </div>
            </div>

        </div>

            {/* marketing page */}
            <div className='flex flex-col md:flex-row gap-4 md:gap-10 w-full items-center justify-center mt-10 mb-10 md:pl-35 pr-35'>
                <div className='w-1/2 gap-10'>
                    <div>
                        <span className='font-bold text-xl md:text-3xl '>Why Choose Us</span>
                        <span className='inline-block ml-5 bg-red-500 h-[2px] w-16'></span> 
                        <p className='text-sm text-gray-700'>Bring to the table win-win surviaval stratagies to insure proactive domination.
                            At the end of the day,going forward, a new normal that has evolved from
                            generation heading towards.</p>
                    </div>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className='relative flex gap-2'>
                                <img src={seven} alt="" />
                                <span className='p-3 '>Certified Expert Mechanics</span>
                                <span className='absolute bg-gray-500 h-px w-3/4 bottom-0 left-0'></span>
                            </div>
                            <div className='relative flex gap-2'>
                                <img src={eight} alt="" />
                                <span className='p-3 '>Certified Expert Mechanics</span>
                                <span className='absolute bg-gray-500 h-px w-3/4 bottom-0 left-0'></span>
                            </div>
                            <div className='relative flex gap-2'>
                                <img src={nine} alt="" />
                                <span className='p-3 '>Certified Expert Mechanics</span>
                                <span className='absolute bg-gray-500 h-px w-3/4 bottom-0 left-0'></span>
                            </div>
                            <div className='relative flex gap-2'>
                                <img src={ten} alt="" />
                                <span className='p-3 '>Certified Expert Mechanics</span>
                                <span className='absolute bg-gray-500 h-px w-3/4 bottom-0 left-0'></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div>
                        <span className='font-bold text-xl md:text-3xl '>Additional Services</span>
                        <span className='inline-block ml-5 bg-red-500 h-[2px] w-16'></span> 
                    </div>
                    <div className='flex gap-10  '>
                        <div>
                            <img src={oldies} alt="" />
                        </div>
                        <div>
                            <ul className='list-disc text-gray-600'>
                                <li >General Auto Repair & Maintenance </li>
                                <li>Transmission Repair & Replacement </li>
                                <li>Tire Repair and Replacement </li>
                                <li>State Emissions Inspection </li>
                                <li>Break Job / Break Services </li>
                                <li>Electrical Diagnostics </li>
                                <li>Fuel System Repairs </li>
                                <li>Starting and Charging Repair </li>
                                <li>Steering and Suspension Work </li>
                                <li>Emission Repair Facility </li>
                                <li>Wheel Alignment </li>
                                <li>Computer Diagaonstic Testing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        {/* we are leader */}
        <div className='w-full relative my-8' >
            <img src={tires} alt="Hero Section" className='w-full object-cover h-[400px] -z-40  '/>
            <div className='absolute top-1/3 left-[100px]  text-white  '>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-4'>
                      <span className='text-sm'>Working Since 1992 </span>
                      <div className='border-red-600 border-b-2 -pt-7 w-7' ></div>
                    </div>
                    <span className='text-5xl font-bold  break-words'>We are leader <br /> in Car Mechanichal Work</span>
                </div>
                <div className='flex gap-5'>
                  <div className='pt-5 text-6xl text-red-600 pl-2 '>
                    <FaPlayCircle  />
                  </div >
                  <div className='pt-5'>
                    <span className='text-xs font-semibold'>WATCH INTO VIDEO <br /> ABOUT US</span>
                  </div>
                </div>
            </div>
        </div>

        {/* schedule appointment */}
        <div className='w-[870px] h-[130px] ml-[250px] my-10 mb-20 bg-red-600'>
          <div className='flex gap-9'>
            <div className='font-bold text-white flex flex-col pt-8 pl-9'>
              <span className='text-2xl'>Schedule Your Appointment Today</span>
              <span className='text-sm'>Your automotive Repair & Maintainace service specialist</span>
            </div>
            <div className='pt-8 flex'>
              <span className='font-bold text-3xl text-white'>1800.358.2340</span>
              <Link className=' group hover:scale-110 ease-out transition-all ml-7 w-[160px]  bg-red-50 text-sm flex justify-center items-center h-14 -mt-2'>
                <span className='font-bold -ml-5'> CONTACT US </span>
                <div className=' pl-3 text-[17px] '>
                  <IoArrowForwardOutline className=''/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      
        
    </div>

  )
}

export default Home