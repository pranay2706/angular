import { Component,EventEmitter,Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 
  housingLocation: HousingLocation[] = [];
  housingLocation2!:HousingLocation[];
    constructor(private cartService: CartService,private route: ActivatedRoute, private cardService:CardService) {}


  //api https://mocki.io/v1/032eda04-c3cd-47e2-b66e-55e1538d7974

  
  
  selectedLocation!: HousingLocation;
  showHouseDetails:Boolean=false
  // searchString: string = '';


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

    this.housingLocation =[...this.housingLocation];
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe(params => {
      let searchString = params['search'];
      console.log(searchString)
      this.filterLocations(searchString);
    });
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
}
