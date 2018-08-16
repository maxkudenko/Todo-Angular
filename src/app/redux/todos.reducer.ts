import {Todo} from '../todo.model'
import {TODO_ACTION, TodosAction} from './todos.action'

const initialState = {
  todos: [
    new Todo('Work', '10.08.18', 'Go to work', false, 1),
    new Todo('Home', '08.08.18', 'Go to home', false, 2)
  ]
}

export function todosReducer(state = initialState, action: TodosAction) {
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case TODO_ACTION.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload.id)]
      }
    case TODO_ACTION.UPDATE_TODO:
      const idx = state.todos.findIndex(todo => todo.id === action.payload.id)
      state.todos[idx].isFinished = true
      return {
        ...state,
        todos: [...state.todos]
      }
    default:
      return state
  }
}
