import React from 'react'

const ServicesCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex flex-col items-start sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className=" w-11 h-11 bg-coral-red rounded-full flex items-center justify-center">
           <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
        <p className='mt-3 break-words text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServicesCard
