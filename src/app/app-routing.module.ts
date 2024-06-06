import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { CardComponent } from './locationCard/locationCard.component';
import { HouseLocationFormComponent } from './house-location-form/house-location-form.component';
import { UpdateLocationFormComponent } from './update-location-form/update-location-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'card', pathMatch: 'full' },
  { path: 'cart', component: CartComponent, data: { searchData: '' } },
  { path: 'card', component: CardComponent },
  { path: 'houseLocationform', component: HouseLocationFormComponent },
  { path: 'updateLocation', component: UpdateLocationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
