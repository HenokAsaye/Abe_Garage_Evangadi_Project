import React from 'react'
import homeEngine from "../../assets/home-engine.jpg"

const Home = () => {
  return (
    <div className='w-full relative'>
        {/* HeroSection */}
        <div className='absolute pt-4 flex flex-col w-1/2 h-3/4 justify-center items-start'>
            <span className='text-gray-50 font-semibold text-[15px] w-full md:px-20 md:py-6 flex items-end gap-2'>Working since 1992 <span className='inline-block w-16 h-[1.8px] bg-red-600'></span></span>
            <span className='text-gray-50 font-bold text-2xl md:text-5xl md:px-20'>Tune Up Your Car for the next level</span>
        </div>
        <img className="w-full object-cover " src={homeEngine} alt="engine"/>
    </div>
  )
}

export default Home