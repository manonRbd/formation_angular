import { Component, Input } from '@angular/core';
import { City } from '../city';
@Component({
  selector: 'exos-city-choice-card',
  templateUrl: './city-choice-card.component.html',
  styleUrl: './city-choice-card.component.css'
})
export class CityChoiceCardComponent {
  // my second solution
  @Input()
  city: City | null = null;

  //my first solution
  @ Input()
  cities : City[] = [];
  selectedCity: string = '';
  selectedCityCountry: string = '';
  onChange(event:any): void {
    let result  = event.target.value.split(' ');
    if (result.length == 2) {
      this.selectedCity = result[0];
      this.selectedCityCountry = result[1];
    }else {
      this.selectedCity = '';
      this.selectedCityCountry = '';
    }
  }  
}
