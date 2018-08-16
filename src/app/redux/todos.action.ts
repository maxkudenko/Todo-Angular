import {Action} from '@ngrx/store'
import {Todo} from '../todo.model'

export namespace TODO_ACTION {
  export const ADD_TODO = 'ADD_TODO'
  export const DELETE_TODO = 'DELETE_TODO'
  export const UPDATE_TODO = 'UPDATE_TODO'
}

export class AddTodo implements Action {
  readonly type = TODO_ACTION.ADD_TODO

  constructor(public payload: Todo) {}
}

export class DeleteTodo implements Action {
  readonly type = TODO_ACTION.DELETE_TODO

  constructor(public payload: Todo) {}
}

export class UpdateTodo implements Action {
  readonly type = TODO_ACTION.UPDATE_TODO

  constructor(public payload: Todo) {}
}

export type TodosAction = AddTodo | DeleteTodo | UpdateTodo
