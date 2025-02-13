import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  constructor(private http: HttpClient) {}
  router = inject(Router);
  route = inject(ActivatedRoute);
  todoObj: any = {
    title: '',
    password: '',
  };
  id: string = '';
  isEdit: boolean = false;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.http
        .get(`http://localhost:3000/todo/${this.id}`)
        .subscribe((result: any) => {
          this.todoObj = result;
        });
    }
  }
  postData() {
    if (this.isEdit) {
      this.http
        .put(`http://localhost:3000/todo/${this.id}`, this.todoObj)
        .subscribe((result) => {
          this.router.navigate(['']);
        });
    } else {
      this.http
        .post('http://localhost:3000/todo', this.todoObj)
        .subscribe((result: any) => {
          this.router.navigate(['']);
        });
    }
  }
}
