
import { Action } from '@ngrx/store';

export class StoreModule { }

export const ADD_TODO = '[TODO] Add todo item';
export const COMPLETE_TODO = '[TODO] Complete todo item ';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All todo';
export const UPDATE_TODO = '[TODO] Update todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const DELETE_ALL_COMPLETED_TODOS = '[TODO] Delete all completed todo items.';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {

  }
}

export class CompleteAction implements Action {
  readonly type = COMPLETE_TODO;

  constructor(public text: string) {

  }
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {
  }
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completado: boolean) {
  }
}

export class UpdateTodoAction implements Action {
  readonly type = UPDATE_TODO;

  constructor(public text: string, public id: number) {
  }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: number) {
  }
}
export class DeleteAllCompletedTodosAction implements Action {
  readonly type = DELETE_ALL_COMPLETED_TODOS;

}



export type Actions =
  AddTodoAction
  | CompleteAction
  | ToggleTodoAction
  | ToggleAllTodoAction
  | UpdateTodoAction
  | DeleteTodoAction
  | DeleteAllCompletedTodosAction;
