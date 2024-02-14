import { Component } from '@angular/core';

@Component({
  selector: 'exos-textstats',
  templateUrl: './textstats.component.html'
})
export class TextstatsComponent {
  letterCount: number = 0;
  wordCount: number = 0;
  onKeyUp(event: any) {
    let text = event.target.value;
    this.letterCountChange(text);
    this.wordCountChange(text);
  }
  letterCountChange( text: string) {
    this.letterCount = text.length;
  }
  wordCountChange(text: string) {
    this.wordCount = text.split(/\s+/).filter(Boolean).length;
  }
}
