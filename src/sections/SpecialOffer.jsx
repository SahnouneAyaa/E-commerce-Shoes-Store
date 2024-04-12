import React from 'react'
import { offer } from '../../assets/images'
import Button from '../Components/Button'
import {arrowRight} from '../../assets/icons'

function SpecialOffer() {
  return (
    <section className='flex flex-wrap justify-center items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img src={offer} width={773} height={687} className='object-contain w-full ' alt="" />
      </div>

      <div  className='flex flex-1 flex-col pt-5'>
        <h2 className='font-planquin text-4xl capitalize font-bold lg:max-x-lg'>
          <span className='text-coral-red'> Special </span>
          Offer
        </h2>
        <p className=' text-lg info-text mt-6 mb-6 lg:max-w-sm'>
          Ensuring premium compfort and style , pur meticulously crafted footwear is designed
          to elevate your experience , providing you with unmatched quality ,
          innovation , and a touch of elegance
        </p>
        <p className='text-lg info-text lg:max-w-sm' >
          Our dedication to detail and exellence ensure your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='View details' iconURL={arrowRight}/>
          <Button label='Learn more' backgroundColor='bg-white' textColor='text-slate-gray' borderColor='border-slate-gray'/>
        </div>
      </div>      
    </section>
  )
}

export default SpecialOffer
