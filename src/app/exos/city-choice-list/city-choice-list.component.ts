import { Component } from '@angular/core';
import { City } from '../city';


@Component({
  selector: 'exos-city-choice-list',
  templateUrl: './city-choice-list.component.html',
  styleUrl: './city-choice-list.component.css'
})
export class CityChoiceListComponent{
  cities: City[] = [
    {name: 'Paris', country: 'France', img: 'paris.jpg'},
    {name: 'Rio', country: 'Brazil', img: 'rio.jpg'},
    {name: 'Turin', country: 'Italy', img: 'turin.jpg'},
  ];

  selectedCity: City | null = null;
  onChange(event:any): void {
    let selectedCityName = event.target.value;
    this.selectedCity = this.cities.filter(city => city.name === selectedCityName)[0] || null;
  }
}
