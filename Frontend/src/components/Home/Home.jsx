import React from 'react'
import homeEngine from "../../assets/home-engine.jpg"
import aboutPage from "../../assets/about-us.png"
import aboutPage2 from "../../assets/about-us1.png"
import  one from "../../assets/1.png"

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
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-900'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' > 
                        <div>
                            <h4 className="text-blue-950 text-[12px]">SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-red-500'>READ MORE +</span>
                            <img className='' src={one} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-900'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col gap-2 justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' >
                        <div>
                            <h4 className='text-blue-950 text-[12px]'>SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-red-500'>READ MORE +</span>
                            <img src={one} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-900'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col gap-2 justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' >
                        <div>
                            <h4 className='text-blue-950 text-[12px]'>SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>

                        <div className='flex justify-between'>
                            <span className='text-red-500'>READ MORE +</span>
                            <img src={one} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-900'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col gap-2 justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' >
                        <div>
                            <h4 className='text-blue-950 text-[12px]'>SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-red-500'>READ MORE +</span>
                            <img src={one} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-900'></span>
                    </div>
                    <div className='bg-white w-[300px] h-[150px] flex flex-col gap-2 justify-around px-2 scroll-py-40 hover:scale-110 relative group hover:cursor-pointer' >
                        <div>
                            <h4 className='text-blue-950 text-[12px]'>SERVICE AND REPAIRS</h4>
                            <h2 className='text-blue-950 font-bold'>Performance Upgrade</h2>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-red-500 text-[15px]'>READ MORE +</span>
                            <img  src={one} alt="" />
                        </div>
                        <span className=' absolute left-0 bottom-0 w-full bg-red-500 h-[3px] group-hover:bg-blue-900'></span>
                    </div>
                </div>
            </div>
        {/* ////// Our_Service_end Section ///// */}

        <div>

        </div>



    </div>

  )
}

export default Home