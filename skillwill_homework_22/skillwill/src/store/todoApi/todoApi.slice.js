import { createSlice } from "@reduxjs/toolkit"
import { deleteTodo, getTodo, sendTodo, updateTodo } from "./todoApi.thunks"

const initialState = {
    todo: [],
    loading: false,
    error: null
}

const todoApi = createSlice({
    name: 'todoApi',
    initialState,
    reducers:{},
    extraReducers: {
        [getTodo.pending.type]: (state)=>{
            state.loading = true
        },
        [getTodo.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = null
            state.todo = action.payload
        },
        [getTodo.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [sendTodo.pending.type]: (state)=>{
            state.loading = true
            state.error = null
        },
        [sendTodo.fulfilled.type]: (state)=>{
            state.loading = false
        },
        [sendTodo.rejected.type]: (state, action)=>{
            state.loading = true
            state.error = action.payload
        },
        [updateTodo.pending.type]: (state)=>{
            state.loading = true
            state.error = null
        },
        [updateTodo.fulfilled.type]: (state)=>{
            state.loading = false
        },
        [updateTodo.rejected.type]: (state, action)=>{
            state.loading = true
            state.error = action.payload
        },
        [deleteTodo.pending.type]: (state)=>{
            state.loading = true
            state.error = null
        },
        [deleteTodo.fulfilled.type]: (state)=>{
            state.loading = false
        },
        [deleteTodo.rejected.type]: (state, action)=>{
            state.loading = true
            state.error = action.payload
        },
    }
})

export default todoApi.reducer