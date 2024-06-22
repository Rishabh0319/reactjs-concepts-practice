import React from 'react';
import {useDispatch} from 'react-redux';
import {setSearch} from '../redux/slices/searchSlice';

const Navbar = () => {

    const dispatch = useDispatch();

    return (
        <nav className='flex flex-col items-start lg:flex-row lg:justify-between lg:items-center mx-6 py-3'>
            <div>
                <h1 className='text-6xl font-bold text-green-500'>Pizza.com</h1>
            </div>
            <dir className="w-full lg:w-auto">
                <input onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" placeholder='Search Your Pizza' autoComplete='off' className='p-3 border border-gray-400 text-lg text-orange-500 font-bold rounded-lg outline-none w-full lg:w-[25vw] focus:border-2 focus:border-green-500 focus:shadow-green-400 focus:shadow-sm'/>
            </dir>
        </nav>
    )
}

export default Navbar