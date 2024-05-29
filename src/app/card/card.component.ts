import { Component,EventEmitter,Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { FormdataService } from '../services/formdata.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 
  housingLocation: HousingLocation[] = [];
  housingLocation2!:HousingLocation[];
  selectedLocation!: HousingLocation;
  showHouseDetails:Boolean=false
  constructor(private cartService: CartService,private route: ActivatedRoute, private cardService:CardService,private formDataService: FormdataService) {}


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

    this.cardService.getData().subscribe(
      (res: any) => {
        res.forEach((item: any) => {
         this.housingLocation.push(item)
        })});

    this.route.queryParams.subscribe(params => {
      let searchString = params['search'];
      this.filterLocations(searchString);
    });

    this.formDataService.formData.forEach((item)=>{
      this.housingLocation.push(item)
    })

    this.housingLocation2 = this.housingLocation;
  }

  
  filterLocations(searchString:String) {
    if(searchString){
    this.housingLocation2 = this.housingLocation.filter(location =>
    location.name.toLowerCase().includes(searchString.toLowerCase()));
    }else{
    this.housingLocation2=this.housingLocation
  }
  }

  deleteLocation(index: number) {
    this.housingLocation.splice(index, 1);
    this.housingLocation2 = this.housingLocation;
  }
}
