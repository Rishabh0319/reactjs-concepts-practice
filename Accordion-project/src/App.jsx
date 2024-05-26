import React, { useState } from 'react';
import Card from './components/Card';
import questions from "./assets/database/questions";

const App = () => {

  const [isMultipleOpen, setIsMultipleOpen] = useState(true);
  const [openCardId, setOpenCardId] = useState(null);

  const setIdOfOpenCard = (id = null) => {
    setOpenCardId(isMultipleOpen ? null : id);
  }

  const onMultipleChange = () => {
    if (isMultipleOpen) 
      setOpenCardId(-1);
    
    setIsMultipleOpen(!isMultipleOpen);
  }

  return (
    <div className='flex flex-col justify-between items-center'>

      <label htmlFor='multiOptionSelect' className='flex justify-between items-center my-5'>
        <h2 className='mr-3 text-2xl font-bold'>Is multiple open accordion allowed?</h2>
        <input onChange={onMultipleChange} checked={isMultipleOpen} className='h-4 w-4' type="checkbox" name="" id='multiOptionSelect' />
      </label>

      <div className="w-[90%] p-1 flex flex-col justify-between items-center">
        {
          questions.map((data) => (
            <Card key={data.id}
              {...data}
              openCardId={openCardId}
              setIdOfOpenCard={setIdOfOpenCard}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App