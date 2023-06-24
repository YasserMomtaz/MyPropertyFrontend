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
import { RequestDetailsComponent } from './requests/request-details/request-details.component';
import { adminGuardGuard } from './Guards/admin-guard.guard';
import { userGuardGuard } from './Guards/user-guard.guard';
import { brokerGuardGuard } from './Guards/broker-guard.guard';
import { DashboardComponent } from './landing-page/dashboard/dashboard.component';



const routes: Routes = [
  {
    path: "requests",
    // canActivate: [adminGuardGuard],
    component: ShowRequestsComponent,
  },
  {
    path: "requests/requestDetails",
    component: RequestDetailsComponent,
  },
  {
    path: "mainpage",
    component: MainLandingContentComponent,
  },
  {
    path: "buy",
    component: MainContentComponent,
  },
  {
    path: "addapartment",
    canActivate: [userGuardGuard],
    component: AddApartmentComponent,
  },

  {
    path: "favlist",
    canActivate: [userGuardGuard],
    component: FavListApartmentComponent,
  },

  {
    path: "",
    redirectTo: "mainpage",
    pathMatch: "full",
  },
  {
    path: "rent",
    component: RentMainContentComponent,
  },
  {
    path: "appartementDetails",
    component: AppartementDetailsComponent,
  },
  {
    path: "addmanager",
    // canActivate: [adminGuardGuard],
    component: AddManagerComponent,
  },

  {
    path: "addbroker",
    // canActivate: [adminGuardGuard],
    component: AddBrokerComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "brokerapartment",
    canActivate: [brokerGuardGuard],
    component: BrokerapartmentComponent,
  },
  {
    path: "dashboard",
    component:DashboardComponent
  }
];


@NgModule({

  declarations: [],
  imports: [CommonModule ,RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }

