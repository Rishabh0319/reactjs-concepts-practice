import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import CartItem from './CartItem.jsx';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const [isCartActive, setIsCartActive] = useState(false);
  const cartItems = useSelector(state => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty,item)=> totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total,item)=> total + item.qty * item.price, 0);

  const navigate = useNavigate();

  return (
    <>
      <div className={`fixed top-0 right-0 w-full lg:w-[25vw] h-full p-5 bg-white ${isCartActive ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <IoMdClose onClick={() => setIsCartActive((prev) => !prev)} className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
        </div>

        <div className='h-[65%] overflow-auto'>
        {
          cartItems.length > 0 ? cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              qty={item.qty}
            />
          )) :
            <h2 className='text-center text-xl font-bold text-gray-800'>Your cart is empty</h2>
        }
        </div>

        <div className='absolute bottom-3 z-10'>
          <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
          <h3 className='font-semibold text-gray-800'>Total Amount: {totalPrice}</h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2' />
          <button onClick={()=>navigate("/success")} className='bg-green-500 font-bold text-white px-3 py-2 rounded-lg lg:w-[22vw] w-[90vw]'>Checkout</button>
        </div>
      </div>
      <FaShoppingCart onClick={() => setIsCartActive((prev) => !prev)} className={`rounded-full bg-white hover:text-green-500 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all text-orange-500"}`} />
    </>
  )
}

export default Cart