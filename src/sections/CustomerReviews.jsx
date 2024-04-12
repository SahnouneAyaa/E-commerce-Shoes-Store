import React from 'react'
import {reviews} from '../constants/index'
import ReviewCard from '../Components/ReviewCard'

function CustomerReviews() {
  return (
    <section>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our 
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuine stories from our satisfied Customers
         about their exceptional experiences with us
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>{
          return <ReviewCard 
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}/>
        })}
      </div>
    </section>
  )
}

export default CustomerReviews
