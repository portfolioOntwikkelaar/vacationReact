import React from 'react'
import BoraBora from '../assets/borabora.jpeg'
import BoraBora2 from '../assets/borabora2.jpeg'
import Maldives from '../assets/maldives.jpeg'
import Maldives2 from '../assets/maldives2.jpeg'
import Keywest from '../assets/keywest.jpeg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
      <h1>All-Inclusive Resorts</h1>
      <p className='py-4'>On the Carribean's Best locations</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
        <img className='w-full h-full object-cover' src={BoraBora2} alt="/" />
        <img className='w-full h-full object-cover' src={Maldives} alt="/" />
        <img className='w-full h-full object-cover' src={Maldives2} alt="/" />
        <img className='w-full h-full object-cover' src={Keywest} alt="/" />


      </div>
      
    </div>
  )
}

export default Destinations
