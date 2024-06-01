import React, { useEffect, useState } from 'react';
import FOODS from './database/Food';
const App = () => {

  const item_per_page = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * item_per_page;
  const endIndex = startIndex + item_per_page;
  const tableData = FOODS.slice(startIndex, endIndex);
  const totalPages = Math.ceil(FOODS.length / item_per_page);

  const changePage = (page)=>{
      setCurrentPage(page)
  }

  return (
    <div className='flex flex-col justify-start items-center h-[100vh]'>
      <header className='w-full flex justify-center items-center mt-8'>
        <div className='w-64 flex items-center justify-between'>
          <button onClick={()=> changePage(currentPage-1)} disabled={currentPage === 1} className='border border-gray-500 flex justify-center items-center px-3 py-1 rounded-md'>previous</button>
          <span>Page <b>{currentPage}</b> of <b>{totalPages}</b></span>
          <button onClick={()=> changePage(currentPage+1)} disabled={currentPage === totalPages} className='bg-blue-600 text-white flex justify-center items-center px-3 py-1 rounded-md'>next</button>
        </div>
      </header>
      <main className='w-full  flex justify-center items-center mt-8'>
        <table className='w-1/2'>
          <thead>
            <tr className='text-3xl uppercase'>
              <th>#</th>
              <th>Food</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.map((food, index) =>
                <tr key={index} className='text-xl'>
                  <td className='text-center'>{food.id}</td>
                  <td className='text-center'>{food.name}</td>
                  <td className='text-center'>{food.price}$</td>
                </tr>)
            }
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default App;