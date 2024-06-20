import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {useDispatch} from 'react-redux';
import {removeFromCart, increaseQty, decreaseQty} from '../redux/slices/cartSlice';

const CartItem = ({id,name,price,img,qty}) => {

    const dispatch = useDispatch();

    return (
        <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
            <MdDelete onClick={()=>dispatch(removeFromCart(id))} className='absolute right-7 text-gray-600 cursor-pointer hover:text-red-600 hover:scale-150 transition-all ease-in-out'/>
            <img src={img} alt={name} className='w-[50px] h-[50px] rounded-full' />
            <div className='leading-5'>
                <h2 className='font-bold text-gray-800'>{name}</h2>
                <div className='flex justify-between items-center w-full'>
                    <span className='text-green-500 font-bold'>₹{price}</span>
                    <div className='flex justify-center items-center gap-2 absolute right-7'>
                        <FaMinus onClick={()=>dispatch(decreaseQty(id))} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                        <span>{qty}</span>
                        <FaPlus onClick={()=>dispatch(increaseQty(id))} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;