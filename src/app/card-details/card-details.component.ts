import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  @Input() housingLocation!:HousingLocation ;
  @Output() hideDetailsEvent = new EventEmitter<void>();

  hideDetails() {
    this.hideDetailsEvent.emit();
  }
}

