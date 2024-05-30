import React, { useEffect, useState } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState("#000000");

  const getRandomColor = ()=>{
    let colorStr = "0123456789abcdef";
    let color = "";
    for(let i=0 ; i < 6 ; i++){
      color += colorStr[Math.floor(Math.random() * 16)];
    }
    return  "#"+color;
  }

  const changeColor = (color)=>{
    document.body.style.backgroundColor = color;
  }

  return (
    <div className='bg-container flex justify-center items-center h-[100vh] w-[100%]'>
       <button onClick={()=>changeColor(getRandomColor())} className='border border-gray-400 bg-white font-bold px-4 py-3 rounded-md'>Change Color!! 😎</button>
    </div>
  )
}

export default App;