import { Component } from "@angular/core";
interface Quote {
    quote: string;
    author: string;
}

@Component({
    selector: 'exo-quote',
    templateUrl: './quote.component.html',
    styleUrl: './quote.component.css'
})
export class QuoteComponent {
    title: string = 'Quote Component';
    interval: number = 5000;
    
    
    quotes : Quote[] = [
        { quote: 'The best way to predict the future is to create it.', author: 'Abraham Lincoln' },
        { quote: 'The world is yours', author: 'Tony Montana' },
        { quote: 'Ad astra per aspera', author: 'Unknown' }
      ];
    currentQuote = this.quotes[0];
    randomIndex: number = 0;

    //interval: number = 15000;    
    intervalId: any;

    runRandomAnimation(): string {
       
        this.stopInterval();
        this.intervalId = setInterval(() => {
            let index: number = this.randInt(this.quotes.length);
            this.currentQuote = this.quotes[index];
        }, this.interval);

        return this.currentQuote.quote + '(' + this.currentQuote.author + ')';
    };
    
    randInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
    stopInterval(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

}
