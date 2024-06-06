import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  
  cartItems: HousingLocation[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }
  
}
