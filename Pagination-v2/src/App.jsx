import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import Table from './components/Table';
import FOODS from '../../pagination/src/database/Food';

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isNextBtnActive, setIsNextBtnActive] = useState(false);
  const [isPrevBtnActive, setIsPrevBtnActive] = useState(false);
  const itemPerPage = 10;

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setCurrentPage(newPage);
    }
  }

  useEffect(() => {
    const startIndex = ((currentPage - 1) * itemPerPage);
    const endIndex = (startIndex + itemPerPage);
    setTableData(FOODS.slice(startIndex, endIndex));
    setTotalPage(Math.ceil(FOODS.length / itemPerPage));
    setIsNextBtnActive(currentPage < totalPage);
    setIsPrevBtnActive(currentPage > 1);
  }, [currentPage, totalPage, itemPerPage])

  return (
    <div className='flex flex-col justify-start items-center h-[100vh]'>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        changePage={changePage}
        isNextBtnActive={isNextBtnActive}
        isPrevBtnActive={isPrevBtnActive}
      />
      <Table
        tableData={tableData}
      />
    </div>
  )
}

export default App;