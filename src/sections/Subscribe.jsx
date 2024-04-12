import React from 'react'
import Button from '../Components/Button'

function Subscribe() {
  return (
    <section id='contact-us' className='max-conatiner flex justify-between items-center max-lg:flex-col gap-10'>
      <h3 
      className='w-full lg:min-w-[60%] text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
      Sign Up from <span className='text-coral-red'>Updates </span> & Newsletter</h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5p-2.5 sm:border-slate-gray rounded-full'>
      <input type="text" placeholder='subscribe@nike.com' className='input' />
      <div className='flex items-center max-sm:justify-end max-sm:w-full'>
        <Button label="Sign Up"/>
      </div>
      </div>
    </section>
  )
}

export default Subscribe
