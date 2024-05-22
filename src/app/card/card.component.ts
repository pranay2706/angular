import { Component,Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() housingLocation!:HousingLocation;
}
