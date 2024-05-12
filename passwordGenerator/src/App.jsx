import React, { useEffect, useState } from 'react';

const App = () => {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [isNumInclude, setIsNumInclude] = useState(false);
  // const [isSmallCharInclude, setIsSmallCharInclude] = useState(true);
  const [isCapitalCharInclude, setIsCapitalCharInclude] = useState(false);
  const [isSpecialCharInclude, setIsSpecialCharInclude] = useState(false);

  const generatePassword = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    let capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChar = "`~!@#$%^&*()_+{}[]|";

    if (capChar) str += capChar;
    if (numbers) str += numbers;
    if (specialChar) str += specialChar;

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }

  useEffect(() => {
    generatePassword();
  }, [password, length, isNumInclude, isCapitalCharInclude, isSpecialCharInclude])

  return (
    <div className='flex flex-col p-3 border-2 rounded-sm border-sky-600 w-1/3 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>
      <h3 className='text-2xl'>Password Generator</h3>
      <input type="text" className='border border-blue-600 p-1' />
      <div className='flex justify-start items-center'>
        <input type="range" max={80} defaultValue={8} onChange={(e)=>setLength(e.target.value)}/>
        <p>({length})</p> 
      </div>
      <div className='border-1 border-blue-500 rounded-md'>
        <label htmlFor="num" className='flex items-center'>
          <input type="checkbox" name="" id="num" />
          <p className='px-1'>Numbers</p>
        </label>
        <label htmlFor="capChar" className='flex items-center'>
          <input type="checkbox" name="" id="capChar" />
          <p className='px-1'>Capital Letters</p>
        </label>
        <label htmlFor="specialChar" className='flex items-center'>
          <input type="checkbox" name="" id="specialChar" />
          <p className='px-1'>Special Charactor</p>
        </label>
      </div>
      <button className='bg-blue-600 text-white font-semibold p-2 rounded-lg mt-2'>Generate Password</button>
    </div>
  )
}

export default App;