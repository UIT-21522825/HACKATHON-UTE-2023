import React from 'react'
import Dog from '../../assets/pet1.jpg'
import Cat from '../../assets/pet2.jpg'
import Bird from '../../assets/pet3.jpg'
import Fish from '../../assets/pet4.jpg'
import Rabit from '../../assets/pet5.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All types of pets</h1>
        <p className='py-4'>Some quality pictures of pets</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4mgap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-spam-2 md:col-span-3 row-span-2' src={Dog} alt="/"/>
            <img className='w-full h-full object-cover' src={Cat} alt="/"/>
            <img className='w-full h-full object-cover' src={Bird} alt="/"/>
            <img className='w-full h-full object-cover' src={Fish} alt="/"/>
            <img className='w-full h-full object-cover' src={Rabit} alt="/"/>
        </div>
    </div>
  )
}

export default Destinations