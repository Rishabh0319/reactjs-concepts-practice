import React from 'react';
import {CategoryMenu, FoodItems, Navbar} from '../components';

const Home_page = () => {
  return (
    <div>
      <Navbar/>
      <CategoryMenu/>
      <FoodItems/>
    </div>
  )
}

export default Home_page