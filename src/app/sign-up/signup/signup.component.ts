import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Signup } from 'src/app/_models/Signup';
import {SignupService} from'src/app/Services/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm: FormGroup;
  user: Signup = new Signup();

  constructor(private formBuilder: FormBuilder,private signup:SignupService) { 
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      city: ['']
    }, {
      validator: this.matchPassword('password', 'confirmPassword')
    });  
  }
  matchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ matchPassword: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get phoneNumber() { return this.registerForm.get('phoneNumber'); }

  onSubmit() {
    if (this.registerForm.valid) {
      this.user.UserName = this.registerForm.get('username')?.value;
      this.user.Email = this.registerForm.get('email')?.value;
      this.user.Password = this.registerForm.get('password')?.value;
      this.user.PhoneNumber = this.registerForm.get('phoneNumber')?.value;
      this.user.City = this.registerForm.get('city')?.value;
      console.log(this.user); // Log the user object
      this.signup.register(this.user).subscribe({
        next: (response) => {
          console.log('Register successful');
          alert("Register successful");
          console.log(response); // Log the response object
          // Store the token in your session/local storage
        },
        error: (error) => {
          console.log('Register failed');
          alert("Register failed");
          console.log(error); // Log the error object
        }
      });
      
      // Call your backend API to register the user using the user object
      // You can use the HttpClient module to make the HTTP request
    } else {
      alert("Form data is invalid");
      // Form data is invalid, display error messages
      console.log("Form data is invalid");
    }
  }
}
