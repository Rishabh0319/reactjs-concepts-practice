import React from 'react';
import CommentInput from './Components/CommentInput';
import CommentCard from './Components/CommentCard';
import SubComments from './Components/SubComments';

const App = () => {
  return (
    <main className='flex flex-col justify-between h-auto w-[60%] m-auto'>
      <section className='flex flex-col justify-start gap-3'>
        <CommentCard/>  
        <CommentCard/>  
        <SubComments/>
        <SubComments/>
      </section>
      <section className='flex justify-center items-center'>
        <CommentInput/>
      </section>
    </main>
  )
}

export default App