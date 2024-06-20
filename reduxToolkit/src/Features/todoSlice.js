import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id:1,
            todo:'Hello Todo',
            isComplete: false
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           const newTodo = {
              id: Date.now(),
              todo: action.payload,
              isComplete: false
           }
           state.todos.push(newTodo);
        },
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
