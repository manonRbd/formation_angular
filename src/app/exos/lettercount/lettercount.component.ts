import { Component, Input} from '@angular/core';

@Component({
  selector: 'exos-lettercount',
  templateUrl: './lettercount.component.html'
})
export class LettercountComponent {
  @Input()
  letterCount: number = 0;
  
}
