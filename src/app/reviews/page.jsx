import ReviewCard from '@/components/ReviewCard/ReviewCard';
import Title from '@/components/Title/Title';
import React from 'react'

const getReviews = async()=>{
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
    const data = await res.json()
    return data.reviews;
}

async function Reviews() {
    const reviews = await getReviews()
  return (
    <>
    
    <Title>Reviews</Title>
    
    <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto gap-4 my-8'>
      {
        reviews.map(review =><ReviewCard review={review} key={review.id}></ReviewCard>)
      }
    </div>
    </>
  )
}

export default Reviews
