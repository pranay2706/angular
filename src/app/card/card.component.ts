import { Component,EventEmitter,Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { FormdataService } from '../services/formdata.service';
import { Router } from '@angular/router';



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
  constructor(private cartService: CartService,private route: ActivatedRoute, private cardService:CardService,private formDataService: FormdataService,private router: Router) {}

 

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
        //  item.id = `${this.housingLocation.length}`;
         this.housingLocation.push(item)
        })
        this.formDataService.formData.forEach((item:any)=>{  
          item.id = `${this.housingLocation.length}`;
          this.housingLocation.push(item)
        })
        this.housingLocation[this.cardService.updatedData.id]=this.cardService.updatedData
        console.log(this.cardService.updatedData)
        console.log("after",this.housingLocation)
      },error: (err: any) => {
        console.error('Error fetching product data', err);
      }
    });

      
    this.route.queryParams.subscribe(params => {
      let searchString = params['search'];
      this.filterLocations(searchString);
    });

   
  // 0x123 =0x123 
    this.housingLocation2 = this.housingLocation;
  }

  filterLocations(searchString:String) {
  //   if(searchString){
  //   this.housingLocation2 = this.housingLocation.filter(location =>
  //   location.name.toLowerCase().includes(searchString.toLowerCase()));
  //   }
  //   else{
  //   this.housingLocation2=this.housingLocation
  // }
  this.housingLocation2 = this.housingLocation.filter(location =>
    location.name.toLowerCase().includes(searchString.toLowerCase()));
    console.log(this.housingLocation)
  }


  deleteLocation(index: number) {
    this.housingLocation.splice(index, 1);
    // this.housingLocation2 = this.housingLocation;
  }

  updateLocation(location:HousingLocation){
    this.router.navigate(['/updateLocation'], { state: { location: location } });
  }
}
function updateData() {
  throw new Error('Function not implemented.');
}

