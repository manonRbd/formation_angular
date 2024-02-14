import { Component } from '@angular/core';

@Component({
  selector: 'exo-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  text: 'Óui' | 'Non' = 'Óui';
  isChecked: boolean = false;
  toggleSwitch(): void {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      console.log('1');
    }else {
      console.log('0');
    }

  }
}
