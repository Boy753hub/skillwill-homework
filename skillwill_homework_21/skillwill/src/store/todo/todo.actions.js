import { TODO_ACTIONS } from "./actions.keys";

export const addTodoActions = (payload) => ({
    type: TODO_ACTIONS.ADD_TODO,
    payload
})

export const doneTodoActions = (payload) => ({
    type: TODO_ACTIONS.UPDATE_TODO,
    payload
})
export const deleteTodoActions = (payload) => ({
    type: TODO_ACTIONS.DELETE_TODO,
    payload
})