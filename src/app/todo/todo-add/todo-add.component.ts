import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AddTodoAction } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/app.reducers';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;



  constructor(private store: Store<AppSate>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }


  addTodo() {

    if (this.txtInput.invalid) {
      return;
    }

    const actionAdd = new AddTodoAction(this.txtInput.value);

    this.store.dispatch(actionAdd);
    this.txtInput.setValue('');
    // console.log(this.txtInput.value);
    // console.log(this.txtInput.valid);
  }
}
