
import { CommonModule } from '@angular/common';

import{RouterModule, Routes} from '@angular/router';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { NgModule } from '@angular/core';
import { RequestDetailsComponent } from './request-details/request-details.component';
const routes: Routes=[
     {
      path: '', component: ShowRequestsComponent},
      {path:'requestDetails',component:RequestDetailsComponent}
    
    ];


    @NgModule({
        declarations: [],
        imports: [CommonModule,
         RouterModule.forChild(routes)
        ]
      })




export class RequestsRoutingModule {
}
