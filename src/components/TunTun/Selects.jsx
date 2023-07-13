import React from 'react'

import Dog from '../../assets/pet1.jpg'
import Cat from '../../assets/pet2.jpg'
import Bird from '../../assets/pet3.jpg'
import Fish from '../../assets/pet4.jpg'
import Rabit from '../../assets/pet5.jpg'
import Hamster from '../../assets/pet6.jpg'
import SelectsCard from './SelectsCard'


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCard bg={Dog} text="Bora Bora"/>
        <SelectsCard bg={Cat} text="Maldives"/>
        <SelectsCard bg={Bird} text="Antiqua"/>
        <SelectsCard bg={Fish} text="Cozumel"/>
        <SelectsCard bg={Rabit} text="Jamica"/>
        <SelectsCard bg={Hamster} text="Key West"/>
    </div>
  )
}

export default Selects