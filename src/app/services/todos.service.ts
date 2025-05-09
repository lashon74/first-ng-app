import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  // todoItems: Array<Todo> = [
  //   {
  //     title: 'groceries',
  //     userId: 74,
  //     id: 0,
  //     completed: false,
  //   },
  //   {
  //     title: 'car wash',
  //     userId: 1,
  //     id: 1,
  //     completed: false,
  //   },
  // ];
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
