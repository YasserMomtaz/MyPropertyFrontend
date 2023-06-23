import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [ SignupComponent ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ,RouterLink],
  exports: [ SignupComponent ]  // <-- Add this line
})
export class SignupModule { }