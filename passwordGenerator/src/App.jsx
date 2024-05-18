import React, { useEffect, useState, useCallback, useRef } from 'react';

const App = () => {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  // const [isSmallCharInclude, setIsSmallCharInclude] = useState(true);
  const [isNumInclude, setIsNumInclude] = useState(false);
  const [isCapitalCharInclude, setIsCapitalCharInclude] = useState(false);
  const [isSpecialCharInclude, setIsSpecialCharInclude] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {

    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    let capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChar = "`~!@#$%^&*()_+{}[]|";

    console.log("Numbers: ", isNumInclude);
    console.log("Capital Letters: ", isCapitalCharInclude);
    console.log("Special Characters: ", isSpecialCharInclude);

    if (isCapitalCharInclude) str += String(capChar);
    if (isNumInclude) str += String(numbers);
    if (isSpecialCharInclude) str += String(specialChar);

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);

    
  }, [length, isNumInclude, isCapitalCharInclude, isSpecialCharInclude, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
      console.log("Password Copied");
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{
    generatePassword();
  },[length,isNumInclude,isCapitalCharInclude,isSpecialCharInclude]);

  return (
    <div className='flex flex-col p-3 border-2 rounded-sm border-sky-600 w-1/3 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>
      <h3 className='text-2xl'>Password Generator</h3>
      <div className='flex justify-between items-center'>
      <input type="text" placeholder='password' ref={passwordRef} value={password} onChange={(e)=>{setPassword(e.target.value)}} className='border border-blue-600 p-1 w-4/5' />
      <button onClick={copyPasswordToClipboard} className='bg-blue-600 text-white font-semibold p-2 rounded-lg mt-2'>Copy</button>
      </div>
      <div className='flex justify-start items-center'>
        <input type="range" max={80} defaultValue={8} onChange={(e) => setLength(e.target.value)} />
        <p>({length})</p>
      </div>
      <div className='border-1 border-blue-500 rounded-md'>
        <label htmlFor="num" className='flex items-center'>
          <input type="checkbox" name="option" id="num" defaultChecked={isNumInclude} onChange={() => { setIsNumInclude((prev) => !prev)}} />
          <p className='px-1'>Numbers</p>
        </label>
        {/* <label htmlFor="smallChar" className='flex items-center'>
          <input type="checkbox" name="option" id="smallChar" defaultChecked={isSmallCharInclude} onChange={()=>{setIsSmallCharInclude((prev)=>!prev)}}/>
          <p className='px-1'>Small Letters</p>
        </label> */}
        <label htmlFor="capChar" className='flex items-center'>
          <input type="checkbox" name="option" id="capChar" defaultChecked={isCapitalCharInclude} onChange={()=>{setIsCapitalCharInclude((prev)=>!prev)}}/>
          <p className='px-1'>Capital Letters</p>
        </label>
        <label htmlFor="specialChar" className='flex items-center'>
          <input type="checkbox" name="option" id="specialChar" defaultChecked={isSpecialCharInclude} onChange={()=>{setIsSpecialCharInclude((prev)=>!prev)}}/>
          <p className='px-1'>Special Charactor</p>
        </label>
      </div>
      <button className='bg-blue-600 text-white font-semibold p-2 rounded-lg mt-2'>Generate Password</button>
    </div>
  )
}

export default App;