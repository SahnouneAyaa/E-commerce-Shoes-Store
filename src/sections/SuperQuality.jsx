import React from 'react'
import Button from '../Components/Button'
import {shoe8} from '../../assets/images'


function SuperQuality() {
  return (
    <section id='about-us' className='flex items-start justify-between max-lg:flex-col gap-10 max-container w-full'>
      <div  className='flex flex-1 flex-col pt-5'>
        <h2 className='font-planquin text-4xl capitalize font-bold lg:max-x-lg'>
          We Provide You 
          <span className='text-coral-red'> Super</span>
          <span className='text-coral-red'> Quality</span> Shoe
        </h2>
        <p className=' text-lg info-text mt-6 mb-6 lg:max-w-sm'>
          Ensuring premium compfort and style , pur meticulously crafted footwear is designed
          to elevate your experience , providing you with unmatched quality ,
          innovation , and a touch of elegance
        </p>
        <p className='text-lg info-text lg:max-w-sm'>
          Our dedication to detail and exellence ensure your satisfaction
        </p>
        <div className="mt-8">
          <Button label='View details'/>
        </div>
      </div>
      <div>
        <img src={shoe8} alt="" width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality

