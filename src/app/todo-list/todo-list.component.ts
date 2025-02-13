import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [RouterLink],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  constructor(private http: HttpClient) {}
  router = inject(Router);
  ngOnInit() {
    this.getData();
  }
  todos: any[] = [];

  getData() {
    this.http.get('http://localhost:3000/todo').subscribe((result: any) => {
      this.todos = result;
    });
  }
  delete(id: any) {
    const confirmation = window.confirm('Are you want to delete this todo');
    if (confirmation) {
      this.http
        .delete(`http://localhost:3000/todo/${id}`)
        .subscribe((result: any) => {
          this.getData();
        });
    }
  }
}
