import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      title: 'groceries',
      userId: 74,
      id: 0,
      completed: false,
    },
    {
      title: 'car wash',
      userId: 1,
      id: 1,
      completed: false,
    },
  ];
  constructor() {}
}
