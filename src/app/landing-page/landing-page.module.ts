import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MainLandingContentComponent } from './main-landing-content/main-landing-content.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuyModule } from '../buy/Apartment.module';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { OurServicesComponent } from '../our-services/our-services.component';
@NgModule({
  declarations: [
    SearchComponent,
    MainLandingContentComponent,FooterComponent, NavbarComponent,OurServicesComponent
  ],
  imports: [
    CommonModule,RouterModule,BuyModule,FormsModule,NgxPaginationModule
  ],
  exports:[
    SearchComponent,NavbarComponent,FooterComponent
  ]
})
export class LandingPageModule { }
