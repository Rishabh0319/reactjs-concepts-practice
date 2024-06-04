import React from 'react';

const App = () => {
  const buttons = ["Push","Pop","Peek","isEmpty","isFull"];

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl m-4 font-bold'>Stack</h1>
      <div className='border border-gray-400 rounded-md w-1/3 p-4'>
        <section className='flex flex-col items-center justify-between'>
          <div className='w-full flex justify-center items-center'>
            <input type="text" placeholder='Enter a value' className='py-2 px-1 border border-gray-400 w-full rounded-md'/>
          </div>
          <div className='border border-b-gray-300 mt-2 py-4 w-full flex items-center justify-evenly'>
            {
              buttons.map((button,index)=> <button className='px-4 py-1 rounded-sm bg-[#007BFF] text-white' key={index}>{button}</button>)
            }
          </div>
        </section>
        <section>
          <div className='flex justify-center items-center py-2'>
            <p className='text-2xl font-bold'>Enter a value</p>
          </div>
          <div className='flex flex-col items-center justify-start mt-3'>
            <div className='flex items-center justify-center w-full p-1 mb-3 bg-blue-200 rounded-sm text-xl'>1</div>
            <div className='flex items-center justify-center w-full p-1 mb-3 bg-blue-200 rounded-sm text-xl'>2</div>
            <div className='flex items-center justify-center w-full p-1 mb-3 bg-blue-200 rounded-sm text-xl'>3</div>
            <div className='flex items-center justify-center w-full p-1 mb-3 bg-blue-200 rounded-sm text-xl'>4</div>
            <div className='flex items-center justify-center w-full p-1 mb-3 bg-blue-200 rounded-sm text-xl'>5</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App;