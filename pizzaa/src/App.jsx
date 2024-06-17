import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Error_page, Home_page, Success_page} from './pages';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home_page/>}/>
          <Route path='/success' element={<Success_page/>}/>
          <Route path='/*' element={<Error_page/>}/>
        </Routes> 
    </BrowserRouter>
  )
}

export default App