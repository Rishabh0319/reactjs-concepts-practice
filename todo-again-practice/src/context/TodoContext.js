import {createContext,useContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id:'',
            todo:'',
            completed: false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete: (id)=>{}
});

export const TodoContextProvider = TodoContext.Provider;

// custom Hook
export const useTodo = ()=>{
   return useContext(TodoContext);
}