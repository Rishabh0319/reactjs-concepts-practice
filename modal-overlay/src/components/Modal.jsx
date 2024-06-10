import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

  const Modal = ({setShowButton,setShowModal,setShowOffer}) => {
  return (
    <main className={`z-[15] w-80 border border-gray-400 p-2 flex flex-col justify-center gap-12 rounded-md bg-gray-200}`}>
        <div className='flex justify-start items-center w-full'><CloseOutlinedIcon onClick={()=>{setShowButton((prev)=>!prev);setShowModal((prev)=>!prev)}} className='cursor-pointer'/></div>
        <div className='flex justify-center items-center w-full text-center'><p className='w-[80%]'>Click the button below to accept our amazing offer!</p></div>
        <div className='flex justify-center items-center mb-4'><button onClick={()=>{setShowModal((prev)=>!prev);setShowOffer((prev)=>!prev)}} className='w-[50%] h-9 border border-gray-400 bg-white rounded-md'>Accept offer!</button></div>
    </main>
  )
}

export default Modal