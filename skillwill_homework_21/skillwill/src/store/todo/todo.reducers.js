import { TODO_ACTIONS } from "./actions.keys"

const initialState = {
    todoList: [],
    doneList: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case TODO_ACTIONS.ADD_TODO:
        return {
          todoList: [...state.todoList, action.payload]
        };
      case TODO_ACTIONS.UPDATE_TODO:
        return {
          todoList: state.todoList.map((item) =>
            item.id === action.payload ? { ...item, isCompleted: true } : item
          )
        };
      case TODO_ACTIONS.DELETE_TODO:
        return {
          todoList: state.todoList.filter((item) => item.id !== action.payload)
        };
      default:
        return state;
    }
  };