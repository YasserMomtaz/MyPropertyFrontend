import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ApartmentCardComponent } from './apartment-card/apartment-card.component';
import { DataViewModule } from 'primeng/dataview';
import { Router, RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApartmentService } from '../Services/apartment.service';
import { FavListApartmentComponent } from './fav-list-apartment/fav-list-apartment.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppartementDetailsComponent } from './appartement-details/appartement-details.component';
import { FormsModule } from '@angular/forms';
import { RentMainContentComponent } from './rent-main-content/rent-main-content.component';




@NgModule({
  declarations: [
    MainContentComponent,ApartmentCardComponent, FavListApartmentComponent, AppartementDetailsComponent,RentMainContentComponent
  ],
  imports: [

    CommonModule,DataViewModule,RouterModule,CarouselModule,NgxPaginationModule,FormsModule

  ],

  exports:[
    MainContentComponent,ApartmentCardComponent
  ]
})
export class BuyModule { }
