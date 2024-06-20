import React from 'react';
import {Provider} from 'react-redux';
import { store } from './Store/store';
import AddTodo from './Components/AddTodo';
import DisplayTodos from './Components/DisplayTodos';

const App = () => {
  return (
    <Provider store={store}>
      Learn about Redux Toolkit
      <AddTodo/>
      <DisplayTodos/>
    </Provider>
  )
}

export default App