import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { validFilters } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: validFilters): Todo[] {

    console.log(todos);
    console.log(filtro);

    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.complete);

      case 'pendientes':
        return todos.filter(todo => !todo.complete);

      default:
        return todos;
    }
  }

}
