import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {addTodo} from '../Features/todoSlice';


const AddTodo = () => {
  const [inputTodo,setInputTodo] = useState('');
  const dispatch = useDispatch();

  const addTodoOnClick = ()=>{
    dispatch(addTodo(inputTodo));
    setInputTodo('');
  }

  return (
    <div>
        <h1>Add Todo</h1>
        <input type="text" placeholder='Add Todo' value={inputTodo} onChange={(e)=>setInputTodo(e.target.value)}/>
        <button onClick={addTodoOnClick}>Add Todo</button>
    </div>
  )
}

export default AddTodo