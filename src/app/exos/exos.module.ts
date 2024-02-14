import { NgModule } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { CityChoiceCardComponent } from './city-choice-card/city-choice-card.component';
import { CityChoiceListComponent } from './city-choice-list/city-choice-list.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [QuoteComponent, CityChoiceCardComponent, CityChoiceListComponent, ButtonComponent],
    imports: [CommonModule],
    exports: [ QuoteComponent, CityChoiceListComponent, ButtonComponent]
})
export class ExosModule { }