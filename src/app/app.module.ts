import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseLocationFormComponent } from './house-location-form/house-location-form.component';
import { UpdateLocationFormComponent } from './update-location-form/update-location-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent,
    CardDetailsComponent,
    HeaderComponent,
    CartComponent,
    HouseLocationFormComponent,
    UpdateLocationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
