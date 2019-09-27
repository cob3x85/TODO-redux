import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/app.reducers';
import * as fromFilter from '../../filter/filter.actions';
import { Todo } from '../model/todo.model';
import { DeleteAllCompletedTodosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['todos', 'pendientes', 'completados'];
  selectedFiltro: fromFilter.validFilters;
  pendientes: number;

  constructor(private store: Store<AppSate>) { }

  ngOnInit() {
    // Nos suscribimos al STATE para saber si hay cambios en el objeto
    this.store.subscribe(state => {
      this.selectedFiltro = state.filtro;
      this.contarPendientes(state.todos);
    });

  }

  changeFiltro(newFiltro: fromFilter.validFilters) {
    const actionChangeFiltro = new fromFilter.SetFilterAction(newFiltro);
    this.store.dispatch(actionChangeFiltro);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.complete).length;
  }

  clearCompleted() {
    const deleteCompleted = new DeleteAllCompletedTodosAction();
    this.store.dispatch(deleteCompleted);
  }

}
