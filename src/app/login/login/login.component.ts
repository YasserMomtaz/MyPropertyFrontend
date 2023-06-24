import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Services/login.service';
// import { LoginModule } from '../login.module';
import{Login} from 'src/app/_models/Login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: FormGroup;
user:Login=new Login();
  constructor(private formBuilder: FormBuilder, private authService: LoginService) {
    this.loginform = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)], [this.usernameAsyncValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get username() {
    return this.loginform.get('username');
  }

  get password() {
    return this.loginform.get('password');
  }

  onSubmit() {
    if (this.loginform.valid) {
      this.user.Username=this.loginform.get('username')?.value;
      this.user.password=this.loginform.get('password')?.value;
      const userLoginDto = { UserName: this.user.Username, Password: this.user.password };
      this.authService.login(userLoginDto).subscribe({
        next: (response) => {
          console.log('Login successful');
          console.log(response); // Log the response object
          // Store the token in your session/local storage
        },
        error: (error) => {
          console.log('Login failed');
          console.log(error); // Log the error object
        }
      });
    } else {
      // Form data is invalid, display error messages
      console.log("Form data is invalid");
    }
  }

  usernameAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      // Simulate an asynchronous call to validate the username
      return new Observable(observer => {
        setTimeout(() => {
          if (control.value === 'admin') {
            observer.next({ 'usernameExists': true });
          } else {
            observer.next(null);
          }
          observer.complete();
        }, 2000);
      });
    };
  }
}