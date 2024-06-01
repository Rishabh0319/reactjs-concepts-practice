import React from 'react';

const App = () => {
  return (
    <div className='flex flex-col justify-start items-center h-[100vh]'>
      <header className='w-full flex justify-center items-center mt-8'>
        <div className='w-64 flex items-center justify-between'>
           <button disabled className='border border-gray-500 flex justify-center items-center px-3 py-1 rounded-md'>previous</button>
           <span>Page <b>1</b> of <b>4</b></span>
           <button className='border-blue-800 bg-blue-600 text-white flex justify-center items-center px-3 py-1 rounded-md'>next</button>
        </div>
      </header>
      <main className='w-full  flex justify-center items-center mt-8'>
        <table className='w-1/2'>
          <tr className='text-3xl uppercase'>
            <th>#</th>
            <th>Food</th>
            <th>Price</th>
          </tr>
          <tr className='text-xl'>
            <td className='text-center'>1</td>
            <td className='text-center'>Pizza</td>
            <td className='text-center'>10$</td>
          </tr> 
          <tr className='text-xl'>
            <td className='text-center'>2</td>
            <td className='text-center'>Burger</td>
            <td className='text-center'>8$</td>
          </tr> 
          <tr className='text-xl'>
            <td className='text-center'>3</td>
            <td className='text-center'>Momos</td>
            <td className='text-center'>6$</td>
          </tr> 
        </table>
      </main>
    </div>
  )
}

export default App