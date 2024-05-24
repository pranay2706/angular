import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: HousingLocation[] = [];

  addToCart(location: HousingLocation) {
   
    const formattedLocation: any = {
      id: location.id,
      name: location.name,
      city: location.city,
      state: location.state,
      photo: location.photo,
    };

    
    const exists = this.cartItems.some(item => item.id === formattedLocation.id);
    
    if (!exists) {
      this.cartItems.push(formattedLocation);
    }

    console.log(this.cartItems);
  }


  getCartItems(): HousingLocation[] {
    return this.cartItems;
  }
}
