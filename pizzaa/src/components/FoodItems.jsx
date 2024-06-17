import React from 'react'
import FoodCard  from './FoodCard';
import foodData from '../data/foodData';

const FoodItems = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center mx-6 my-10 lg:justify-start'>
      {
        foodData.map((food)=>(
          <FoodCard key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            description={food.desc}
            rating={food.rating}
            img={food.img}
          />
        ))
      }
    </div>
  )
}

export default FoodItems;