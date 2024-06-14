import React from 'react';
import replyIcon from '../assets/images/icon-reply.svg';

const SubComments = () => {
    return (
        <div className='w-[90%] flex flex-col justify-end self-end bg-[--White]'>
            <div className='flex rounded-md p-5 bg-[--White]'>
                <div className='flex flex-col justify-between items-center h-20 px-2 rounded-md bg-[--Very-light-gray]'>
                    <b className='text-[--Light-grayish-blue] hover:text-[--Moderate-blue] cursor-pointer'>+</b>
                    <p className='text-[--Moderate-blue] font-[--font-bold]'>12</p>
                    <b className='text-[--Light-grayish-blue] hover:text-[--Moderate-blue] cursor-pointer'>-</b>
                </div>
                <div className='ml-3'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img className='border h-10 w-10 rounded-full' src="" alt="" />
                            <p className='ml-2 text-[--Dark-blue] font-[--font-bold]'>Rishabh</p>
                            <p className='ml-2 font-[--font-medium] text-[--Grayish-Blue]'>1month ago</p>
                        </div>
                        <p className='flex items-center cursor-pointer gap-2 text-[--Moderate-blue] font-bold'><img src={replyIcon} />Reply</p>
                    </div>
                    <div className='pr-5'>
                        <p className=' text-[--Grayish-Blue]'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubComments