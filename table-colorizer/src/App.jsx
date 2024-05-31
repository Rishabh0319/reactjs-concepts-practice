import React, { useState } from 'react'

const App = () => {

  const [showWarningMsg, setShowWarningMsg] = useState(false);

  return (
    <div className='flex justify-center items-center h-[100vh]'>

      <main className='border border-gray-600 rounded-md w-60 flex flex-col justify-start items-center'>
        <section className='w-full p-2'>
          <input type="number" placeholder='enter number b/w 1-9' min={1} max={9} className='w-full h-8 border border-gray-400 rounded-md px-1'/>
        </section>
        
        {(showWarningMsg) && <p className='text-red-600 text-[11px] font-bold'>Please enter a valid number between 1 to 9</p>}
        
        <section className='p-2'>
          <button className='px-4 py-2 border border-gray-400 m-1 rounded-md bg-green-600 text-white'>Color Me</button>
          <button className='px-4 py-2 border border-gray-400 m-1 rounded-md bg-red-600 text-white'>Clear Me</button>
        </section>
        <section className='flex flex-wrap gap-1 w-full justify-between p-2'>
          <div className='w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400'>1</div>
          <div className='w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400'>2</div>
          <div className='w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400'>3</div>
          <div className='w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400'>4</div>
          <div className='w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400'>5</div>
          <div className='w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400'>6</div>
          <div className='w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400'>7</div>
          <div className='w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400'>8</div>
          <div className='w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400'>9</div>
        </section>
      </main>

    </div>
  )
}

export default App