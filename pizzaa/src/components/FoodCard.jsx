import React from 'react';
import { FaStar } from "react-icons/fa";
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/slices/cartSlice';

const FoodCard = ({id,name,price,description,img,rating}) => {

  const dispatch = useDispatch();

  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg'>
      <img className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' src={img} alt={id} />
      <div className='text-sm flex justify-between '>
        <h2>{name}</h2>
        <span className='text-green-500 '>₹{price}</span>
      </div>
      <p className='text-sm font-normal'>{description.slice(0,80)}...</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
        <FaStar className='mr-1 text-yellow-400'/> {rating}
        </span>
        <button onClick={()=>dispatch(addToCart({id,name,price,img,rating,qty:1}))} className='py-1 px-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
      </div>
    </div>
  )
}

export default FoodCard