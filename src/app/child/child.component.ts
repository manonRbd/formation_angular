import { Component } from '@angular/core';


@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
  })
  export class ChildComponent {
    title: string = 'Child Component';
    age: number = 25;
    counter: number = 0;
    fruits: string[] = ['apple', 'banana', 'cherry'];
    increment(): void {
        this.counter++;
        if(this.counter == 5){
            this.counter = 0;
            this.fruits.pop();
        }
    }
    
  }
  