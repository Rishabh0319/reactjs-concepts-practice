import React from 'react';
import Card from './components/Card';
import data from "./database/data";

const App = () => {
  const cardDataList = data;
  return (
    <div className='flex items-center justify-start flex-wrap gap-4 p-4'>
      {
        data.map((card, index) => {
          return <Card key={index}
           language={card.name}
            year={card.year}
            creator={card.creator}
            useCase={card.usecase}
          />
        })
      }
    </div>
  )
}

export default App;