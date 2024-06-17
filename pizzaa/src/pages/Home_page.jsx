import React from 'react';
import {Cart, CategoryMenu, FoodItems, Navbar} from '../components';

const Home_page = () => {
  return (
    <div>
      <Navbar/>
      <CategoryMenu/>
      <FoodItems/>
      <Cart/>
    </div>
  )
}

export default Home_page