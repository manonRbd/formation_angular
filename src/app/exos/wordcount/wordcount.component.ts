import { Component, Input } from '@angular/core';

@Component({
  selector: 'exos-wordcount',
  templateUrl: './wordcount.component.html'
})
export class WordcountComponent {

  @Input()
  wordCount: number = 0;
  

}
