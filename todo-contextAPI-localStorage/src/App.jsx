import React, { useState } from 'react';
import { TodoProvider } from './context';

const App = () => {
  const [todos, useTodo] = useState([]);

  const addTodo = (todo) => {
    useTodo((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  }
  const updateTodo = (id, todo) => {
    useTodo((todoList) => todoList.map((eachTodo) => eachTodo.id === id ? todo : eachTodo));
  }
  const deleteTodo = (id) => {
    useTodo((prevTodo)=> prevTodo.filter((todo)=> todo.id !== id));
  }
  const toggleCompleted = () => { 
    useTodo((prevTodo)=> prevTodo.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleCompleted, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App;