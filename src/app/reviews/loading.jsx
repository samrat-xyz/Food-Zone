import ReviewCardSkeleton from '@/components/ReviewCardSkeleton/ReviewCardSkeleton'
import React from 'react'

function loading() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto gap-4 my-8'>
      {
        [...Array(12)].map((_,index)=><ReviewCardSkeleton key={index}></ReviewCardSkeleton>)
      }
    </div>
  )
}

export default loading
