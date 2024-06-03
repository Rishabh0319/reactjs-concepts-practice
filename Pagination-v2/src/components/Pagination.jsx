import React from 'react';

const Pagination = ({
    currentPage,
    totalPage,
    changePage,
    isNextBtnActive,
    isPrevBtnActive }) => {
    return (
        <header className='w-full flex justify-center items-center mt-8'>
            <div className='w-64 flex items-center justify-between'>
                <button disabled={!isPrevBtnActive} onClick={() => changePage(currentPage - 1)} className={`${isPrevBtnActive ? 'bg-blue-600 text-white' : 'border border-gray-500'} flex justify-center items-center px-3 py-1 rounded-md`}>previous</button>
                <span>Page <b>{currentPage}</b> of <b>{totalPage}</b></span>
                <button disabled={!isNextBtnActive} onClick={() => changePage(currentPage + 1)} className={`${isNextBtnActive ? 'bg-blue-600 text-white' : 'border border-gray-500'} flex justify-center items-center px-3 py-1 rounded-md`}>next</button>
            </div>
        </header>
    )
}

export default Pagination