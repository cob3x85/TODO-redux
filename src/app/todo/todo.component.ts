import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAction } from './todo.actions';
import { AppSate } from '../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor(private store: Store<AppSate>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    const actionToggleAll = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(actionToggleAll);
  }

}
