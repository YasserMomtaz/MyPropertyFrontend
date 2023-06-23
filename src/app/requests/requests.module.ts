import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRequestsComponent } from './show-requests/show-requests.component'
import { FormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router'



@NgModule({
  declarations: [ShowRequestsComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports:[ShowRequestsComponent],
})

export class RequestsModule { }



