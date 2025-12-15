import FoodCard from '@/components/FoodCard/FoodCard';
import Title from '@/components/Title/Title';
import React from 'react'
const getFoods = async() =>{
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random')
    const data = await res.json()
    return data.foods || [];
}
async function Foods() {
    const foods = await getFoods()
  return (
    <div>
      <Title>Total {foods.length}Food Found</Title>
      <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto gap-4 mt-4'>
        {
            foods.map(food =><FoodCard food={food} key={food.id}></FoodCard>)
        }
      </div>
    </div>
  )
}

export default Foods
