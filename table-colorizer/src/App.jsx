import React, { useEffect, useState } from 'react'

const App = () => {

  const [showWarningMsg, setShowWarningMsg] = useState(false);
  const [input, setInput] = useState("");
  const [boxes, setBoxes] = useState([
    { id: 1, color: false },
    { id: 2, color: false },
    { id: 3, color: false },
    { id: 4, color: false },
    { id: 5, color: false },
    { id: 6, color: false },
    { id: 7, color: false },
    { id: 8, color: false },
    { id: 9, color: false },
  ]);

  const colorIt = () => {
    let inputData = Number(input);
    if (!inputData) {
      setShowWarningMsg(true);
    }
    setInput("");
    setBoxes((prev) => {
      return prev.map((box) => box.id === inputData || box.color === true ? { ...box, color: true } : { ...box, color: false })
    });
  }

  const clearIt = () => {
    setInput("");
    if (showWarningMsg) {
      setShowWarningMsg(false);
    } 
       
    setBoxes((prev) => {
      return prev.map((box) => box.id && { ...box, color: false })
    }); 
  }


  return (
    <div className='flex justify-center items-center h-[100vh]'>

      <main className='border border-gray-600 rounded-md w-60 flex flex-col justify-start items-center'>
        <section className='w-full p-2'>
          <input onChange={(e) => { setInput(e.target.value) }} value={input} type="number" placeholder='enter number b/w 1-9' min={1} max={9} className='w-full h-8 border border-gray-400 rounded-md px-1' />
        </section>

        {(showWarningMsg) && <p className='text-red-600 text-[11px] font-bold'>Please enter a valid number between 1 to 9</p>}

        <section className='p-2'>
          <button onClick={colorIt} className='px-4 py-2 border border-gray-400 m-1 rounded-md bg-green-600 text-white'>Color Me</button>
          <button onClick={clearIt} className='px-4 py-2 border border-gray-400 m-1 rounded-md bg-red-600 text-white'>Clear Me</button>
        </section>
        <section className='flex flex-wrap gap-1 w-full justify-between p-2'>
          {
            boxes.map((box) => <div key={box.id} className={` ${box.color && 'bg-violet-700'} w-[70px] h-[50px] rounded-md flex justify-center items-center border border-gray-400`} >{box.id}</div>)
          }
        </section>
      </main>

    </div>
  )
}

export default App