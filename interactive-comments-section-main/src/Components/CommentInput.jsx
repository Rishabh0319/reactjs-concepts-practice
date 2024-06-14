import React from 'react';

const CommentInput = () => {
  return (
    <div className='border rounded-md flex justify-between items-start w-full p-5 mt-4 bg-[--White]'>
       <img className='border h-12 w-12 rounded-full' src="" alt="" />
       <input className='h-20 border rounded-md w-[70%] pl-6 focus:outline-none' type="text" placeholder='Add a comment'/>
       <button className='border px-5 py-2 rounded-md text-white bg-[--Moderate-blue]'>SEND</button>
    </div>
  )
}

export default CommentInput