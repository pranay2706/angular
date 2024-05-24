import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imgUrl="/assets/1.jpg"
  
  constructor(private router: Router) {}

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}
