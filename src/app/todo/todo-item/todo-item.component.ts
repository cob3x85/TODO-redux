import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/app.reducers';
import { ToogleTodoAction, UpdateTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  chkField: FormControl;
  txtInput: FormControl;
  editing: boolean;

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef; // work as Jquery used to be

  constructor(private store: Store<AppSate>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.complete);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges.subscribe(() => {
      const actionToogle = new ToogleTodoAction(this.todo.id);

      this.store.dispatch(actionToogle);
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => { // if not used it doesn't work
      this.txtInputFisico.nativeElement.select(); // get all jquery properties of the field
    });
  }

  // change css class back to original state
  endEditing() {
    this.editing = false;

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.text) {
      return;
    }
    const actionUpdate = new UpdateTodoAction(this.txtInput.value, this.todo.id);
    this.store.dispatch(actionUpdate);
  }

  deleteItem() {
    const actionDelete = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(actionDelete);
  }

}
