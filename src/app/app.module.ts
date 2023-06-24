import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RequestlistComponent } from './requestlist/requestlist.component';
import { ShowRequestsComponent } from './requests/show-requests/show-requests.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddBrokerComponent } from './add-broker/add-broker.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ApartmentService } from './Services/apartment.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { RequestsModule } from './requests/requests.module';
import { LoginModule } from './login/login.module';
import {SignupModule} from'./sign-up/signup.module';
import { BrokerapartmentComponent } from './brokerapartment/brokerapartment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TokenInterceptor } from 'TokenInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    RequestlistComponent,
    AddApartmentComponent,
    AddManagerComponent,
    AddBrokerComponent,
    BrokerapartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LandingPageModule,
    HttpClientModule,
    RequestsModule,
    LoginModule,

    SignupModule,
    NgxPaginationModule,
  ],
  providers: [
    ApartmentService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
