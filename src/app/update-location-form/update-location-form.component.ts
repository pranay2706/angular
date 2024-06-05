import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../card.service';

@Component({
  selector: 'app-update-location-form',
  templateUrl: './update-location-form.component.html',
  styleUrls: ['./update-location-form.component.css']
})
export class UpdateLocationFormComponent {
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
      console.log("updateForm",updatedData)
         this.cardService.updatedData=updatedData;
    } 
  }

  ngOnInit() {
    const navigationExtras = history.state;
    const location = navigationExtras.location;
 

    this.housingForm.patchValue({
      id:location.id,
      name: location.name,
      city: location.city,
      state: location.state,
      photo: location.photo,
      availableUnits: location.availableUnits,
      wifi: location.wifi,
      laundry: location.laundry,
    });

    
  }
}
