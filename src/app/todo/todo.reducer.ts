import { Actions, ADD_TODO, TOGGLE_TODO, TOGGLE_ALL_TODO, UPDATE_TODO, DELETE_TODO, DELETE_ALL_COMPLETED_TODOS } from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Defeat Thanos');
const todo2 = new Todo('Save the world');
const todo3 = new Todo('Bring everyone back');

todo1.complete = true;

// State Inicial
const stateInitial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = stateInitial, action: Actions): Todo[] {
  switch (action.type) {
    case ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case TOGGLE_TODO:

      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit, // pasa todos los parámetros del objeto
            complete: !todoEdit.complete // si queremos modificar algunos, se hacen manualmente
          };
        } else {
          return todoEdit;
        }
      });

    case TOGGLE_ALL_TODO:
      return state.map(todoEdit => {

        return {
          ...todoEdit,
          complete: action.completado
        };
      });

    case UPDATE_TODO:

      return state.map(todoUpdate => {
        if (todoUpdate.id === action.id) {
          return {
            ...todoUpdate,
            text: action.text
          };
        } else {
          return todoUpdate;
        }
      });

    case DELETE_TODO:
      return state.filter(todoDelete => todoDelete.id !== action.id);

    case DELETE_ALL_COMPLETED_TODOS:
      return state.filter(todoPending => todoPending.complete === false);

    default:
      return state;
  }
}
