import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList: [],
    data: {
        eng: {
          create: 'Create',
          Add: 'Add',
          edit: 'Edit',
          finish: 'Finish',
          delete: 'Delete',
          title: 'To do',
          theme: 'Theme',
          name: 'name',
          lastname: 'lastname',
          task: 'task',
          done: 'Done',
        },
        geo: {
          create: 'შექმენი',
          Add: 'დამატება',
          edit: 'შეცვლა',
          finish: 'დასრულება',
          delete: 'წაშლა',
          title: 'გასაკეთებელი საქმე',
          theme: 'ფონი',
          name: 'სახელი',
          lastname: 'გვარი',
          task: 'საქმე',
          done: 'გაკეთებული',
        },
      }
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addtodo(state, action){
            state.todoList.push(action.payload)
        },
        updatetodo(state, action){
            state.todoList.map((item) => item.id === action.payload ? item.isCompleted = true : item)
        },
        deletetodo(state, action){
            state.todoList = state.todoList.filter((item) => item.id !== action.payload)
        },
    }

})

export const {addtodo, updatetodo, deletetodo} = todoSlice.actions
export default todoSlice.reducer