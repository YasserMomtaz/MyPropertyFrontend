import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowRequestsComponent } from './requests/show-requests/show-requests.component';

import { MainContentComponent } from './buy/main-content/main-content.component';
import { MainLandingContentComponent } from './landing-page/main-landing-content/main-landing-content.component';
import { RentMainContentComponent } from './buy/rent-main-content/rent-main-content.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddBrokerComponent } from './add-broker/add-broker.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { FavListApartmentComponent } from './buy/fav-list-apartment/fav-list-apartment.component';
import { AppartementDetailsComponent } from './buy/appartement-details/appartement-details.component';
import { BrokerapartmentComponent } from './brokerapartment/brokerapartment.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './sign-up/signup/signup.component';



const routes: Routes = [
  {
    path: 'requests',
    component: ShowRequestsComponent,
  },
  {
    path: 'mainpage',
    component: MainLandingContentComponent,
  },
  {
    path: 'buy',
    component: MainContentComponent,
  },
  {
    path: 'addapartment',
    component: AddApartmentComponent,
  },

  {
    path: 'favlist',
    component: FavListApartmentComponent,
  },

  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full',
  },
  {
    path: 'rent',
    component: RentMainContentComponent,
  },
  {

    path: 'appartementDetails',
    component: AppartementDetailsComponent,
  },{

    path:"addmanager",component: AddManagerComponent
  },

  {
    path:"addbroker",component: AddBrokerComponent
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'signup',
    component: SignupComponent,
  },
  {
    path:"brokerapartment",component: BrokerapartmentComponent
  },


];


@NgModule({

  declarations: [],
  imports: [CommonModule ,RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }

