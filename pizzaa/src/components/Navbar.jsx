import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex flex-col items-start lg:flex-row lg:justify-between lg:items-center mx-6 py-3 mb-10'>
            <div>
                <h1 className='text-2xl font-bold'>Pizza.com</h1>
            </div>
            <dir className="w-full lg:w-auto">
                <input type="search" placeholder='Search Your Pizza' autoComplete='off' className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'/>
            </dir>
        </nav>
    )
}

export default Navbar