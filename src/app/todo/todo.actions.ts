
import { Action } from '@ngrx/store';

export class StoreModule { }

export const ADD_TODO = '[TODO] Add todo item';
export const COMPLETE_TODO = '[TODO] Complete todo item ';
export const TOOGLE_TODO = '[TODO] Toogle todo';
export const UPDATE_TODO = '[TODO] Update todo';
export const DELETE_TODO = '[TODO] Delete todo';

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

export class ToogleTodoAction implements Action {
  readonly type = TOOGLE_TODO;

  constructor(public id: number) {
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

export type Actions = AddTodoAction | CompleteAction | ToogleTodoAction | UpdateTodoAction | DeleteTodoAction;
