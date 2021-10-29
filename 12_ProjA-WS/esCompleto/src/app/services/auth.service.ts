import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { RegisterRequest } from '../models/register-request.model';
import { UserRequest } from '../models/user-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.api}/login`, request);
  }

  register(request: RegisterRequest): Observable<{ esito: boolean; }> {
    return this.http.post<{ esito: boolean; }>(`${environment.api}/register`, request);
  }

  getUser(): Observable<UserRequest[]> {
    return this.http.get<UserRequest[]>(`${environment.api}/task`);
  }

  checkToken(): Observable<LoginResponse> {
    return this.http.get<LoginResponse>(`${environment.api}/checkToken`);
  }

}
