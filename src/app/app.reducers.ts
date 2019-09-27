import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
// importamos el reducer original (inicial) y todos los reducers
import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import { validFilters } from './filter/filter.actions';

export interface AppSate {
  todos: Todo[];
  filtro: validFilters;
  // Se pueden crear todas las referencias necesarias
  // usuario
}

// Para crear un objeto de reducers, se necesita exportar un objecto
// de tipo ActionReducerMap<AppState>

export const appReducers: ActionReducerMap<AppSate> = {
  todos: fromTodo.todoReducer,
  filtro: fromFilter.filterReducer
};

