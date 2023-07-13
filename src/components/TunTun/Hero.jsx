import React from 'react'
import dogVid from '../../assets/cho.mp4'
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-sreen relative'>
        <video className='w-full h-full object-cover'
                src={dogVid}
                autoPlay
                loop
                muted
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/20'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>All About Pets</h1>
            <h2 className='py-4'>Find What Your Pet Needs Here To Make Your Pet Happy</h2>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px] sm:[400px] font-[Poppins] focus:outline-none pl-4' type='text' placeholder='Search...'/>
                </div>
                <div>
                    <button>
                        <AiOutlineSearch size={20} className='icon' style={{color:'#ffffff'}}/>
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Hero