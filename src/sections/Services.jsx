import React from 'react'
import ServicesCard from '../Components/ServicesCard'
import {services} from '../constants/index'


function Services() {
  return (
    <div className='max-container flex items-center gap-9 justify-center flex-wrap'>
      {services.map((service)=>{
        return <ServicesCard key={service.label} {...service}/>
      })}
    </div>
  )
}

export default Services
