import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-6'>
        <h2 className='my-3 text-orange-500 font-semibold text-3xl'>find The Best Food</h2>
        <div className='my-5 flex gap-3 overflow-x-auto scroll-smooth'>
        <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>All</button>
        <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>Lunch</button>
        <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>Breakfast</button>
        <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>Dinner</button>
        <button className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>Snacks</button>
        </div>
    </div>
  )
}

export default CategoryMenu