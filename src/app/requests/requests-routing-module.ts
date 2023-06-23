
import { CommonModule } from '@angular/common';

import{RouterModule, Routes} from '@angular/router';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { NgModule } from '@angular/core';
const routes: Routes=[
     {
      path: '', component: ShowRequestsComponent}
    
    ];


    @NgModule({
        declarations: [],
        imports: [CommonModule,
         RouterModule.forChild(routes)
        ]
      })




export class RequestsRoutingModule {
}
