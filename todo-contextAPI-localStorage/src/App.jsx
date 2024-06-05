import React, { useEffect, useState } from 'react';
import { TodoProvider } from './context';
import {TodoForm,TodoItem} from './components';

const App = () => {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  }
  const updateTodo = (id, todo) => {
    setTodo((todoList) => todoList.map((eachTodo) => eachTodo.id === id ? todo : eachTodo));
  }
  const deleteTodo = (id) => {
    setTodo((prevTodo)=> prevTodo.filter((todo)=> todo.id !== id));
  }
  const toggleCompleted = (id) => { 
    setTodo((prevTodo)=> prevTodo.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0)
    {
      setTodo(todos);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  return (
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleCompleted, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=> 
                (<div className='w-full' key={todo.id}>
                    <TodoItem todo={todo}/>  
                </div>))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App;