import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    //If the path is empty go to top of root home folder
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then(
        (module) => module.HomeComponent
      );
    },
  },
  {
    //If the path is empty go to top of root home folder
    path: 'todos',
    loadComponent: () => {
      return import('./todos/todos.component').then(
        (module) => module.TodosComponent
      );
    },
  },
];
