import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  imgUrl = '/assets/1.jpg';
  searchString: string = '';

  constructor(private router: Router) {}

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  sendDataToParent() {
    if(this.searchString){
      this.router.navigate(['/card'], {
        queryParams: { search: this.searchString },
      });
    }else{
      this.router.navigate(['/card'],{
        queryParams: { search: "" }
      });
    }
  }

  navigateToHouseLocation(){
    console.log("hello")
    this.router.navigate(['/houseLocationform']);
  }
}
