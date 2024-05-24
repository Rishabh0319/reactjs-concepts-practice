import React from 'react'

const Card = () => {
    return (
        <div className='border border-gray-400 rounded-md flex flex-col w-auto p-5'>
            <div className='flex items-center justify-start'>
                <h2 className='text-blue-500 font-bold text-3xl'>C</h2>
            </div>
            <div className='flex flex-col justify-start'>
                <div className='flex items-center justify-start'><h3 className='text-xl mr-1 font-bold'>Year of start:</h3><p> 1972</p></div>
                <div className='flex items-center justify-start'><h3 className='text-xl mr-1 font-bold'>Creator:</h3><p> Dennis ritchie</p></div>
                <div className='flex items-center justify-start'><h3 className='text-xl mr-1 font-bold'>UseCase:</h3><p> System Programming Embedded System</p></div>
            </div>
        </div>
    )
}

export default Card