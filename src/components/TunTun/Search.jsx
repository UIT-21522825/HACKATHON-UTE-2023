import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>THINGS TO KNOW WHEN KEEPING PET</h2>
                <p className='py-4 text-justify pr-6'>
                Pets, especially dogs, have always had a close relationship with people. Our habits and emotions will directly affect their behavior. Therefore, when deciding to keep a pet, you should consider carefully in caring for and instructing them to avoid unfortunate accidents that affect everyone around.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-4 py-4 pr-5'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><MdOutlineTravelExplore size={50}/></button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><RiCustomerService2Fill size={50}/></button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className='border text-center'>
                <p className='pt-4'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destinations</label>
                    <select className='border rounded-md p-2'>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Bird</option>
                        <option>Fish</option>
                        <option>Rabit</option>
                    </select>
                </div>
                <div className='flex flex-col my-4'>
                    <label>Time Order</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <div className='flex flex-col my-4'>
                    <label>Arrival time</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <button className='w-full my-4'>Prices & Pets available</button>
            </form>
        </div>
    </div>
  )
}

export default Search