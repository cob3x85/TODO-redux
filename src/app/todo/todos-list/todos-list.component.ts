import { Component, OnInit } from '@angular/core';
import { AppSate } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: validFilters;
  constructor(private store: Store<AppSate>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;

      this.filtro = state.filtro;
    });
  }

}
