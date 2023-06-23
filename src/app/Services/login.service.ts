import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiUrl = 'https://localhost:7080/api/Users/Login';
  constructor(private http: HttpClient) {
   
  }
  login(userLoginDto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userLoginDto);
  }
}

