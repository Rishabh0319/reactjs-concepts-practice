import React, { useEffect, useState } from 'react';

const App = () => {

  const [password,setPassword] = useState('');
  const [length,setLength] = useState(8);
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

    if(capChar) str += capChar;
    if(numbers) str += numbers;
    if(specialChar) str += specialChar;

    for(let i=0 ; i < length ; i++)
    {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
      setPassword(pass);
  }

  useEffect(()=>{
      generatePassword();
  },[password,length,isNumInclude,isSmallCharInclude,isCapitalCharInclude,isSpecialCharInclude])

  return (
    <div className='border-2 border-sky-600 w-1/3 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>
       
    </div>
  )
}

export default App;