import {Injectable } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {
  formData: HousingLocation[] = []; 
  
  constructor() { }
}

