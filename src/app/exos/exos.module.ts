import { NgModule } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { CityChoiceCardComponent } from './city-choice-card/city-choice-card.component';
import { CityChoiceListComponent } from './city-choice-list/city-choice-list.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextstatsComponent } from './textstats/textstats.component';
import { LettercountComponent } from './lettercount/lettercount.component';
import { WordcountComponent } from './wordcount/wordcount.component';

@NgModule({
    declarations: [QuoteComponent, CityChoiceCardComponent, CityChoiceListComponent, ButtonComponent, TextstatsComponent, LettercountComponent, WordcountComponent],
    imports: [CommonModule],
    exports: [ QuoteComponent, CityChoiceListComponent, ButtonComponent, TextstatsComponent]
})
export class ExosModule { }