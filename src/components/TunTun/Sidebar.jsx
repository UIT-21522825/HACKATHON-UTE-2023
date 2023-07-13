import React from 'react'
import Logo from 'logo.png'
import {AiOutlineHome,AiOutlineSetting,AiOutlineAppstore} from 'react-icons/ai'
import {MdAccountCircle,MdOutlineContactless} from 'react-icons/md'
import {BsCreditCard2Back} from 'react-icons/bs'
import {BiCalculator} from 'react-icons/bi'
import {GrDocumentPerformance} from 'react-icons/gr'

const Sidebar = () => {
    const menu = [
        {name: "HOME", icon: <AiOutlineHome/>},
        {name: "Account", icon: <MdAccountCircle/>},
        {name: "Card", icon: <BsCreditCard2Back/>},
        {name: "Contacts", icon: <MdOutlineContactless/>},
        {name: "Loan Calculator", icon: <BiCalculator/>},
        {name: "Settings", icon: <AiOutlineSetting/>},

    ]

    const organisation = [
        {name: "Apps & Perks", icon: <AiOutlineAppstore/>},
        {name: "Tax Forms", icon: <GrDocumentPerformance/>},
        {name: "Organisation Settings", icon: <BsCreditCard2Back/>},

    ]
  return (
    <div className='h-screen border-r border-gray-200 w-64 px-9 py-4 space-y-4'>
        <div className='flex flex-row items-center justify-center'>
            <img src={Logo} alt="/" className='w-14 h-12'/>
            <h2>GAUGAU.</h2>
        </div>

        <div>
            <div>
                <h3 className='pl-4 text-gray-800'>Menu</h3>
                <ul className='space-y-1'>
                    {
                        menu.map((item, index) => {
                            return (
                                <li key={index} className='flex flex-row items-center gap-6 text-gray-600'>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </li>
                            );
                    })}
                </ul>
            </div>

            <div>
                <h3 className='pl-4 text-gray-800'>Organisation</h3>
                <ul className='space-y-1'>
                    {
                        organisation.map((item, index) => {
                            return (
                                <li key={index} className='flex flex-row items-center gap-6 text-gray-600'>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </li>
                            );
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar