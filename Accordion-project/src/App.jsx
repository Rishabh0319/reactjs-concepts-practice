import React from 'react';

const App = () => {
  return (
    <div className='flex flex-col justify-between items-center'>
      
      <label htmlFor='multiOptionSelect' className='flex justify-between items-center my-5'>
        <h2 className='mr-3 text-2xl font-bold'>Is multiple open accordion allowed?</h2>
        <input className='h-4 w-4' type="checkbox" name="" id='multiOptionSelect' />
      </label>

      <div className="w-[90%] p-1 flex flex-col justify-between items-center">

        <main className='border border-gray-400 w-[100%] flex flex-col justify-between items-center rounded-md overflow-hidden mb-5'>
          <section className='w-[100%] flex justify-between items-center py-4 px-2'>
             <h4 className='text-2xl font-bold'>Do I have to allow the use of cookies?</h4>
             <span className='h-9 w-9 flex justify-center items-center cursor-pointer'>
              <ion-icon size="large" name="add-circle-outline"></ion-icon>
             </span>
          </section>
          <section className='hidden items-center justify-start px-2'>
             <p className='text-xl mb-3'>Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.</p>
          </section>
        </main>

      </div>
    </div>
  )
}

export default App