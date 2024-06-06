import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormdataService } from '../services/formdata.service';

@Component({
  selector: 'app-house-location-form',
  templateUrl: './house-location-form.component.html',
  styleUrls: ['./house-location-form.component.css'],
})

export class HouseLocationFormComponent implements OnInit {
  housingForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private formDataService: FormdataService) {}

  ngOnInit(): void {
    this.housingForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      photo: [''],
      availableUnits: ['', Validators.required],
      wifi: [false],
      laundry: [false],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.formDataService.formData.push(this.housingForm.value); 
  }
}
