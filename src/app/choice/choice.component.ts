import { Component } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent {
  selectedChoice: any ='';
  onChange(event : any): void {
    this.selectedChoice = event.target.value;
  }
}
