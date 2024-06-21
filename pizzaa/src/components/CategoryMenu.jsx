import React,{ useState, useEffect } from 'react';
import FoodData from '../data/foodData';
import {useDispatch,useSelector} from 'react-redux';
import { setCategory } from '../redux/slices/categorySlice';

const CategoryMenu = () => {

  const [categories,setCategories] = useState([]);

  const listUniqueCategories = ()=>{
    const uniqueCategories = [...new Set(FoodData.map(item=>item.category))]
    setCategories(uniqueCategories);
    // console.log(uniqueCategories);
  }

  useEffect(()=>{
    listUniqueCategories();
  },[])

  const dispatch = useDispatch();
  const selectedCategory = useSelector(state=>state.category.category);

  return (
    <div className='mx-6'>
        <h2 className='my-3 text-orange-500 font-semibold text-3xl'>find The Best Food</h2>
        <div className='my-5 flex gap-3 overflow-x-auto scroll-smooth'>
        <button onClick={()=>dispatch(setCategory('All'))} className={`px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer duration-500 ease-in-out ${selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>
        {
          categories.map((category,index)=><button key={index} onClick={()=>dispatch(setCategory(category))} className={`px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer duration-500 ease-in-out ${selectedCategory === category && "bg-green-500 text-white"}`}>{category}</button>)
        }
        </div>
    </div>
  )
}

export default CategoryMenu