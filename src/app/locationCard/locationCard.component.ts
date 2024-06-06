import { Component,EventEmitter,Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { CardDetailsComponent } from '../location-card-details/location-card-details.component';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { FormdataService } from '../services/formdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './locationCard.component.html',
  styleUrls: ['./locationCard.component.css']
})

export class CardComponent { 
  housingLocation: HousingLocation[] = [];
  housingLocation2!:HousingLocation[];
  selectedLocation!: HousingLocation;
  showHouseDetails:Boolean=false
  showUpdateHouseForm:Boolean=false;
  constructor(private cartService: CartService,private route: ActivatedRoute, private cardService:CardService,private formDataService: FormdataService,private router: Router) {}

  hideUpdateHouseForm() {
    this.showUpdateHouseForm = false;
  }
  
  showLocationDetails(location: HousingLocation) {
    this.selectedLocation = location;
    this.showHouseDetails=true
  }

  hideLocationDetails() {
    this.showHouseDetails = false;
  }

  addToCart(location: HousingLocation) {
    this.cartService.addToCart(location);
  }

  ngOnInit(): void {
    this.cardService.getData().subscribe({
      next:(res: any) => {
        res.forEach((item: any) => {
         this.housingLocation.push(item)
        })
        this.formDataService.formData.forEach((item:any)=>{  
          item.id = `${this.housingLocation.length}`;
          this.housingLocation.push(item)
        })
      },error: (err: any) => {
        console.error('Error fetching product data', err);
      }
    });

    this.route.queryParams.subscribe(params => {
      let searchString = params['search'];
      this.filterLocations(searchString);
    });

    this.housingLocation2 = this.housingLocation;
  }

  filterLocations(searchString:String) {
  this.housingLocation2 = this.housingLocation.filter(location =>
    location.name.toLowerCase().includes(searchString.toLowerCase()));
  }

  deleteLocation(index: number) {
    this.housingLocation.splice(index, 1);
  }

  updateLocation(location:HousingLocation){
    this.selectedLocation = location;
    this.showUpdateHouseForm=true
  }
}

