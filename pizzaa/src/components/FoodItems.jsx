import React from 'react'
import FoodCard  from './FoodCard';
import foodData from '../data/foodData';
import toast, {Toaster} from 'react-hot-toast';

const FoodItems = () => {
  const handleToast = (name)=>toast.success(`Added ${name}`);
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
    <div className='flex flex-wrap items-center justify-center gap-8 mx-6 my-10 lg:justify-start'>
      {
        foodData.map((food)=>(
          <FoodCard key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            description={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))
      }
    </div>
    </>
  )
}

export default FoodItems;