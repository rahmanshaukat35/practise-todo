import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'todo-form',
    component: TodoFormComponent,
  },
  {
    path: 'todo-form/:id',
    component: TodoFormComponent,
  },
];
