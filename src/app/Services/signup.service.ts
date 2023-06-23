import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from 'src/app/_models/Signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
    private readonly apiurl = 'https://localhost:7080/api/Users/Register';
    constructor(private http: HttpClient) {
    }
  register(user: Signup): Observable<any> {
    return this.http.post<Signup>(this.apiurl, user);
  }
}