import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-asc-com',
  templateUrl: './asc-com.component.html',
  styleUrl: './asc-com.component.css'
})
export class AscComComponent {
  @Output()
  message: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    console.log('Button clicked');
    this.message.emit('Button clicked');
  }
}
