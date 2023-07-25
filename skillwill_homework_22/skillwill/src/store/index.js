import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  todoReducer  from './todo/todo.slice'
import todoApiSlice from './todoApi/todoApi.slice'

const rootReducer = combineReducers({
    todo: todoReducer,
    todoApi: todoApiSlice
})

export const store = configureStore({
    reducer: rootReducer
})
