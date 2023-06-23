import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [ LoginComponent ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ,RouterLink],
  exports: [ LoginComponent ]  // <-- Add this line
})
export class LoginModule { }