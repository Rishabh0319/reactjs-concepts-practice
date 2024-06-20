import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {deleteTodo} from '../Features/todoSlice';

const DisplayTodos = () => {
  const todos = useSelector(state=>state.todos);
  const dispatch = useDispatch();

  const deleteTodoOnClick = (id)=>{
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <h1>DisplayTodos</h1>
      <ul>
        {
          todos.map((todo)=>(
            <li key={todo.id}>{todo.todo} <button onClick={()=>deleteTodoOnClick(todo.id)}>Delete</button></li>
          ))
        }
      </ul>
    </div>
  )
}

export default DisplayTodos