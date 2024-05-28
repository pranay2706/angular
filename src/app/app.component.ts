import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl:'./app.component.html'
})
export class AppComponent {
  title = 'office';
  source = './assets/1.jpg';
}