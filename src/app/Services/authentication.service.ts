import { Authorized } from './../_models/authorized';
import { Token } from '../_models/Token';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
 public authorized: Authorized = new Authorized('', false);

  public isAuth$ = new BehaviorSubject<Authorized>(this.authorized);

  private readonly apiUrl = 'https://localhost:7080/api/Users/Login';

  constructor(public httpClient: HttpClient) {}

  login(userLoginDto: any): Observable<Token> {
    return this.httpClient.post<Token>(this.apiUrl, userLoginDto).pipe(
      tap((Token) => {
        localStorage.setItem('token', Token.token);
        localStorage.setItem('role', Token.role);
        this.authorized.isAuthorized = true;
        this.authorized.Role = Token.role;
        this.isAuth$.next(this.authorized);
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.authorized.isAuthorized = false;
    this.authorized.Role = '';
    this.isAuth$.next(this.authorized);
  }
}
