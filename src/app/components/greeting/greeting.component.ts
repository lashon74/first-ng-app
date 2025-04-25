import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent {
  // this can recieve inputs from parent components
  message = input('Hello world message 1');
  message1 = input('Hello world message 2');
  message2 = input('Hello world message 3');
}
