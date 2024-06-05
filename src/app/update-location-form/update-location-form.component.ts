import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../card.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-update-location-form',
  templateUrl: './update-location-form.component.html',
  styleUrls: ['./update-location-form.component.css']
})
export class UpdateLocationFormComponent {
  @Input() housingLocation!:HousingLocation ;
  @Output() hideFormDetailsEvent: EventEmitter<void> = new EventEmitter<void>(); // Event emitter for hiding the form

  housingForm: FormGroup; 
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private cardService: CardService) {
    this.housingForm = this.formBuilder.group({
      id:[''],
      name: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      photo: ['', Validators.required],
      availableUnits: [0, Validators.required],
      wifi: [false, Validators.required],
      laundry: [false, Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
  }

  onSubmit() {
  {
      const updatedData = {
        id:this.housingForm.value.id,
        name: this.housingForm.value.name,
        city: this.housingForm.value.city,
        state: this.housingForm.value.state,
        photo: this.housingForm.value.photo,
        availableUnits: this.housingForm.value.availableUnits,
        wifi: this.housingForm.value.wifi, 
        laundry: this.housingForm.value.laundry,
        latitude: this.housingForm.value.latitude,
        longitude: this.housingForm.value.longitude,
      };
      this.cardService.updatedData=updatedData;
      this.hideFormDetailsEvent.emit();
    } 
  }

  ngOnInit() {
   if (this.housingLocation) {
      this.housingForm.patchValue({
        id: this.housingLocation.id,
        name: this.housingLocation.name,
        city: this.housingLocation.city,
        state: this.housingLocation.state,
        photo: this.housingLocation.photo,
        availableUnits: this.housingLocation.availableUnits,
        wifi: this.housingLocation.wifi,
        laundry: this.housingLocation.laundry
      });
    }

  }
}
